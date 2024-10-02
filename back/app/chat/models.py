import uuid

from sqlalchemy import Column, String, ForeignKey, JSON, DateTime, func
from sqlalchemy.orm import relationship

from app.repository.base import Base


class Chat(Base):
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_1_id = Column(ForeignKey('users.id'), nullable=False)
    user_2_id = Column(ForeignKey('users.id'), nullable=False)
    user_1 = relationship('User', foreign_keys=[user_1_id], back_populates='chats_user_1')
    user_2 = relationship('User', foreign_keys=[user_2_id], back_populates='chats_user_2')
    messages = relationship('Message', back_populates='chat')
    # appeal_id = Column(ForeignKey('appeals.id'), nullable=False)
    # appeal = relationship('Appeal', back_populates='chats')
    created_at = Column(DateTime, server_default=func.now())
    closed_at = Column(DateTime, nullable=True)


class Message(Base):
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    chat_id = Column(ForeignKey('chats.id'), nullable=False)
    sender_id = Column(ForeignKey('users.id'), nullable=False)
    content = Column(JSON)
    created_at = Column(DateTime, server_default=func.now())
    read_at = Column(DateTime, nullable=True)
    chat = relationship('Chat', back_populates='messages')
    edited_at = Column(DateTime, nullable=True)
