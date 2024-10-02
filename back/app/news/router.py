import os
import shutil
from secrets import token_hex

from fastapi import APIRouter, Depends, UploadFile
from slugify import slugify

from app.news.models import News
from app.news.schemas import SCNews, SGNews, SNews
from app.repository.tools import get_list_data
from app.users.dependencies import has_perm, get_current_user
from app.users.models import User

router = APIRouter(prefix="/news", tags=["Новости"])


@router.get('')
async def get_news(page: int = 1, limit: int = 15) -> SGNews:
    return await get_list_data(News, page=page, limit=limit)


@router.get('/{slug}')
async def get_news_by_slug(slug: str) -> SNews:
    return await News.find_one_or_fail(filter=News.slug == slug)


@router.post('/')
@has_perm('all, news, news.create')
async def create_news(data: SCNews, image: UploadFile, user: User = Depends(get_current_user)) -> SNews:
    file_name = token_hex(16)
    folders = f"media/news/{slugify(data.title.en)}/"
    path = f"{folders}{file_name}.webp"
    os.makedirs(os.path.dirname(folders), exist_ok=True)
    with open(path, "wb+") as file_object:
        shutil.copyfileobj(image.file, file_object)
    news = await News.create(
        title=dict(data.title),
        content=dict(data.content),
        description=dict(data.description),
        image=path,
        is_published=data.is_published,
        slug=slugify(data.title.en)
    )
    return news


@router.post('/{news_id}')
@has_perm('all, news, news.update')
async def update_news(news_id: int, data: SCNews, image: UploadFile = None, user: User = Depends(get_current_user)):
    news = await News.find_by_id_or_fail(model_id=news_id)
    if image is None:
        news = await News.update(model_id=news_id,
                                 title=dict(data.title),
                                 content=dict(data.content),
                                 description=dict(data.description),
                                 is_published=data.is_published,
                                 slug=slugify(data.title.en)
                                 )
        return news
    try:
        os.remove(path=f"{news.image}")
    except Exception as e:
        print(e)
    file_name = token_hex(16)
    folders = f"media/news/{slugify(data.title.en)}/"
    path = f"{folders}{file_name}.webp"
    os.makedirs(os.path.dirname(folders), exist_ok=True)
    with open(path, "wb+") as file_object:
        shutil.copyfileobj(image.file, file_object)
    news = await News.update(
        model_id=news_id,
        title=dict(data.title),
        content=dict(data.content),
        description=dict(data.description),
        image=path,
        is_published=data.is_published,
        slug=slugify(data.title.en)
    )
    return news


@router.delete('/{news_id}')
@has_perm('all, news, news.delete')
async def delete_news(news_id: int, page: int = 1, limit: int = 15, user: User = Depends(get_current_user)) -> SGNews:
    await News.delete(filter=News.id == news_id)
    return await get_list_data(News, page, limit)
