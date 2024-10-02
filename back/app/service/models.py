from sqlalchemy import Column, JSON
from sqlalchemy.orm import relationship

from app.repository.base import Base
from app.appeal.models import Appeal

class Service(Base):
    names = Column(JSON)
    descriptions = Column(JSON)
    lawyers = relationship('Lawyer', secondary='lawyerservices', back_populates='services')
    appeals = relationship('Appeal', secondary='appealservices', back_populates='services')
    