from sqlalchemy import Column, JSON, ForeignKey, UniqueConstraint, select, String
from sqlalchemy.orm import Mapped, mapped_column, joinedload, relationship

from app.database import async_session_maker
from app.exceptions import ModelNotFoundException
from app.repository.base import Base


class Category(Base):
    names = Column(JSON)
    slug = Column(String(length=255), unique=True)

    subcategories = relationship('Subcategory', back_populates='category')



class Subcategory(Base):
    names = Column(JSON)
    slug = Column(String(length=255), unique=True)
    category_id = Column(ForeignKey('categories.id', ondelete='cascade'), nullable=False)
    category = relationship('Category', back_populates='subcategories')
    documents = relationship('Document', back_populates='subcategory')



class Document(Base):
    names = Column(JSON)
    slug = Column(String(length=255), unique=True)
    subcategory_id = Column(ForeignKey('subcategories.id', ondelete='cascade'), nullable=False)
    order: Mapped[int] = mapped_column(nullable=True, unique=False)
    subcategory = relationship('Subcategory', back_populates='documents')
    sections = relationship('DocumentSection', back_populates='document')




class DocumentSection(Base):
    texts = Column(JSON)
    document_id = Column(ForeignKey('documents.id', ondelete='cascade'), nullable=False)
    document = relationship('Document', back_populates='sections')
    options = Column(JSON)
    next_new_line: Mapped[bool]
    order: Mapped[int]
    inputs = relationship('SectionInput', back_populates='document_section')
    # __table_args__ = (UniqueConstraint('document_id', 'order', name='_document_order_unique'),)


class SectionInput(Base):
    texts = Column(JSON)
    document_section_id = Column(ForeignKey('documentsections.id', ondelete='cascade'), nullable=False)
    options = Column(JSON)
    next_new_line: Mapped[bool]
    order: Mapped[int]
    document_section = relationship('DocumentSection', back_populates='inputs')

    # __table_args__ = (UniqueConstraint('document_section_id', 'order', name='_documentsection_order_unique'),)
