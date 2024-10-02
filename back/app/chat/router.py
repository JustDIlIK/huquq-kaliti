import datetime
import os
import shutil
from secrets import token_hex
from typing import List, Dict

from fastapi import APIRouter, Depends, HTTPException, UploadFile
from sqlalchemy import and_
from starlette.websockets import WebSocket, WebSocketDisconnect

from app.chat.models import Chat, Message
from app.repository.tools import get_list_data
from app.users.dependencies import get_current_user
from app.users.models import User

router = APIRouter(prefix="/chat", tags=["Чат"])


@router.get("/")
async def get_chat_list(page: int = 1, limit: int = 15, user: User = Depends(get_current_user)):
    return await get_list_data(Chat, page, limit)


@router.get('/{chat_id}')
async def get_chat_detail(chat_id: str, page: int = 1, limit: int = 15, user: User = Depends(get_current_user)):
    chat = await Chat.find_one_or_fail(filter=Chat.id == chat_id, includes=['user_1', 'user_2'])
    print(chat.user_1_id, user.id, chat.user_2_id)
    print(str(chat.user_1_id) == str(user.id))
    print(int(chat.user_1_id) == int(user.id))

    if not (chat.user_1_id == user.id or chat.user_2_id == user.id):
        raise HTTPException(status_code=403, detail="Not your chat")
    return {
        'chat': chat,
        'messages': await Message.paginate(filter=Message.chat_id == chat.id, page=page, limit=limit),
        'total': await Message.count(filter=Message.chat_id == chat.id)
    }


@router.post('/{chat_id}')
async def send_message(chat_id: str,
                       file_list: List[UploadFile],
                       message: str = None,
                       user: User = Depends(get_current_user)):
    chat = await Chat.find_one_or_fail(filter=Chat.id == chat_id, includes=['user_1', 'user_2'])
    if chat.user_1_id != user.id or chat.user_2_id != user.id:
        raise HTTPException(status_code=403, detail="Not your chat")
    file_path_list = []
    folders = f"media/chats/{chat_id}/"
    os.makedirs(os.path.dirname(folders), exist_ok=True)
    for file in file_list:
        file_name = token_hex(16)
        path = f"{folders}{file_name}.webp"
        with open(path, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
        file_path_list.append(path)
    message = await Message.create(
        chat_id=chat_id,
        sender_id=user.id,
        content={
            "files": file_path_list,
            "message": message
        }
    )
    message_data = message.__dict__
    message_data['created_at'] = str(message.created_at)
    del message_data['_sa_instance_state']
    await manager.broadcast(message_data, chat_id)

    return message


@router.put('/message/{message_id}')
async def edit_message(message_id: str,
                       message: str,
                       user: User = Depends(get_current_user)):
    message = await Message.find_one_or_fail(filter=and_(Message.id == message_id,
                                                         Message.sender_id == user.id), includes=['chat', ])
    content = message.content
    content['message'] = message
    message = await Message.update(model_id=message.id, content=content)
    return message


@router.delete('/message/{message_id}')
async def delete_message(message_id: str, user: User = Depends(get_current_user)):
    await Message.delete(filter=and_(Message.id == message_id, Message.sender_id == user.id))
    return {
        'status': 200,
        'detail': 'success'
    }


@router.post('/messages/read')
async def read_message(message_ids: List[str], user: User = Depends(get_current_user)):
    messages = await Message.get_all(filter=Message.id.in_(message_ids))
    await Message.bulk_update_records([{
        'id': message.id,
        'read_at': datetime.datetime.utcnow()
    } for message in messages])
    return {
        "status": 200,
        "detail": "success"
    }


class ConnectionManager:
    def __init__(self):
        # Словарь для хранения активных соединений по чатам
        self.active_connections: Dict[str, List[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, chat_id: str):
        await websocket.accept()
        if chat_id not in self.active_connections:
            self.active_connections[chat_id] = []
        self.active_connections[chat_id].append(websocket)

    def disconnect(self, websocket: WebSocket, chat_id: str):
        if chat_id in self.active_connections:
            self.active_connections[chat_id].remove(websocket)
            if not self.active_connections[chat_id]:
                del self.active_connections[chat_id]

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message, chat_id: str):
        if chat_id in self.active_connections:
            for connection in self.active_connections[chat_id]:
                await connection.send_json(message)


manager = ConnectionManager()


@router.websocket('/ws/{chat_id}')
async def websocket_endpoint(websocket: WebSocket, chat_id: str):

    user = await get_current_user(websocket.headers.get('Authorization'))
    chat = await Chat.find_by_id_or_fail(model_id=chat_id)

    if chat.user_1_id != user.id and chat.user_2_id != user.id:
        raise HTTPException(status_code=403, detail="Not your chat")
    await manager.connect(websocket, chat_id)

    try:
        while True:
            print(chat_id)
            data = await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket, chat_id)
        # await manager.broadcast(f"Chat #{chat_id} left the chat", chat_id)
