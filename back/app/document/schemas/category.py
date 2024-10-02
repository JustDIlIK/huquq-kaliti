from typing import List

from pydantic import BaseModel

from app.document.schemas.document import SDocument
from app.repository.generated_models import SLanguage
from app.repository.schemas import SBaseListResponse


class SCategory(BaseModel):
    names: SLanguage




class SSubcategory(BaseModel):
    id: int
    names: dict
    slug: str
    documents: List[SDocument]


class SUSubcategory(BaseModel):
    names: SLanguage
    category_id: int


class SCategoryModel(BaseModel):
    id: int
    names: dict
    slug: str
    subcategories: List[SSubcategory]



class SSubcategoryModel(BaseModel):
    id: int
    names: dict
    category: SSubcategory
    slug: str


class SGCategory(SBaseListResponse):
    data: List[SCategoryModel]
