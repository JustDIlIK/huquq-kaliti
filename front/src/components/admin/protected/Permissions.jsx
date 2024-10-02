import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../../ui/Breadcrumbs.jsx";
import {MAIN_ROUTE} from "../../../assets/utils.js";
import MainTitle from "../../ui/MainTitle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeRole, createRole, deleteRole, loadPermissions, loadRoles} from "../../../store/roles/rolesActions.js";
import i18n from "../../../locales/i18n.js";
import Modal from "../../ui/Modal.jsx";
import MainInput from "../../ui/MainInput.jsx";
import MainButton from "../../ui/MainButton.jsx";
import {changeService} from "../../../store/services/servicesActions.js";

const Permissions = () => {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.roles.roles);
    const permissions = useSelector((state) => state.roles.permissions);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [activeRole, setActiveRole] = useState({});
    const [activeId, setActiveId] = useState('');
    const links = [
        {label: 'Main', path: MAIN_ROUTE},
        {label: 'Роли '}
    ]
    const [formValues, setFormValues] = useState({
        names: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
        permission_ids: []
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        const [key, subKey] = name.split('-');
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };

    const handleCheckboxChange = (permisId) => {
        setFormValues((prevState) => {
            const isChecked = prevState.permission_ids.includes(permisId);

            const updatedPermissionsIds = isChecked
                ? prevState.permission_ids.filter((id) => id !== permisId)
                : [...prevState.permission_ids, permisId];

            return {
                ...prevState,
                permission_ids: updatedPermissionsIds
            };
        });
    };

    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setCreateModalOpen(false);
    };

    const openDeleteModal = (id) => {
        setActiveId(id)
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setActiveId('')
        setDeleteModalOpen(false);
    };

    const addRole = (e) => {
        e.preventDefault()
        setCreateModalOpen(false);
        dispatch(createRole({form: formValues, page:1, limit: 1000}))
        setFormValues({
            names: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            },
            permission_ids: []
        })
    }

    const deleteRole2 = () => {
        setDeleteModalOpen(false);
        dispatch(deleteRole({role_id: activeId, page:1, limit: 1000}))
    };

    const openEditModal = (role) => {
        setActiveRole(role)
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const editRole = (e) => {
        e.preventDefault()
        setEditModalOpen(false);
        dispatch(changeRole({role_id: activeRole.id, form: activeRole, page:1, limit: 1000}))
    }

    const handleActiveRoleChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setActiveRole((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };

    useEffect(() => {
        dispatch(loadRoles())
        dispatch(loadPermissions())
    }, []);

    return (
        <section>
            <div className="container !ml-0">
                <Breadcrumbs
                    links={links}
                />
                <div className={'mt-10'}>
                    <MainTitle
                        title="Роли"
                    />
                    <button onClick={openCreateModal}>
                        Создать роль
                    </button>
                    <div className={'flex flex-col rounded-lg overflow-hidden mt-4'}>
                        <div
                            className={'role_block grid gap-2 bg-palatinate bg-opacity-20 pt-[22px] pb-[27px] px-5 font-medium'}>
                            <p>
                                №
                            </p>
                            <p className={'font-bold'}>
                                Название
                            </p>
                            <p>

                            </p>
                        </div>
                        {
                            roles.data && roles.data.length && roles.data.map((item, index) => (
                                <div
                                    key={index}
                                    className={'px-6 py-6 bg-white rounded-b-lg grid role_block gap-2 items-center'}
                                >
                                    <p>
                                        {index + 1}
                                    </p>
                                    <p>
                                        {item.names[i18n.language]}
                                    </p>
                                    <div className={'flex items-center gap-5'}>
                                        <button
                                            onClick={() => openEditModal(item)}
                                            className={'bg-romance hover:opacity-70 p-3 rounded-lg w-full font-bold'}>
                                            Редактировать
                                        </button>
                                        <button
                                            onClick={() => openDeleteModal(item.id)}
                                            className={'bg-romance hover:opacity-70 p-3 rounded-lg w-full font-bold'}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*start create modal*/}
            <Modal isOpen={createModalOpen} onClose={closeCreateModal}>
                <form onSubmit={addRole}>
                    <p className={'text-xl font-bold'}>
                        Создать роль:
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
                        <p className={'text-center font-bold text-xl'}>
                            Разрешения ролей:
                        </p>
                        {
                            permissions && permissions.map((permis, index) => (
                                <label key={index} className="bg-romance rounded-lg py-1 px-3">
                                    <input
                                        checked={formValues.permission_ids.includes(permis.id)}
                                        onChange={() => handleCheckboxChange(permis.id)}
                                        type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="pl-2 font-medium">
                                        {permis.names[i18n.language]}
                                    </span>
                                </label>
                            ))
                        }
                    </div>
                    <MainButton
                        className={'w-full mt-3'}
                        content={'Создать'}
                    />
                </form>
            </Modal>
            {/*end create modal*/}

            {/*start delete modal*/}
            <Modal isOpen={deleteModalOpen} onClose={closeDeleteModal}>
                <div className={'px-10'}>
                    <p className={'font-bold'}>
                        Вы уверены что хотите удалить роль?
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <button onClick={deleteRole2}>Да</button>
                        <button onClick={closeDeleteModal}>Нет</button>
                    </div>
                </div>
            </Modal>
            {/*end delete modal*/}

            {/*start edit modal*/}
            {
                activeRole && activeRole.names &&
                <Modal isOpen={editModalOpen} onClose={closeEditModal}>
                    <form onSubmit={editRole}>
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
                                value={activeRole.names.ru}
                                onChange={handleActiveRoleChange}
                            />
                            <MainInput
                                id="names-en"
                                name="names-en"
                                label="Names En"
                                type="text"
                                required={true}
                                value={activeRole.names.en}
                                onChange={handleActiveRoleChange}
                            />
                            <MainInput
                                id="names-uz"
                                name="names-uz"
                                label="Names Uz"
                                type="text"
                                required={true}
                                value={activeRole.names.uz}
                                onChange={handleActiveRoleChange}
                            />
                            <MainInput
                                id="names-uz_l"
                                name="names-uz_l"
                                label="Names Uz_l"
                                type="text"
                                required={true}
                                value={activeRole.names.uz_l}
                                onChange={handleActiveRoleChange}
                            />
                            <p className={'text-center font-bold text-xl'}>
                                Разрешения ролей:
                            </p>
                            {
                                permissions && permissions.map((permis, index) => (
                                    <label key={index} className="bg-romance rounded-lg py-1 px-3">
                                        <input
                                            checked={activeRole.permissions.includes(permis.id)}
                                            onChange={() => handleCheckboxChange(permis.id)}
                                            type="checkbox"
                                        />
                                        <span className="checkmark"></span>
                                        <span className="pl-2 font-medium">
                                        {permis.names[i18n.language]}
                                    </span>
                                    </label>
                                ))
                            }
                        </div>
                        <MainButton
                            className={'w-full mt-3'}
                            content={'Сохранить'}
                        />
                    </form>
                </Modal>
            }
            {/*end edit modal*/}
        </section>
    );
};

export default Permissions;