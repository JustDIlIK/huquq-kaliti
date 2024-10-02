from typing import Optional
from pydantic import BaseModel

class SLanguage(BaseModel):
    ru: Optional[str] = None
    uz: Optional[str] = None
    en: Optional[str] = None
    uz_l: Optional[str] = None
