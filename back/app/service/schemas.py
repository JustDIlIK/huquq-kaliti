from typing import List

from pydantic import BaseModel

from app.repository.generated_models import SLanguage
from app.repository.schemas import SBaseListResponse, BaseLocale


class SService(BaseModel):
    names: SLanguage
    descriptions: SLanguage

class SSService(SService):
    id: int




class SGService(SBaseListResponse):
    data: List[SSService]
