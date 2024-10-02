import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {blockUser, loadUserList, unblockUser} from "../../../store/user/userActions.js";
import MainTitle from "../../ui/MainTitle.jsx";
import Modal from "../../ui/Modal.jsx";
import MainButton from "../../ui/MainButton.jsx";

const Users = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.userList);
    const [blockModalOpen, setBlockModalOpen] = useState(false);
    const [unblockModalOpen, setUnblockModalOpen] = useState(false);
    const [activeUser, setActiveUser] = useState('');

    const openBlockModal = (user) => {
        setActiveUser(user)
        setBlockModalOpen(true);
    }
    const closeBlockModal = () => {
        setActiveUser('')
        setBlockModalOpen(false);
    }
    const blockUser2 = () => {
        dispatch(blockUser({user_id: activeUser.id, page: 1, limit: 1000}))
        closeBlockModal()
    }

    const openUnblockModal = (user) => {
        setActiveUser(user)
        setUnblockModalOpen(true);
    }
    const closeUnblockModal = () => {
        setActiveUser('')
        setUnblockModalOpen(false);
    }
    const unblockUser2 = () => {
        dispatch(unblockUser({user_id: activeUser.id, page: 1, limit: 1000}))
        closeUnblockModal()
    }

    useEffect(() => {
        dispatch(loadUserList({page: 1, limit: 1000}))
    }, []);

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <MainTitle
                    className={'!text-2xl mb-6'}
                    title={'Пользователи'}
                />
                <div className={'bg-white rounded-lg'}>
                    <div className={'mt-4 flex flex-col gap-2 rounded-lg overflow-hidden'}>
                        <div className={'users_block grid gap-2 bg-desertStorm pt-[22px] pb-[27px] px-5 font-medium'}>
                            <p>

                            </p>
                            <p>
                                ФИО
                            </p>
                            <p>
                                Email
                            </p>
                            <p>
                                Статус
                            </p>
                            <p>
                                Роль
                            </p>
                            <p>

                            </p>
                        </div>
                        {
                            users && users.data && users.data.map((user, index)=> (
                                <div key={index} className={'px-6 py-2.5 rounded-lg grid users_block gap-2 items-center'}>
                                    <p>
                                        {index+1}
                                    </p>
                                    {user.name || user.lastname || user.patronymic ?
                                        <p className={'font-medium'}>
                                            {(user.lastname || '') + ' ' + (user.name || '') + ' ' + (user.patronymic || '')}
                                        </p>
                                        :
                                        <p className={'text-paleSky'}>
                                            Отсутствует
                                        </p>
                                    }
                                    <p>
                                        {user.email}
                                    </p>
                                    <>
                                        {
                                            user.is_active
                                                ?
                                                <p className={'text-tealishGreen'}>
                                                    Активен
                                                </p>
                                                :
                                                <p className={'text-coral'}>
                                                    Заблокирован
                                                </p>
                                        }
                                    </>
                                    <p className={`${user.role.system_name === 'admin' ? 'bg-mint' : ''}`}>
                                        {user.role.names[i18n.language]}
                                    </p>
                                    {
                                        currentUser.id !== user.id &&
                                        <div>
                                            {
                                                user.is_active
                                                    ?
                                                    <button onClick={() => openBlockModal(user)}
                                                            className={'text-coral bg-romance p-2 rounded-lg font-medium'}>
                                                        Заблокировать
                                                    </button>
                                                    :
                                                    <button onClick={() => openUnblockModal(user)}
                                                            className={'text-tealishGreen bg-romance p-2 rounded-lg font-medium'}>
                                                        Разблокировать
                                                    </button>
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*start block modal*/}
            <Modal isOpen={blockModalOpen} onClose={closeBlockModal}>
                <div className={'px-10'}>
                    <p className={'text-3xl font-bold mb-6 text-center'}>
                        Вы уверены что хотите заблокировать пользователя?
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <MainButton
                            onClick={blockUser2}
                            className={'w-full mt-3'}
                            content={'Да'}
                        />
                        <MainButton
                            onClick={closeBlockModal}
                            type="button"
                            className={'w-full mt-3'}
                            content={'Нет'}
                        />
                    </div>
                </div>
            </Modal>
            {/*end block modal*/}

            {/*start unblock modal*/}
            <Modal isOpen={unblockModalOpen} onClose={closeUnblockModal}>
                <div className={'px-10'}>
                    <p className={'text-3xl font-bold mb-6 text-center'}>
                        Вы уверены что хотите разблокировать пользователя?
                    </p>
                    <div className={'flex items-center gap-4'}>
                        <MainButton
                            onClick={unblockUser2}
                            className={'w-full mt-3'}
                            content={'Да'}
                        />
                        <MainButton
                            onClick={closeUnblockModal}
                            type="button"
                            className={'w-full mt-3'}
                            content={'Нет'}
                        />
                    </div>
                </div>
            </Modal>
            {/*end unblock modal*/}
        </section>
    );
};

export default Users;