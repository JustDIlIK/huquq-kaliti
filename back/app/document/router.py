from fastapi import APIRouter

from .routes.category import router as router_category
from .routes.document import router as router_document

router = APIRouter(prefix="/document", tags=["Документы"])
router.include_router(router_category)
router.include_router(router_document)
