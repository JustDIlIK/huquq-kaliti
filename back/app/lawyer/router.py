import datetime

from fastapi import APIRouter, Response, Depends
from sqlalchemy import and_

from app.exceptions import UserAlreadyExistsException, NotPermissionException
from app.lawyer.models import Lawyer, LawyerService
from app.lawyer.schemas import SCLawyer, SULawyer
from app.repository.tools import get_list_data, convert_to_json_format
from app.users.auth import get_hashed_password, create_access_token
from app.users.dependencies import get_current_user, lawyer_required, has_perm
from app.users.models import User, Role

router = APIRouter(prefix="/lawyer", tags=["Юрист"])


@router.get('/')
async def get_lawyers(page: int = 1, limit: int = 15):
    return await get_list_data(Lawyer, page, limit, Lawyer.accepted == True)




@router.post('/register')
async def register_by_lawyer(data: SCLawyer, user: User = Depends(get_current_user)):
    data = convert_to_json_format(data.dict())
    service_ids = data.pop('service_ids')

    lawyer = await Lawyer.create(user_id=user.id, rating=5, **data)
    await LawyerService.insert(
        [LawyerService(service_id=service_id, lawyer_id=lawyer.id) for service_id in service_ids])
    return await User.find_one_or_fail(filter=User.id == user.id, includes=['lawyer'])



@router.patch('/{lawyer_id}')
@has_perm('all, lawyer, lawyer.accept')
async def accept_lawyer(lawyer_id: int, page: int = 1, limit: int = 15, user: User = Depends(get_current_user)):
    lawyer = await Lawyer.find_one_or_fail(and_(Lawyer.id == lawyer_id, Lawyer.accepted == False))
    await Lawyer.update(model_id=lawyer.id, accepted=True)
    return await get_list_data(Lawyer, page, limit, Lawyer.accepted == True)


@router.post('/')
@lawyer_required
async def update_lawyer_data(data: SULawyer, user: User = Depends(get_current_user)):

    data = data.dict()
    await Lawyer.update(model_id=user.lawyer.id,
                        about=data['about'],
                        education=data['education'],
                        experience=data['experience']
                        )
    await LawyerService.delete(
        filter=and_(LawyerService.lawyer_id == user.lawyer.id,
                    LawyerService.service_id.in_(data['remove_service_ids'])))
    await LawyerService.insert(
        [LawyerService(service_id=service_id, lawyer_id=user.lawyer.id) for service_id in data['new_service_ids']])
    return await User.find_one_or_fail(filter=User.id == user.id)


