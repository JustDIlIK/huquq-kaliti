import datetime
from typing import List

from pydantic import BaseModel

from app.repository.generated_models import SLanguage
from app.repository.schemas import SBaseListResponse


class SNews(BaseModel):
    id: int
    title: SLanguage
    description: SLanguage
    content: SLanguage
    image: str
    is_published: bool
    published_at: datetime.datetime
    slug: str


class SGNews(SBaseListResponse):
    data: List[SNews]


class SCNews(BaseModel):
    title: SLanguage
    description: SLanguage
    content: SLanguage
    is_published: bool
