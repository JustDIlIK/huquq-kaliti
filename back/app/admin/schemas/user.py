import datetime
from typing import List, Optional

from pydantic import BaseModel

from app.lawyer.schemas import SLawyer
from app.repository.schemas import SBaseListResponse
from app.users.schemas import SUser


class SGUser(SBaseListResponse):
    data: List[SUser]


class SUUser(BaseModel):
    role_id: int


class SUserLawyer(BaseModel):
    id: int
    email: str
    name: Optional[str]
    lastname: Optional[str]
    patronymic: Optional[str]
    is_active: bool
    created_at: datetime.datetime
    last_login: Optional[datetime.datetime]
    photo: Optional[str]
    lawyer: SLawyer


class SGUserLawyer(SBaseListResponse):
    data: List[SUserLawyer]
