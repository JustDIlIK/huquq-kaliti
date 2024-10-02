import datetime

from sqlalchemy import Column, JSON, String, DateTime, func, Boolean

from app.repository.base import Base


class News(Base):
    title = Column(JSON)
    description = Column(JSON)
    content = Column(JSON)
    image = Column(String(length=255))
    slug = Column(String(length=255), unique=True)
    published_at = Column(DateTime,
                          server_default=func.now())
    is_published = Column(Boolean, default=False)
