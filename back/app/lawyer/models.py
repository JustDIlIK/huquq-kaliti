from sqlalchemy import Column, ForeignKey, UniqueConstraint, Float, Text, JSON, String, Boolean
from sqlalchemy.orm import relationship

from app.repository.base import Base
from app.service.models import Service


class LawyerService(Base):
    lawyer_id = Column(ForeignKey('lawyers.id'))
    service_id = Column(ForeignKey('services.id'))
    __table_args__ = (UniqueConstraint('lawyer_id', 'service_id'),)

class Lawyer(Base):
    user_id = Column(ForeignKey('users.id'), nullable=False, unique=True)
    # Юрист принят админами или нет.
    accepted = Column(Boolean, default=False)
    services = relationship('Service', secondary='lawyerservices', back_populates='lawyers')
    rating = Column(Float, nullable=True, default=5.0)
    about = Column(JSON, nullable=True)
    education = Column(JSON, nullable=True)
    experience = Column(JSON, nullable=True)
    user = relationship('User', back_populates='lawyer')
    questions = relationship('LawyerQuestion', back_populates='lawyer')


class Comment(Base):
    user_id = Column(ForeignKey('users.id'), nullable=False)
    lawyer_id = Column(ForeignKey('lawyers.id'), nullable=False)
    text = Column(Text, nullable=False)
    rating = Column(Float, nullable=False)
    parent_id = Column(ForeignKey('comments.id'), nullable=True)
    # parent = relationship('Comment', backref='replies')


class LawyerQuestion(Base):
    question = Column(JSON, nullable=False)
    answer = Column(JSON, nullable=False)
    lawyer_id = Column(ForeignKey('lawyers.id', ondelete='CASCADE'))
    lawyer = relationship('Lawyer', back_populates='questions')


# class LawyerRequest(Base):
#
#     user_id = Column(ForeignKey('users.id', ondelete='CASCADE'))
