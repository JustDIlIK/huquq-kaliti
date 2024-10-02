import datetime
from typing import List

from pydantic import BaseModel

from app.repository.generated_models import SLanguage
from app.service.schemas import SService


class SLawyer(BaseModel):
    id: int
    accepted: bool
    services: List[SService]
    rating: float
    about: dict
    education: dict
    experience: dict

class SEducation(BaseModel):
    education_place: str
    education_level: str
    education_start_year: int
    education_end_year: int


class SExperience(BaseModel):
    company_name: str
    start_data: datetime.date
    end_data: datetime.date
    position: str
    description: str | None


class SCLawyer(BaseModel):
    about: SLanguage
    education: List[SEducation]
    experience: List[SExperience]
    service_ids: List[int]




class SULawyer(BaseModel):
    about: SLanguage
    education: List[SEducation]
    new_service_ids: List[int]
    remove_service_ids: List[int]
    experience: List[SExperience]
