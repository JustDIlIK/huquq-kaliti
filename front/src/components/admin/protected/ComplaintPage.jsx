import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MainButton from "../../ui/MainButton.jsx";
import Modal from "../../ui/Modal.jsx";
import MainInput from "../../ui/MainInput.jsx";
import MainTextarea from "../../ui/MainTextarea.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loadComplaintInfo, responceComplaint} from "../../../store/complaints/complaintsActions.js";
import {useTranslation} from "react-i18next";
import {formatDate} from "../../../assets/utils.js";

const ComplaintPage = () => {
    const {id} = useParams();
    const {t, i18n} = useTranslation();
    const [complaint, setComplaint] = useState({});
    const complaintInfo = useSelector(state => state.complaints.complaintInfo)
    const dispatch = useDispatch();
    const [responceModalOpen, setResponceModalOpen] = useState(false);
    const [comment, setComment] = useState('')

    useEffect(() => {
        dispatch(loadComplaintInfo({ id: id }))
    }, [id]);

    useEffect(() => {
        if(complaintInfo.id){
            setComplaint(complaintInfo)
        }
    }, [complaintInfo]);

    const handleChange =(event) => {
        const { name, value } = event.target;
        setComment((prevComment) => (
            value
        ));
    }

    const openResponceModal = () => {
        setResponceModalOpen(true);
    };
    const closeResponceModal = () => {
        setResponceModalOpen(false);
    };
    const createResponce = (e) => {
        e.preventDefault()
        dispatch(responceComplaint({page:1, limit: 1000, id: id, form: {comment: comment}}))
        setResponceModalOpen(false);
    };

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'px-8 py-6 bg-white rounded-lg flex justify-between'}>
                    <div className={'w-7/12 flex flex-col gap-8'}>
                        <div className={'flex items-center gap-4'}>
                            <p className={'text-sm'}>
                                Обращение от
                            </p>
                            <div
                                className={'bg-romance max-w-[315px] w-full rounded-lg py-2 px-3 flex items-center gap-[20px]'}>
                                <div className={'w-[44px] h-[44px] bg-white rounded-full'}></div>
                                <div className={'flex flex-col gap-1'}>
                                    <p className={'font-medium'}>
                                        {
                                            complaint && complaint.id && complaint.user.name ? complaint.user.name + ' ' + (complaint.user.lastname || '') : 'Юзер'
                                        }
                                    </p>
                                    {
                                        complaint && complaint.id &&
                                        <p className={'text-doveGrey text-sm'}>
                                            {
                                                complaint.user.role.names[i18n.language]
                                            }
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={'flex items-center gap-2.5'}>
                            <p className={'text-[20px] font-bold'}>
                            Тема обращения:
                            </p>
                            <p>
                                {complaint.title}
                            </p>
                        </div>
                        <hr className={'bg-lavender'}/>
                        <div>
                            <p className={'text-[20px] font-bold mb-6'}>
                                Детали:
                            </p>
                            <p className={'mb-4'}>
                                Дата инцидента: {formatDate(complaint.created_at, i18n.language)}
                            </p>
                            <p>
                                Состояние обращения:
                                {
                                    complaint.comment ?
                                        <span className={'text-shamrock'}> Рассмотрено</span>
                                        :
                                        <span className={'text-yellow-500'}> Ожидается ответ</span>
                                }
                            </p>
                        </div>
                        <hr className={'bg-lavender'}/>
                        <div>
                            <p className={'text-[20px] font-bold mb-6'}>
                                Описание:
                            </p>
                            <p>
                                {complaint.content}
                            </p>
                        </div>
                        {
                            complaint.comment ?
                                <>
                                    <hr className={'bg-lavender'}/>
                                    <div>
                                        <p className={'text-[20px] font-bold mb-6'}>
                                            Ваш ответ:
                                        </p>
                                        <p>
                                            {complaint.content}
                                        </p>
                                    </div>
                                </>
                                :
                                <></>
                        }
                    </div>
                    <div
                        className={'bg-romance rounded-lg p-6 max-w-[270px] text-center w-full h-fit flex flex-col gap-4'}>
                        {
                            complaint && complaint.id && complaint.comment ?
                                <div className={'flex flex-col gap-4'}>
                                    <p className={'text-[20px] text-center font-bold'}>
                                        Отклик на обращение отправлен!
                                    </p>
                                    <img className={'w-[64px] h-[64px] mx-auto'} src="/img/done.svg" alt="done"/>
                                    <p className={'text-balticSea'}>
                                        Оставьте отклик на данное обращение
                                    </p>
                                    <MainButton
                                        disable={true}
                                        className={'bg-shamrock'}
                                        content={'Готово!'}
                                    />
                                </div>
                                :
                                <>
                                    <p className={'text-[20px] font-bold'}>
                                        Отклик на обращение
                                    </p>
                                    <p className={'text-balticSea'}>
                                        Оставьте отклик на данное обращение
                                    </p>
                                    <MainButton
                                        onClick={openResponceModal}
                                        content={'Оставить отклик'}
                                    />
                                </>
                        }
                    </div>
                </div>
            </div>

            {/*start responce modal*/}
            <Modal isOpen={responceModalOpen} onClose={closeResponceModal}>
                <form onSubmit={createResponce} className={'min-w-[574px]'}>
                    <p className={'text-3xl font-bold mb-6 text-center'}>
                        Отклик на обращение
                    </p>
                    <MainTextarea
                        id="names-ru"
                        name="names-ru"
                        type="text"
                        required={true}
                        placeholder={'Напишите текст'}
                        value={comment}
                        onChange={handleChange}
                    />
                    <div className={'mt-6 flex items-center gap-2.5'}>
                        <MainButton
                            className={'w-full mt-3'}
                            content={'Создать'}
                        />
                        <MainButton
                            onClick={closeResponceModal}
                            type="button"
                            className={'w-full mt-3'}
                            content={'Отмена'}
                        />
                    </div>
                </form>
            </Modal>
            {/*end responce modal*/}
        </section>
    );
};

export default ComplaintPage;