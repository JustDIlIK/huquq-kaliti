from typing import List, Optional

from pydantic import BaseModel

from app.repository.generated_models import SLanguage
from app.repository.schemas import SBaseListResponse


class SSectionOptions(BaseModel):
    align: str
    color: str
    size: int
    weight: int
    style: str


class SInputOptions(SSectionOptions):
    type: str


class SCSectionInput(BaseModel):
    texts: dict
    options: SInputOptions
    next_new_line: bool
    order: int


class SSectionInput(SCSectionInput):
    id: Optional[int]


class SCDocumentSection(BaseModel):
    texts: SLanguage
    options: SSectionOptions
    next_new_line: bool
    order: int
    inputs: List[SCSectionInput]


class SDocumentSection(SCDocumentSection):
    id: int
    inputs: List[SSectionInput]


class SDocument(BaseModel):
    id: int
    names: SLanguage
    slug: str
    order: int | None


class SDocumentResponse(SDocument):
    sections: List[SDocumentSection]


class SGDocument(SBaseListResponse):
    data: List[SDocument]


class SCDocument(BaseModel):
    names: SLanguage
    subcategory_id: int | None
    order: int
    sections: List[SCDocumentSection]


class SUDocumentSectionInput(SDocumentSection):
    deleted_input_ids: List[int]
    new_inputs: List[SCSectionInput]

class SUDocument(BaseModel):
    names: SLanguage
    subcategory_id: int | None
    order: int
    new_sections: List[SCDocumentSection]
    deleted_section_ids: List[int]
    sections: List[SUDocumentSectionInput]
