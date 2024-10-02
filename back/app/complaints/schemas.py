import datetime
from typing import List, Union, Optional

from pydantic import BaseModel

from app.repository.schemas import SBaseListResponse
from app.users.schemas import SUser


class SComplaint(BaseModel):
    title: str
    content: str
    created_at: datetime.datetime
    status: bool


class SAdminComplaint(SComplaint):
    id: int
    user: SUser
    comment: Union[str | None]
    answered_user: Union[SUser | None]
    answered_at: Union[datetime.datetime | None]
    for_lawyer: bool

class SUserComlaint(SComplaint):
    id: int
    comment: Union[str | None]



class SGUserComplaint(SBaseListResponse):
    data: List[SUserComlaint]
class SGAdminComplaint(SBaseListResponse):
    data: List[SAdminComplaint]


class SCComplaint(BaseModel):
    title: str
    content: str


class SChComplaint(BaseModel):
    comment: str