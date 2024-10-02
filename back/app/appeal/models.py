from enum import Enum as pyEnum

from sqlalchemy import Column, String, Text, ForeignKey, DateTime, func, JSON, Enum, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.repository.base import Base


class AppealStatus(pyEnum):
    NEW = 'new'
    IN_PROGRESS = 'in_progress'
    COMPLETED = 'completed'
    DELETED = 'deleted'
    FAILED = 'failed'


class AppealService(Base):
    appeal_id = Column(ForeignKey('appeals.id'), nullable=False)
    service_id = Column(ForeignKey('services.id'), nullable=False)
    __table_args__ = (UniqueConstraint('appeal_id', 'service_id'), )

class Appeal(Base):
    title = Column(String(255))
    description = Column(Text)
    languages = Column(JSON, nullable=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    status: Mapped[AppealStatus] = mapped_column(default=AppealStatus.NEW)
    services = relationship('Service', secondary='appealservices', back_populates='appeals')


class AppealRequestStatus(pyEnum):
    NEW = 'new'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'


class AppealRequest(Base):
    lawyer_id = Column(ForeignKey('lawyers.id'), nullable=False)
    appeal_id = Column(ForeignKey('appeals.id'), nullable=False)
    message = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())
    status: Mapped[AppealRequestStatus] = mapped_column(default=AppealRequestStatus.NEW)

