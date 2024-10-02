import {
    CREATE_QUESTION_FAILURE,
    CREATE_QUESTION_REQUEST,
    CREATE_QUESTION_SUCCESS, DELETE_QUESTION_FAILURE, DELETE_QUESTION_REQUEST, DELETE_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILURE,
    EDIT_QUESTION_REQUEST,
    EDIT_QUESTION_SUCCESS,
    LOAD_QUESTIONS_FAILURE,
    LOAD_QUESTIONS_REQUEST,
    LOAD_QUESTIONS_SUCCESS
} from "../../assets/types.js";
import axios from "axios";
import {DOMAIN} from "../../assets/utils.js";
import {toast} from "react-toastify";
import i18n from "../../locales/i18n.js";

export const loadQuestions = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_QUESTIONS_REQUEST})

        axios.get(`${DOMAIN}questions?page=${params.page}&limit=${params.limit}`, {

        }).then(res=> {
            dispatch({ type: LOAD_QUESTIONS_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_QUESTIONS_FAILURE, payload: error.message });
        })
    }
}

export const createQuestion = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_QUESTION_REQUEST})

        axios.post(`${DOMAIN}questions?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_QUESTION_SUCCESS, payload: res.data });
            toast.success(i18n.t('The question has been successfully created!'))
        }).catch(error=> {
            dispatch({ type: CREATE_QUESTION_FAILURE, payload: error.message });
        })
    }
}

export const changeQuestion = (params) => {
    return async (dispatch) => {
        dispatch({type: EDIT_QUESTION_REQUEST})

        axios.put(`${DOMAIN}questions/${params.question_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: EDIT_QUESTION_SUCCESS, payload: res.data });
            toast.success(i18n.t('The question has been successfully changed!'))
        }).catch(error=> {
            dispatch({ type: EDIT_QUESTION_FAILURE, payload: error.message });
        })
    }
}

export const deleteQuestion = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_QUESTION_REQUEST})

        axios.delete(`${DOMAIN}questions/${params.question_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: DELETE_QUESTION_SUCCESS, payload: res.data });
            toast.success(i18n.t('The issue has been successfully deleted!'))
        }).catch(error=> {
            dispatch({ type: DELETE_QUESTION_FAILURE, payload: error.message });
        })
    }
}