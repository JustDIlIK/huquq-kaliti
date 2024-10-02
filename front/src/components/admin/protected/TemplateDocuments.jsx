import React, {useEffect, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadDocumentCategoryInfo, deleteDocument} from "../../../store/documents/documentsActions.js";
import {useTranslation} from "react-i18next";
import Modal from "../../ui/Modal.jsx";

const TemplateDocuments = () => {
    const {t, i18n} = useTranslation();
    const { category_id } = useParams();
    const categoryInfo = useSelector((state) => state.documents.categoryInfo);
    const dispatch = useDispatch();
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [activeId, setActiveId] = useState('');

    const openDeleteModal = (id) => {
        setActiveId(id)
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setActiveId('')
        setDeleteModalOpen(false);
    };

    const deleteDocument2 = () => {
        setDeleteModalOpen(false);
        dispatch(deleteDocument({id: activeId, page:1, limit: 1000}))
    };

    useEffect(() => {
        dispatch(loadDocumentCategoryInfo({category_id: category_id}))
    }, []);

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'bg-white rounded-lg p-3'}>
                    <MainTitle
                        className={'mb-2'}
                        title={`Список документов ${(categoryInfo && categoryInfo.id) ? categoryInfo.names[i18n.language] : ''}`}
                    />
                    <div>
                        {
                            categoryInfo && categoryInfo.id &&
                            categoryInfo.subcategories.map((subcategory, index) => (
                                <div key={index} className={'border rounded-lg p-3 bg-palatinate bg-opacity-5'}>
                                    <p className={'font-bold mb-2'}>
                                        {subcategory.names[i18n.language]}
                                    </p>
                                    <Link
                                        to={`/admin/document-constructor/${category_id}/${subcategory.id}`}
                                        className={'block mb-2 text-palatinate'}
                                    >
                                        +Добавить документ
                                    </Link>
                                    <div className={'flex flex-col gap-5'}>
                                        {
                                            subcategory.documents.map((document, docIndex) => (
                                                <div key={docIndex} className={'flex relative items-center justify-between w-full p-3 rounded-lg border bg-white bg-opacity-50 '}>
                                                    <Link to={`/admin/edit-document-constructor/${document.slug}/${category_id}/${subcategory.id}`}
                                                          className={'cursor-pointer hover:text-palatinate transition-all ease-in-out duration-300'}>
                                                        {document.names[i18n.language]}
                                                    </Link>
                                                    <button onClick={()=> openDeleteModal(document.id)} className={'absolute top-2 right-2 text-red-600 font-bold'}>
                                                        Удалить
                                                    </button>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/*start delete modal*/}
                <Modal isOpen={deleteModalOpen} onClose={closeDeleteModal}>
                    <div className={'px-10'}>
                        <p className={'font-bold'}>
                            Вы уверены что хотите удалить услугу?
                        </p>
                        <div className={'flex items-center gap-4'}>
                            <button onClick={deleteDocument2}>Да</button>
                            <button onClick={closeDeleteModal}>Нет</button>
                        </div>
                    </div>
                </Modal>
                {/*end delete modal*/}
            </div>
        </section>
    );
};

export default TemplateDocuments;