import datetime
from typing import Optional

from fastapi import APIRouter, Depends
from sqlalchemy import and_

from app.complaints.models import Complaint
from app.complaints.schemas import SCComplaint, SChComplaint, SGUserComplaint, SGAdminComplaint, SAdminComplaint
from app.repository.tools import get_list_data
from app.users.dependencies import has_perm, get_current_user
from app.users.models import User

router = APIRouter(prefix="/complaints", tags=["Жалобы"])

@router.get('/')
@has_perm('all, complaints, complaint.read')
async def get_complaints(page: int = 1, limit: int = 10, user: User = Depends(get_current_user)) -> SGAdminComplaint:

    return await get_list_data(Complaint, page, limit, includes=['user', 'user.role', 'answered_user'])

@router.get('/my')
async def get_my_complaints(page: int = 1, limit: int = 10, user: User = Depends(get_current_user)) -> SGUserComplaint:
    return await get_list_data(Complaint, page, limit, Complaint.user_id == user.id)

@router.get('/{complaint_id}')
@has_perm('all, complaint, compaint.read')
async def get_complaint(complaint_id: int, user: User = Depends(get_current_user)) -> SAdminComplaint:

    complaint = await Complaint.find_by_id_or_fail(model_id=complaint_id, includes=['user', 'user.role',
                                                                                    'answered_user',
                                                                                    'answered_user.role'])
    return complaint


@router.post('/', status_code=201)
async def create_complaint(data: SCComplaint, lawyer: Optional[bool] = False, page: int = 1, limit: int = 5,
                           user: User = Depends(get_current_user)) -> SGUserComplaint:
    data = data.dict()
    if user.lawyer:
        data['for_lawyer'] = lawyer
    data['user_id'] = user.id
    await Complaint.create(**data)
    return await get_list_data(Complaint, page, limit, Complaint.user_id == user.id)


@router.patch('/{complaint_id}')
@has_perm('all, complaint, complaint.change')
async def change_status_of_complaint(complaint_id: int, data: SChComplaint,
                                     user: User = Depends(get_current_user)) -> SAdminComplaint:
    complaint = await Complaint.find_one_or_none(and_(Complaint.id == complaint_id, Complaint.status == False))
    if complaint is not None:
        await Complaint.update(model_id=complaint_id, status=True, comment=data.comment,
                                           answered_user_id=user.id, answered_at=datetime.datetime.now())
    complaint = await Complaint.find_by_id_or_fail(model_id=complaint_id, includes=['user', 'answered_user',
                                                                                    'user.role', 'answered_user.role'])
    return complaint


