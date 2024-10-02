from fastapi import APIRouter, Depends

from app.questions.models import Question
from app.questions.schemas import SGQuestion, SQuestion, SSQuestion
from app.repository.tools import get_list_data
from app.users.dependencies import get_admin, has_perm
from app.users.models import User

router = APIRouter(prefix="/questions", tags=["Часто задаваемые вопросы"])


@router.get('')
async def get_questions(page: int = 1, limit: int = 5) -> SGQuestion:
    return await get_list_data(Question, page, limit)

@router.get('/{question_id}')
async def get_question(question_id: int) -> SQuestion:
    return await Question.find_by_id_or_fail(model_id=question_id)

@router.post('', status_code=201)
@has_perm('all, question, question.create')
async def create_question(data: SQuestion, page: int = 1, limit: int = 5,
                          user: User = Depends(get_admin)) -> SGQuestion:
    await Question.create(**data.dict())
    return await get_list_data(Question, page, limit)


@router.put('/{question_id}')
@has_perm('all, question, question.update')
async def update_question(question_id: int, data: SQuestion, page: int = 1, limit: int = 5,
                          user: User = Depends(get_admin)) -> SGQuestion:

    await Question.update(model_id=question_id, **data.dict())
    return await get_list_data(Question, page, limit)


@router.delete('/{question_id}')
@has_perm('all, question, question.delete')
async def delete_question(question_id: int, page: int = 1, limit: int = 5,
                          user: User = Depends(get_admin)) -> SGQuestion:
    await Question.delete(Question.id == question_id)
    return await get_list_data(Question, page, limit)
