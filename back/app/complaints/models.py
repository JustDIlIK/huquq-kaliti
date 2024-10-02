import datetime

from sqlalchemy import Column, Text, Boolean, TIMESTAMP, String, ForeignKey
from sqlalchemy.orm import relationship

from app.repository.base import Base


class Complaint(Base):
    title = Column(String(100))
    content = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, default=datetime.datetime.now())
    status = Column(Boolean, default=False)
    user_id = Column(ForeignKey('users.id', ondelete='cascade'), nullable=False)
    user = relationship('User', foreign_keys=[user_id], back_populates='complaints')
    for_lawyer = Column(Boolean, default=False)

    answered_at = Column(TIMESTAMP, nullable=True)
    answered_user_id = Column(ForeignKey('users.id'), nullable=True)
    answered_user = relationship('User', foreign_keys=[answered_user_id], back_populates='answered_complaints')
    comment = Column(String(100), nullable=True)

