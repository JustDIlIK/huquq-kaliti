from fastapi import APIRouter, Depends

from app.appeal.models import Appeal
from app.repository.tools import get_list_data
from app.users.dependencies import get_current_user, lawyer_required
from app.users.models import User

router = APIRouter(prefix="/appeal", tags=["Заявки"])


@router.get('/')
@lawyer_required
async def get_appeals(page=1, limit=10, user: User = Depends(get_current_user)):
    service_ids = [service.id for service in user.lawyer.services]
    return await get_list_data(Appeal, page=page, limit=limit, filter=Appeal.services.in_(service_ids))



