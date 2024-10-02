import React, {useEffect, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    changeQuestion,
    createQuestion,
    deleteQuestion,
    loadQuestions
} from "../../../store/questions/questionsActions.js";
import Modal from "../../ui/Modal.jsx";
import MainInput from "../../ui/MainInput.jsx";
import MainButton from "../../ui/MainButton.jsx";
import {useTranslation} from "react-i18next";

const AdminUsuallyQuestions = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.questions);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
        question: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
        answer: {
            ru: '',
            uz: '',
            uz_l: '',
            en: ''
        },
    });
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState({});
    const [activeId, setActiveId] = useState('');

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

    const handleActiveQuestionChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('-');
        setActiveQuestion((prevFormValues) => ({
            ...prevFormValues,
            [key]: {
                ...prevFormValues[key],
                [subKey]: value,
            },
        }));
    };

    const openCreateModal = () => {
        setCreateModalOpen(true);
    }
    const closeCreateModal = () => {
        setCreateModalOpen(false);
    }
    const addQuestion = (e) => {
        e.preventDefault()
        setCreateModalOpen(false);
        dispatch(createQuestion({form: formValues, page:1, limit: 1000}))
        setFormValues({
            names: {
                ru: '',
                uz: '',
                uz_l: '',
                en: ''
            }
        })
    }

    useEffect(() => {
        dispatch(loadQuestions({page: 1, limit: 1000}))
    }, []);


    const openEditModal = (question) => {
        setActiveQuestion(question)
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const editQuestion = (e) => {
        e.preventDefault()
        setEditModalOpen(false);
        dispatch(changeQuestion({question_id: activeQuestion.id, form: activeQuestion, page:1, limit: 1000}))
    }

    const openDeleteModal = (id) => {
        setActiveId(id)
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setActiveId('')
        setDeleteModalOpen(false);
    };

    const deleteQuestion2 = () => {
        setDeleteModalOpen(false);
        dispatch(deleteQuestion({question_id: activeId, page:1, limit: 1000}))
    }

    return (
        <section className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'bg-white rounded-lg p-3'}>
                    <MainTitle
                        title={'Часто задаваемые вопросы'}
                    />
                    <button onClick={openCreateModal} className={'text-palatinate font-bold'}>
                        +Создать вопрос
                    </button>
                    <div className={'mt-5 flex flex-col gap-5'}>
                        {
                            questions.data && questions.data.map((question, index) => (
                                <div
                                    key={index}
                                    className={'relative bg-palatinate bg-opacity-10 p-3 rounded-lg flex flex-col gap-2'}
                                >
                                    <p className={'font-medium'}>
                                        <b>Вопрос:</b> {question.question[i18n.language]}
                                    </p>
                                    <p className={'font-medium'}>
                                        <b>Ответ:</b> {question.answer[i18n.language]}
                                    </p>
                                    <div className={'absolute top-2 right-2 flex items-center gap-3'}>
                                        <button onClick={()=> openEditModal(question)} className={'text-orange-400 font-bold'}>
                                            Редактировать
                                        </button>
                                        <button onClick={()=> openDeleteModal(question.id)} className={'text-red-600 font-bold'}>
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            questions.data && !questions.data.length &&
                            <div>
                                Пока нет вопросов
                            </div>
                        }
                    </div>
                </div>


                {/*start create modal*/}
                <Modal isOpen={createModalOpen} onClose={closeCreateModal}>
                    <form onSubmit={addQuestion}>
                        <p className={'text-xl font-bold'}>
                            Создать вопрос:
                        </p>
                        <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                            <p className={'text-center font-bold text-xl'}>
                                Вопрос:
                            </p>
                            <MainInput
                                id="question-ru"
                                name="question-ru"
                                label="Question Ru"
                                type="text"
                                required={true}
                                value={formValues.question.ru}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="question-en"
                                name="question-en"
                                label="Question En"
                                type="text"
                                required={true}
                                value={formValues.question.en}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="question-uz"
                                name="question-uz"
                                label="Question Uz"
                                type="text"
                                required={true}
                                value={formValues.question.uz}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="question-uz_l"
                                name="question-uz_l"
                                label="Question Uz_l"
                                type="text"
                                required={true}
                                value={formValues.question.uz_l}
                                onChange={handleChange}
                            />
                            <p className={'text-center font-bold text-xl'}>
                                Ответ:
                            </p>
                            <MainInput
                                id="answer-ru"
                                name="answer-ru"
                                label="Answer Ru"
                                type="text"
                                required={true}
                                value={formValues.answer.ru}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="answer-en"
                                name="answer-en"
                                label="Answer En"
                                type="text"
                                required={true}
                                value={formValues.answer.en}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="answer-uz"
                                name="answer-uz"
                                label="Answer Uz"
                                type="text"
                                required={true}
                                value={formValues.answer.uz}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="answer-uz_l"
                                name="answer-uz_l"
                                label="Answer Uz_l"
                                type="text"
                                required={true}
                                value={formValues.answer.uz_l}
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
                    activeQuestion && activeQuestion.question &&
                    <Modal isOpen={editModalOpen} onClose={closeEditModal}>
                        <form onSubmit={editQuestion}>
                            <p className={'text-xl font-bold'}>
                                Создать вопрос:
                            </p>
                            <div className={'mt-3 flex flex-col gap-5 max-h-[400px] overflow-y-auto px-10'}>
                                <p className={'text-center font-bold text-xl'}>
                                    Вопрос:
                                </p>
                                <MainInput
                                    id="question-ru"
                                    name="question-ru"
                                    label="Question Ru"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.question.ru}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="question-en"
                                    name="question-en"
                                    label="Question En"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.question.en}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="question-uz"
                                    name="question-uz"
                                    label="Question Uz"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.question.uz}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="question-uz_l"
                                    name="question-uz_l"
                                    label="Question Uz_l"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.question.uz_l}
                                    onChange={handleActiveQuestionChange}
                                />
                                <p className={'font-bold text-center text-xl'}>
                                    Ответ:
                                </p>
                                <MainInput
                                    id="answer-ru"
                                    name="answer-ru"
                                    label="Answer Ru"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.answer.ru}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="answer-en"
                                    name="answer-en"
                                    label="Answer En"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.answer.en}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="answer-uz"
                                    name="answer-uz"
                                    label="Answer Uz"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.answer.uz}
                                    onChange={handleActiveQuestionChange}
                                />
                                <MainInput
                                    id="answer-uz_l"
                                    name="answer-uz_l"
                                    label="Answer Uz_l"
                                    type="text"
                                    required={true}
                                    value={activeQuestion.answer.uz_l}
                                    onChange={handleActiveQuestionChange}
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
                            Вы уверены что хотите удалить вопрос?
                        </p>
                        <div className={'flex items-center gap-4'}>
                            <button onClick={deleteQuestion2}>Да</button>
                            <button onClick={closeDeleteModal}>Нет</button>
                        </div>
                    </div>
                </Modal>
                {/*end delete modal*/}
            </div>
        </section>
);
};

export default AdminUsuallyQuestions;