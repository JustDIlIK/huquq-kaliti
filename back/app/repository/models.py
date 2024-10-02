from typing import List

from pydantic import create_model

from app.repository.base import Base
from app.database import async_session_maker
from sqlalchemy import insert, String, Column, select
from sqlalchemy.orm import Mapped


class Language(Base):
    code = Column(String(length=255))
    name = Column(String(length=255))

    @classmethod
    async def create(cls, includes: List[str] = None,**data):
        async with async_session_maker() as session:
            query = insert(cls).values(**data)
            res = await session.execute(query)
            await session.commit()
            last_id = res.lastrowid
            select_query = select(cls).where(cls.id == last_id)
            result = await session.execute(select_query)
            DynamicModel = await get_dynamic_model()
            with open("app/repository/generated_models.py", "w") as f:
                f.write("from typing import Optional\n")
                f.write("from pydantic import BaseModel\n\n")

                f.write(f"class S{cls.__name__}(BaseModel):\n")
                for field_name, field_type in DynamicModel.__annotations__.items():
                    f.write(f"    {field_name}: Optional[{field_type.__name__}] = None\n")
            return result.scalar()


async def get_dynamic_model():
    attributes = await Language.get_all()
    fields = {}

    for attribute in attributes:
        fields[attribute.code] = (str, ...)

    # Создание динамической модели
    DynamicModel = create_model('DynamicModel', **fields)
    return DynamicModel
