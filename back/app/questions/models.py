from sqlalchemy import Column, String, Text, JSON

from app.repository.base import Base


class Question(Base):
    question = Column(JSON, nullable=False)
    answer = Column(JSON, nullable=False)
