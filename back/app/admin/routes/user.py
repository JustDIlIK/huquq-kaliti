from fastapi import APIRouter, Depends

from app.admin.schemas.user import SGUser, SUUser, SGUserLawyer
from app.repository.tools import get_list_data
from app.users.dependencies import has_perm, get_current_user
from app.users.models import User
from app.users.schemas import SCurrentUser

router = APIRouter(
    prefix="/users",
    tags=["Пользователи"],
)


# TODO required permissions [user, user.read]
@router.get('/')
@has_perm('all, user, user.read')
async def get_user_list(page: int = 1, limit: int = 15, user: User = Depends(get_current_user)) -> SGUser:
    return await get_list_data(User, page, limit, includes=['role', 'role.permissions'])


@router.get('/{user_id}')
@has_perm('all, user, user.read')
async def get_user_detail(user_id: int, user: User = Depends(get_current_user)) -> SCurrentUser:
    return await User.find_by_id_or_fail(model_id=user_id, includes=['role', 'role.permissions', 'lawyer',
                                                                     'lawyer.services'])


# TODO requured permissions [user.update]
@router.post('/{user_id}')
@has_perm('all, user, user.update')
async def update_user(user_id: int, data: SUUser, user: User = Depends(get_current_user)) -> SCurrentUser:
    await User.update(model_id=user_id, role_id=data.role_id)
    return await User.find_by_id_or_fail(model_id=user_id, includes=['role','role.permissions'])


@router.post('/block/{user_id}')
@has_perm('all, user, user.block')
async def block_user(user_id: int, page: int = 1, limit: int = 15, user: User = Depends(get_current_user)) -> SGUser:
    await User.update(model_id=user_id, is_active=False)
    return await get_list_data(User, page, limit, includes=['role','role.permissions'])


@router.post('/unblock/{user_id}')
@has_perm('all, user, user.block')
async def unblock_user(user_id: int, page: int = 1, limit: int = 15, user: User = Depends(get_current_user)) -> SGUser:
    await User.update(model_id=user_id, is_active=True)
    return await get_list_data(User, page, limit, includes=['role', 'role.permissions'])


@router.get('/lawyer-request')
@has_perm('all, user, user.lawyer')
async def get_users_to_become_lawyer(user: User = Depends(get_current_user)) -> SGUserLawyer:
    users_with_request = await User.get_all(filter=User.lawyer.accepted == True, includes=['lawyer'])
    return users_with_request