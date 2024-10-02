import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeService, createService, deleteService, loadServices} from "../../../store/services/servicesActions.js";
import MainTitle from "../../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";
import Modal from "../../ui/Modal.jsx";
import MainInput from "../../ui/MainInput.jsx";
import MainButton from "../../ui/MainButton.jsx";

const Services = () => {
    const {t, i18n} = useTranslation();
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [activeService, setActiveService] = useState({});
    const [activeId, setActiveId] = useState('');
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services);
    const [formValues, setFormValues] = useState({
        names: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
        descriptions: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        }
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

    const handleActiveServiceChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setActiveService((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };

    useEffect(() => {
        dispatch(loadServices({page: 1, limit: 1000}))
    }, []);

    const openEditModal = (service) => {
        setActiveService(service)
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const openDeleteModal = (id) => {
        setActiveId(id)
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setActiveId('')
        setDeleteModalOpen(false);
    };

    const deleteService2 = () => {
        setDeleteModalOpen(false);
        dispatch(deleteService({service_id: activeId, page:1, limit: 1000}))
    };

    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setCreateModalOpen(false);
    };

    const addService = (e) => {
        e.preventDefault()
        setCreateModalOpen(false);
        dispatch(createService({form: formValues, page:1, limit: 1000}))
        setFormValues({
            names: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            },
            descriptions: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            }
        })
    }

    const editService = (e) => {
        e.preventDefault()
        setEditModalOpen(false);
        dispatch(changeService({service_id: activeService.id, form: activeService, page:1, limit: 1000}))
    }

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'bg-white rounded-lg p-10'}>
                    <button onClick={openCreateModal}>
                        Создать услугу
                    </button>
                    <MainTitle
                        title={'Services'}
                    />
                    <div className={'mt-5 flex flex-col gap-2'}>
                        {
                            services && services.data && services.data.map((service, index) => (
                                <div key={index} className={'border p-2 rounded-lg'}>
                                    <p>
                                        Название - {service.names[i18n.language]}
                                    </p>
                                    <p>
                                        Описание - {service.descriptions[i18n.language]}
                                    </p>
                                    <div className={'font-bold mt-2 flex items-center gap-2'}>
                                        <button
                                            onClick={()=> openEditModal(service)}
                                            className={'text-orange-400'}
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            onClick={()=> openDeleteModal(service.id)}
                                            className={'text-red-500'}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            services && services.data && !services.data.length &&
                            <p>
                                Услуг пока нет
                            </p>
                        }
                    </div>
                </div>

                {/*start create modal*/}
                <Modal isOpen={createModalOpen} onClose={closeCreateModal}>
                        <form onSubmit={addService} >
                            <p className={'text-xl font-bold'}>
                                Создать услугу:
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
                            <p className={'font-bold text-center text-xl'}>
                                Описание:
                            </p>
                            <MainInput
                                id="descriptions-ru"
                                name="descriptions-ru"
                                label="Descriptions Ru"
                                type="text"
                                required={true}
                                value={formValues.descriptions.ru}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="descriptions-en"
                                name="descriptions-en"
                                label="Descriptions En"
                                type="text"
                                required={true}
                                value={formValues.descriptions.en}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="descriptions-uz"
                                name="descriptions-uz"
                                label="Descriptions Uz"
                                type="text"
                                required={true}
                                value={formValues.descriptions.uz}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="descriptions-uz_l"
                                name="descriptions-uz_l"
                                label="Descriptions Uz_l"
                                type="text"
                                required={true}
                                value={formValues.descriptions.uz_l}
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
                    activeService && activeService.names &&
                    <Modal isOpen={editModalOpen} onClose={closeEditModal}>
                        <form onSubmit={editService}>
                            <p className={'text-xl font-bold'}>
                                Создать услугу:
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
                                    value={activeService.names.ru}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="names-en"
                                    name="names-en"
                                    label="Names En"
                                    type="text"
                                    required={true}
                                    value={activeService.names.en}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="names-uz"
                                    name="names-uz"
                                    label="Names Uz"
                                    type="text"
                                    required={true}
                                    value={activeService.names.uz}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="names-uz_l"
                                    name="names-uz_l"
                                    label="Names Uz_l"
                                    type="text"
                                    required={true}
                                    value={activeService.names.uz_l}
                                    onChange={handleActiveServiceChange}
                                />
                                <p className={'font-bold text-center text-xl'}>
                                    Описание:
                                </p>
                                <MainInput
                                    id="descriptions-ru"
                                    name="descriptions-ru"
                                    label="Descriptions Ru"
                                    type="text"
                                    required={true}
                                    value={activeService.descriptions.ru}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="descriptions-en"
                                    name="descriptions-en"
                                    label="Descriptions En"
                                    type="text"
                                    required={true}
                                    value={activeService.descriptions.en}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="descriptions-uz"
                                    name="descriptions-uz"
                                    label="Descriptions Uz"
                                    type="text"
                                    required={true}
                                    value={activeService.descriptions.uz}
                                    onChange={handleActiveServiceChange}
                                />
                                <MainInput
                                    id="descriptions-uz_l"
                                    name="descriptions-uz_l"
                                    label="Descriptions Uz_l"
                                    type="text"
                                    required={true}
                                    value={activeService.descriptions.uz_l}
                                    onChange={handleActiveServiceChange}
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
                           Вы уверены что хотите удалить услугу?
                       </p>
                       <div className={'flex items-center gap-4'}>
                           <button onClick={deleteService2}>Да</button>
                           <button onClick={closeDeleteModal}>Нет</button>
                       </div>
                   </div>
                </Modal>
                {/*end delete modal*/}
            </div>
        </section>
    );
};

export default Services;