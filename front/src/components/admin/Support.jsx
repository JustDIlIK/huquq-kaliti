import React, {useEffect, useState} from 'react';
import MainTextarea from "../ui/MainTextarea.jsx";
import MainButton from "../ui/MainButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import MainInput from "../ui/MainInput.jsx";
import MainTitle from "../ui/MainTitle.jsx";
import {createComplaint, loadMyComplaints} from "../../store/complaints/complaintsActions.js";
import Modal from "../ui/Modal.jsx";
import Breadcrumbs from "../ui/Breadcrumbs.jsx";
import {MAIN_ROUTE} from "../../assets/utils.js";
import ComplaintItem from "./ui/compaints/ComplaintItem.jsx";
import MyComplaintItem from "./ui/compaints/MyComplaintItem.jsx";

const Support = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser)
    const [openModal, setOpenModal] = useState(false);
    const myComplaints = useSelector(state => state.complaints.myComplaints);
    const [formValues, setFormValues] = useState({
        title: '',
        content: ''
    })
    const links = [
        {label: 'Main', path: MAIN_ROUTE},
        {label: 'Support '}
    ]

    useEffect(() => {
        dispatch(loadMyComplaints({page: 1, limit: 1000}))
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevComment) => ({
            ...prevComment,
            [name]: value
        }));
    }

    const openCreateModal = () => {
        setOpenModal(true)
    }

    const closeCreateModal = () => {
        setOpenModal(false)
    }

    const createResponce = (e) => {
        e.preventDefault()
        let lawyer = false;
        if (currentUser.role.system_name === 'lawyer') {
            lawyer = true
        }
        dispatch(createComplaint({page: 1, limit: 1000, lawyer: lawyer, form: formValues}))
        closeCreateModal()
    }


    return (
        <section>
            <div className="container !ml-0">
                <Breadcrumbs
                    links={links}
                />
                <MainButton
                    className={'mt-10'}
                    content={'Создать жалобу'}
                    onClick={openCreateModal}
                />
                <div className={'bg-white p-6 rounded-lg mt-6'}>
                    <MainTitle
                        className={'text-xl'}
                        title={'Ваши обращения'}
                    />
                    <div className={'bg-white rounded-lg p-6 grid grid-cols-4 gap-6'}>
                        {
                            myComplaints && myComplaints.data && myComplaints.data.map((complaint, index) => (
                                <MyComplaintItem
                                    key={index}
                                    complaint={complaint}
                                />
                            ))
                        }
                    </div>
                </div>

                {/*start create complaint*/}
                <Modal isOpen={openModal} onClose={closeCreateModal}>
                    <form onSubmit={createResponce} className={'bg-white'}>
                        <p className={'text-3xl font-bold mb-6 text-center'}>
                            Обращение
                        </p>
                        <MainInput
                            id="title"
                            name="title"
                            type="text"
                            required={true}
                            label={'Тема обращения'}
                            placeholder={'Напишите текст'}
                            value={formValues.title}
                            onChange={handleChange}
                        />
                        <MainTextarea
                            className={'mt-3'}
                            id="content"
                            name="content"
                            label={'Описание'}
                            required={true}
                            placeholder={'Напишите текст'}
                            value={formValues.content}
                            onChange={handleChange}
                        />
                        <div className={'mt-6 flex items-center gap-2.5'}>
                            <MainButton
                                className={'w-full mt-3'}
                                content={'Создать'}
                            />
                            <MainButton
                                onClick={closeCreateModal}
                                type="button"
                                className={'w-full mt-3'}
                                content={'Отмена'}
                            />
                        </div>
                    </form>
                </Modal>
                {/*end create complaint*/}

            </div>
        </section>
    );
};

export default Support;