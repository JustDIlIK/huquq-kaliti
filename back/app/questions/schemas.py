from typing import List, Optional

from pydantic import BaseModel

from app.repository.generated_models import SLanguage
from app.repository.schemas import SBaseListResponse


class SQuestion(BaseModel):
    question: SLanguage
    answer: SLanguage


class SUQuestion(BaseModel):
    question: Optional[SLanguage]
    answer: Optional[SLanguage]


class SSQuestion(SQuestion):
    id: int


class SGQuestion(SBaseListResponse):
    data: List[SSQuestion]
