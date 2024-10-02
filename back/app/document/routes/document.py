from fastapi import APIRouter, Depends
from slugify import slugify

from app.document.models import Document, DocumentSection, SectionInput, Category
from app.document.schemas.category import SCategoryModel
from app.document.schemas.document import SGDocument, SDocumentResponse, SCDocument, SUDocument
from app.repository.tools import get_list_data
from app.users.dependencies import has_perm, get_current_user
from app.users.models import User

router = APIRouter(prefix='', tags=['Шаблоны документов'])


@router.get('/')
async def get_documents(page: int = 1, limit: int = 15) -> SGDocument:
    return await get_list_data(Document, page, limit)


@router.get('/{document_slug}')
async def get_document(document_slug: str) -> SDocumentResponse:
    return await Document.find_one_or_fail(filter=Document.slug == document_slug,
                                           includes=['sections', 'sections.inputs', 'subcategory'])


async def create_document_sections(document: Document, new_sections: list):
    sections = []
    inputs = []
    for section in new_sections:
        new_section = DocumentSection(texts=dict(section.texts),
                                      document_id=document.id,
                                      options=dict(section.options),
                                      next_new_line=section.next_new_line,
                                      order=section.order
                                      )

        sections.append(new_section)
    await DocumentSection.insert(sections)
    for index, section in enumerate(new_sections):
        for input in section.inputs:
            new_input = SectionInput(texts=dict(input.texts),
                                     document_section_id=sections[index].id,
                                     options=dict(input.options),
                                     next_new_line=input.next_new_line,
                                     order=input.order
                                     )
            inputs.append(new_input)
    await SectionInput.insert(inputs)


@router.post('/')
@has_perm('all, document, document.create')
async def create_document(data: SCDocument, user: User = Depends(get_current_user)) -> SDocumentResponse:

    document = await Document.create(names=dict(data.names),
                                     subcategory_id=data.subcategory_id,
                                     slug=slugify(data.names.en),
                                     order=data.order,
                                     )
    await create_document_sections(document, data.sections)
    return await Document.find_one_or_fail(filter=Document.slug == document.slug,
                                           includes=['sections', 'sections.inputs', 'subcategory'])


@router.put('/{document_id}')
@has_perm('all, document, document.update')
async def update_document(document_id: int, data: SUDocument,
                          user: User = Depends(get_current_user)) -> SDocumentResponse:
    # document = await Document.find_one_or_fail(filter=Document.id == document_id)

    document = await Document.update(model_id=document_id,
                                     names=dict(data.names.dict()),
                                     slug=slugify(data.names.en),
                                     order=data.order,
                                     subcategory_id=data.subcategory_id,
                                     )
    await DocumentSection.delete(filter=DocumentSection.id.in_(data.deleted_section_ids))
    await create_document_sections(document, data.new_sections)
    deleted_input_ids = []
    for section in data.sections:
        deleted_input_ids.extend(section.deleted_input_ids)
    await SectionInput.delete(filter=SectionInput.id.in_(deleted_input_ids))
    update_sections = []
    update_inputs = []
    new_inputs = []
    for section in data.sections:
        section_data = section.dict()
        section_data.pop('new_inputs')
        section_data.pop('deleted_input_ids')

        # print(dict(**section_data))
        if section.id:
            update_sections.append(section_data)
        for input in section.inputs:
            if input.id:
                update_inputs.append(input.dict())
        new_inputs.extend(SectionInput(texts=dict(new_input.texts),
                                        options=new_input.options.dict(),
                                        next_new_line=new_input.next_new_line,
                                        order=new_input.order,
                                        document_section_id=section.id
                                        ) for new_input in section.new_inputs)

    await SectionInput.insert(new_inputs)
    await DocumentSection.bulk_update_records(update_sections)
    await SectionInput.bulk_update_records(update_inputs)

    return await Document.find_one_or_fail(filter=Document.slug == document.slug, includes=['sections', 'sections.inputs', 'subcategory'])

    # for section in new_sections:
    #     new_section = DocumentSection(texts=dict(section.texts),
    #                                   document_id=document.id,
    #                                   options=dict(section.options),
    #                                   next_new_line=section.next_new_line,
    #                                   order=section.order
    #                                   )
    #
    #     sections.append(new_section)
    # await DocumentSection.insert(sections)
    # for index, section in enumerate(new_sections):
    #     for input in section.inputs:
    #         new_input = SectionInput(texts=dict(input.texts),
    #                                  document_section_id=sections[index].id,
    #                                  options=dict(input.options),
    #                                  next_new_line=input.next_new_line,
    #                                  order=input.order
    #                                  )
    #         inputs.append(new_input)


@router.delete('/{document_id}')
@has_perm('all, document, document.delete')
async def delete_document(document_id: int, user: User = Depends(get_current_user)) -> SCategoryModel:
    document = await Document.find_by_id_or_fail(model_id=document_id, includes=['subcategory', 'subcategory.category'])
    category_id = document.subcategory.category_id

    await Document.delete(Document.id == document_id)

    category = await Category.find_by_id(model_id=category_id, includes=['subcategories', 'subcategories.documents'])
    return category


