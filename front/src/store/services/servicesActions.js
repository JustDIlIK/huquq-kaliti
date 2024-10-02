import axios from 'axios';
import {
    CHANGE_SERVICES_FAILURE,
    CHANGE_SERVICES_REQUEST,
    CHANGE_SERVICES_SUCCESS,
    CREATE_SERVICES_FAILURE,
    CREATE_SERVICES_REQUEST,
    CREATE_SERVICES_SUCCESS,
    DELETE_SERVICES_FAILURE,
    DELETE_SERVICES_REQUEST,
    DELETE_SERVICES_SUCCESS, LOAD_SERVICE_INFO_REQUEST, LOAD_SERVICE_INFO_SUCCESS,
    LOAD_SERVICES_FAILURE,
    LOAD_SERVICES_REQUEST,
    LOAD_SERVICES_SUCCESS
} from "../../assets/types.js";
import {DOMAIN} from "../../assets/utils.js";
import {toast} from "react-toastify";
import i18n from "../../locales/i18n.js";

export const loadServices = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_SERVICES_REQUEST});

        axios.get(`${DOMAIN}service?page=${params.page}&limit=${params.limit}`, {

        }).then(res=> {
            dispatch({ type: LOAD_SERVICES_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_SERVICES_FAILURE, payload: error.message });
        })
    }
}

export const loadServiceInfo = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_SERVICE_INFO_REQUEST});

        axios.get(`${DOMAIN}service/${params.service_id}`, {

        }).then(res=> {
            dispatch({ type: LOAD_SERVICE_INFO_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_SERVICES_FAILURE, payload: error.message });
        })
    }
}

export const createService = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_SERVICES_REQUEST});

        axios.post(`${DOMAIN}service?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_SERVICES_SUCCESS, payload: res.data });
            toast.success(i18n.t('The service was added successfully!'))
        }).catch(error=> {
            dispatch({ type: CREATE_SERVICES_FAILURE, payload: error.message });
        })
    }
}

export const changeService = (params) => {
    return async (dispatch) => {
        dispatch({type: CHANGE_SERVICES_REQUEST});

        axios.put(`${DOMAIN}service/${params.service_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CHANGE_SERVICES_SUCCESS, payload: res.data });
            toast.success(i18n.t('The service was changed successfully!'))
        }).catch(error=> {
            dispatch({ type: CHANGE_SERVICES_FAILURE, payload: error.message });
        })
    }
}

export const deleteService = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_SERVICES_REQUEST});

        axios.delete(`${DOMAIN}service/${params.service_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: DELETE_SERVICES_SUCCESS, payload: res.data });
            toast.success(i18n.t('The service was deleted successfully!'))
        }).catch(error=> {
            dispatch({ type: DELETE_SERVICES_FAILURE, payload: error.message });
        })
    }
}