from fastapi import APIRouter, Depends

from app.repository.tools import get_list_data
from app.service.models import Service
from app.service.schemas import SGService, SService, SSService
from app.users.dependencies import get_current_user, has_perm
from app.users.models import User

router = APIRouter(prefix="/service", tags=["Услуги"])


@router.get('')
async def get_services(page: int = 1, limit: int = 15) -> SGService:
    return await get_list_data(Service, page, limit)


@router.get('/{service_id}')
async def get_service(service_id: int) -> SSService:
    return await Service.find_by_id_or_fail(model_id=service_id)


@router.post('')
@has_perm('all,service,service.create')
async def create_service(data: SService, page: int = 1, limit: int = 15,
                         user: User = Depends(get_current_user)) -> SGService:
    await Service.create(names=dict(data.names), descriptions=dict(data.descriptions),)
    return await get_list_data(Service, page, limit)




@router.put('/{service_id}')
@has_perm('all,service,service.update')
async def change_service(service_id: int, data: SService, page: int = 1, limit: int = 15,
                         user=Depends(get_current_user)) -> SGService:
    await Service.update(model_id=service_id, **data.dict())
    return await get_list_data(Service, page, limit)


@router.delete('/{service_id}')
@has_perm('all,service,service.delete')
async def delete_service(service_id: int, page: int = 1, limit: int = 15, user=Depends(get_current_user)) -> SGService:
    await Service.delete(filter=Service.id == service_id)
    return await get_list_data(Service, page, limit)
