import React, {useEffect, useState} from 'react';
import {loadServices} from "../../../store/services/servicesActions.js";
import {useDispatch, useSelector} from "react-redux";
import {
    createDocumentCategory, createDocumentSubcategory, deleteDocumentCategory, deleteDocumentSubcategory,
    editDocumentCategory, editDocumentSubcategory,
    loadDocumentCategories
} from "../../../store/documents/documentsActions.js";
import MainTitle from "../../ui/MainTitle.jsx";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import Modal from "../../ui/Modal.jsx";
import MainInput from "../../ui/MainInput.jsx";
import MainButton from "../../ui/MainButton.jsx";
import {Link} from "react-router-dom";

const TemplateCategories = () => {
    const {t, i18n} = useTranslation();
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState(false);
    const [activeSubCategory, setActiveSubCategory] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [createSubModalOpen, setCreateSubModalOpen] = useState(false);
    const [editSubModalOpen, setEditSubModalOpen] = useState(false);
    const [deleteSubModalOpen, setDeleteSubModalOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.documents.categories);
    const [formValues, setFormValues] = useState({
        names: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
    });
    const [subformValues, setSubformValues] = useState({
        names: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };
    const handleActiveCategoryChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setActiveCategory((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };
    const subhandleChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setSubformValues((prevSubformValues) => ({
            ...prevSubformValues,
            [key]: {
                ...prevSubformValues[key],
                [subKey]: value,
            },
        }));
    };
    const handleActiveSubCategoryChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setActiveSubCategory((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };

    useEffect(() => {
        dispatch(loadDocumentCategories({page: 1, limit: 1000}))
    }, []);

    const openCreateModal = () => {
        setCreateModalOpen(true);
    }
    const closeCreateModal = () => {
        setCreateModalOpen(false);
    }
    const addCategory = (e) => {
        e.preventDefault()
        setCreateModalOpen(false);
        dispatch(createDocumentCategory({form: formValues, page:1, limit: 1000}))
        setFormValues({
            names: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            }
        })
    }

    const openEditModal = (category) => {
        setActiveCategory(category)
        setEditModalOpen(true);
    }
    const closeEditModal = () => {
        setEditModalOpen(false);
    }
    const changeCategory = (e) => {
        e.preventDefault()
        setEditModalOpen(false)
        dispatch(editDocumentCategory({category_id: activeCategory.id, form: activeCategory, page: 1, limit: 1000}))
    }

    const openDeleteModal = (category) => {
        setActiveCategory(category)
        setDeleteModalOpen(true);
    }
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    }
    const deleteCategories2 = () => {
        setDeleteModalOpen(false);
        dispatch(deleteDocumentCategory({category_id: activeCategory.id, page: 1, limit: 1000}))
    }

    const openCreateSubModal = (activeId) => {
        setActiveCategoryId(activeId)
        setCreateSubModalOpen(true);
    }
    const closeCreateSubModal = () => {
        setActiveCategoryId('')
        setCreateSubModalOpen(false);
    }
    const addSubCategory = (e) => {
        e.preventDefault()
        setCreateSubModalOpen(false);
        dispatch(createDocumentSubcategory({category_id: activeCategoryId,form: subformValues, page:1, limit: 1000}))
        setSubformValues({
            names: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            }
        })
    }

    const openEditSubModal = (subcategory, category_id) => {
        setActiveSubCategory({
            ...subcategory,
            category_id: category_id
        });
        setEditSubModalOpen(true);
    }
    const closeEditSubModal = () => {
        setEditSubModalOpen(false);
    }
    const changeSubCategory = (e) => {
        e.preventDefault()
        setEditSubModalOpen(false)
        dispatch(editDocumentSubcategory({subcategory_id: activeSubCategory.id, form: activeSubCategory, page: 1, limit: 1000}))
    }

    const openDeleteSubModal = (subcategory) => {
        setActiveSubCategory(subcategory)
        setDeleteSubModalOpen(true);
    }
    const closeDeleteSubModal = () => {
        setDeleteSubModalOpen(false);
    }
    const deleteSubCategories2 = () => {
        setDeleteSubModalOpen(false);
        dispatch(deleteDocumentSubcategory({subcategory_id: activeSubCategory.id, page: 1, limit: 1000}))
    }

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'bg-white rounded-lg p-3'}>
                    <button onClick={openCreateModal} className={'mb-2 text-palatinate'}>
                        +Создать категорию
                    </button>
                    <MainTitle
                        title={'Категории'}
                    />
                    <div className={'mt-10 flex flex-col gap-2'}>
                        {
                            categories && categories.data && categories.data.map((category, index) => (
                                <div key={index} className={'border p-2 rounded-lg'}>
                                    <div className={'flex items-center justify-between bg-palatinate bg-opacity-5 px-2 py-3 rounded-lg'}>
                                        <div className={'flex items-start gap-2 flex-col'}>
                                            <p className={'font-bold mb-2'} >
                                                Название - {category.names[i18n.language]}
                                            </p>
                                            <Link
                                                to={`/admin/template-documents/${category.id}`}
                                                className={'font-bold hover:text-palatinate mb-2'}
                                            >
                                                <MainButton
                                                    className={'!py-2'}
                                                    content={'Документы'}
                                                />
                                            </Link>
                                        </div>
                                        <div className={'font-bold flex items-center gap-2'}>
                                            <button
                                                onClick={() => openEditModal(category)}
                                                className={'text-orange-400'}
                                            >
                                                Редактировать
                                            </button>
                                            <button
                                                onClick={() => openDeleteModal(category)}
                                                className={'text-red-500'}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                    <div className={'ml-2 my-4'}>
                                        <p className={'font-medium mb-2'}>
                                            Подкатегории:
                                        </p>
                                        <button onClick={()=> openCreateSubModal(category.id)} className={'text-palatinate'}>
                                            +Создать подкатегорию
                                        </button>
                                    </div>
                                    <div className={'flex flex-col gap-2'}>
                                        {
                                            category.subcategories.length ? (
                                                category.subcategories.map((subcategory, subindex) => (
                                                    <div key={subindex} className={'flex items-center justify-between ml-2 bg-paleSky bg-opacity-5 p-2 rounded-lg'}>
                                                        <p className={'font-medium'}>
                                                            {subcategory.names[i18n.language]}
                                                        </p>
                                                        <div className={'font-bold flex items-center gap-2'}>
                                                            <button
                                                                onClick={() => openEditSubModal(subcategory, category.id)}
                                                                className={'text-orange-400'}
                                                            >
                                                                Редактировать
                                                            </button>
                                                            <button
                                                                onClick={() => openDeleteSubModal(subcategory)}
                                                                className={'text-red-500'}
                                                            >
                                                                Удалить
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-doveGrey ml-2">
                                                    Нет подкатегорий
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        {
                            categories && categories.data && !categories.data.length &&
                            <div>
                                Категорий пока нет
                            </div>
                        }
                    </div>
                </div>
            </div>

            {/*start create modal*/}
            <Modal isOpen={createModalOpen} onClose={closeCreateModal}>
                <form onSubmit={addCategory}>
                    <p className={'text-xl font-bold'}>
                        Создать категорию:
                    </p>
                    <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                        <p className={'text-center font-bold text-xl'}>
                            Название:
                        </p>
                        <MainInput
                            id="names-ru"
                            name="names-ru"
                            label="Names Ru"
                            type="text"
                            required={true}
                            value={formValues.names.ru}
                            onChange={handleChange}
                        />
                        <MainInput
                            id="names-en"
                            name="names-en"
                            label="Names En"
                            type="text"
                            required={true}
                            value={formValues.names.en}
                            onChange={handleChange}
                        />
                        <MainInput
                            id="names-uz"
                            name="names-uz"
                            label="Names Uz"
                            type="text"
                            required={true}
                            value={formValues.names.uz}
                            onChange={handleChange}
                        />
                        <MainInput
                            id="names-uz_l"
                            name="names-uz_l"
                            label="Names Uz_l"
                            type="text"
                            required={true}
                            value={formValues.names.uz_l}
                            onChange={handleChange}
                        />
                    </div>
                    <MainButton
                        className={'w-full mt-3'}
                        content={'Создать'}
                    />
                </form>
            </Modal>
            {/*end create modal*/}

            {/*start edit modal*/}
            {
                activeCategory && activeCategory.id &&
                <Modal isOpen={editModalOpen} onClose={closeEditModal}>
                    <form onSubmit={changeCategory}>
                        <p className={'text-xl font-bold'}>
                            Изменить категорию:
                        </p>
                        <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                            <p className={'text-center font-bold text-xl'}>
                                Название:
                            </p>
                            <MainInput
                                id="names-ru"
                                name="names-ru"
                                label="Names Ru"
                                type="text"
                                required={true}
                                value={activeCategory.names.ru}
                                onChange={handleActiveCategoryChange}
                            />
                            <MainInput
                                id="names-en"
                                name="names-en"
                                label="Names En"
                                type="text"
                                required={true}
                                value={activeCategory.names.en}
                                onChange={handleActiveCategoryChange}
                            />
                            <MainInput
                                id="names-uz"
                                name="names-uz"
                                label="Names Uz"
                                type="text"
                                required={true}
                                value={activeCategory.names.uz}
                                onChange={handleActiveCategoryChange}
                            />
                            <MainInput
                                id="names-uz_l"
                                name="names-uz_l"
                                label="Names Uz_l"
                                type="text"
                                required={true}
                                value={activeCategory.names.uz_l}
                                onChange={handleActiveCategoryChange}
                            />
                        </div>
                        <MainButton
                            className={'w-full mt-3'}
                            content={'Сохранить'}
                        />
                    </form>
                </Modal>
            }
            {/*end edit modal*/}

            {/*start delete modal*/}
            <Modal isOpen={deleteModalOpen} onClose={closeDeleteModal}>
                <div className={'px-10'}>
                    <p className={'font-bold'}>
                        Вы уверены что хотите удалить категорию?
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <button onClick={deleteCategories2}>Да</button>
                        <button onClick={closeDeleteModal}>Нет</button>
                    </div>
                </div>
            </Modal>
            {/*end delete modal*/}

            {/*start create submodal*/}
            <Modal isOpen={createSubModalOpen} onClose={closeCreateSubModal}>
                <form onSubmit={addSubCategory}>
                    <p className={'text-xl font-bold'}>
                        Создать подкатегорию:
                    </p>
                    <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                        <p className={'text-center font-bold text-xl'}>
                            Название:
                        </p>
                        <MainInput
                            id="names-ru"
                            name="names-ru"
                            label="Names Ru"
                            type="text"
                            required={true}
                            value={subformValues.names.ru}
                            onChange={subhandleChange}
                        />
                        <MainInput
                            id="names-en"
                            name="names-en"
                            label="Names En"
                            type="text"
                            required={true}
                            value={subformValues.names.en}
                            onChange={subhandleChange}
                        />
                        <MainInput
                            id="names-uz"
                            name="names-uz"
                            label="Names Uz"
                            type="text"
                            required={true}
                            value={subformValues.names.uz}
                            onChange={subhandleChange}
                        />
                        <MainInput
                            id="names-uz_l"
                            name="names-uz_l"
                            label="Names Uz_l"
                            type="text"
                            required={true}
                            value={subformValues.names.uz_l}
                            onChange={subhandleChange}
                        />
                    </div>
                    <MainButton
                        className={'w-full mt-3'}
                        content={'Создать'}
                    />
                </form>
            </Modal>
            {/*end create submodal*/}

            {/*start edit submodal*/}
            {
                activeSubCategory && activeSubCategory.id &&
                <Modal isOpen={editSubModalOpen} onClose={closeEditSubModal}>
                    <form onSubmit={changeSubCategory}>
                        <p className={'text-xl font-bold'}>
                            Изменить подкатегорию:
                        </p>
                        <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                            <p className={'text-center font-bold text-xl'}>
                                Название:
                            </p>
                            <MainInput
                                id="names-ru"
                                name="names-ru"
                                label="Names Ru"
                                type="text"
                                required={true}
                                value={activeSubCategory.names.ru}
                                onChange={handleActiveSubCategoryChange}
                            />
                            <MainInput
                                id="names-en"
                                name="names-en"
                                label="Names En"
                                type="text"
                                required={true}
                                value={activeSubCategory.names.en}
                                onChange={handleActiveSubCategoryChange}
                            />
                            <MainInput
                                id="names-uz"
                                name="names-uz"
                                label="Names Uz"
                                type="text"
                                required={true}
                                value={activeSubCategory.names.uz}
                                onChange={handleActiveSubCategoryChange}
                            />
                            <MainInput
                                id="names-uz_l"
                                name="names-uz_l"
                                label="Names Uz_l"
                                type="text"
                                required={true}
                                value={activeSubCategory.names.uz_l}
                                onChange={handleActiveSubCategoryChange}
                            />
                        </div>
                        <MainButton
                            className={'w-full mt-3'}
                            content={'Сохранить'}
                        />
                    </form>
                </Modal>
            }
            {/*end edit submodal*/}

            {/*start delete submodal*/}
            <Modal isOpen={deleteSubModalOpen} onClose={closeDeleteSubModal}>
                <div className={'px-10'}>
                    <p className={'font-bold'}>
                        Вы уверены что хотите удалить подкатегорию?
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <button onClick={deleteSubCategories2}>Да</button>
                        <button onClick={closeDeleteSubModal}>Нет</button>
                    </div>
                </div>
            </Modal>
            {/*end delete submodal*/}
        </section>
    );
};

export default TemplateCategories;