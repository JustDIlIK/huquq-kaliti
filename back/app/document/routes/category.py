from fastapi import APIRouter, Depends
from slugify import slugify

from app.document.models import Category, Subcategory
from app.document.schemas.category import SGCategory, SCategory, SCategoryModel, SUSubcategory, SSubcategoryModel
from app.repository.tools import get_list_data
from app.users.dependencies import get_current_user, has_perm
from app.users.models import User

router = APIRouter(prefix='/category', tags=['Категория документов'])


@router.get('')
async def get_categories(page: int = 1, limit: int = 15) -> SGCategory:
    return await get_list_data(Category, page, limit, includes=['subcategories', 'subcategories.documents'])


@router.get('/{category_id}')
async def get_category_info(category_id: int) -> SCategoryModel:
    return await Category.find_by_id_or_fail(model_id=category_id, includes=['subcategories', 'subcategories.documents'])


@router.post('/subcategory/{category_id}')
@has_perm('all, category, category.create')
async def add_subcategory(category_id: int, data: SCategory, page: int = 1, limit: int = 15,
                          user: User = Depends(get_current_user)):
    await Subcategory.create(category_id=category_id, slug=slugify(data.names.en), names=dict(data.names))
    return await get_list_data(Category, page, limit, includes=['subcategories'])


@router.put('/subcategory/{subcategory_id}')
@has_perm('all, category, category.update')
async def update_subcategory(subcategory_id: int, data: SUSubcategory, page: int = 1, limit: int = 15,
                             user: User = Depends(get_current_user)) -> SGCategory:
    await Subcategory.update(model_id=subcategory_id, names=dict(data.names), slug=slugify(data.names.en),
                             category_id=data.category_id)
    return await get_list_data(Category, page, limit, includes=['subcategories'])


@router.delete('/subcategory/{subcategory_id}')
@has_perm('all, category, category.delete')
async def delete_subcategory(subcategory_id: int, page: int = 1, limit: int = 15,
                             user: User = Depends(get_current_user)) -> SGCategory:
    subcategory = await Subcategory.find_by_id_or_fail(model_id=subcategory_id)
    await Subcategory.delete(filter=Subcategory.id == subcategory_id)
    return await get_list_data(Category, page, limit, includes=['subcategories'])

# TODO required permissions [category, category.create]
@router.post('')
@has_perm('all, category, category.create')
async def create_category(data: SCategory, page: int = 1, limit: int = 15,
                          user: User = Depends(get_current_user)) -> SGCategory:
    await Category.create(names=dict(data.names), slug=slugify(data.names.en))
    return await get_list_data(Category, page, limit, includes=['subcategories'])


# TODO required permissions [category.update]
@router.put('/{category_id}')
@has_perm('all, category, category.update')
async def edit_category(category_id: int, data: SCategory, page: int = 1, limit: int = 15, user:User=Depends(get_current_user)) -> SGCategory:
    await Category.update(model_id=category_id, slug=slugify(data.names.en), names=dict(data.names))
    return await get_list_data(Category, page, limit, includes=['subcategories'])


# TODO requried permissions [category.delete]
@router.delete('/{category_id}')
@has_perm('all, category, category.delete')
async def delete_category(category_id: int, page: int = 1, limit: int = 15,
                          user: User = Depends(get_current_user)) -> SGCategory:
    await Category.delete(filter=Category.id == category_id)
    return await get_list_data(Category, page, limit, includes=['subcategories'])
