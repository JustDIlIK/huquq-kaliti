// complaintsActions.js

import {
    CREATE_COMPLAINT_FAILURE,
    CREATE_COMPLAINT_REQUEST, CREATE_COMPLAINT_SUCCESS,
    LOAD_COMPLAINT_INFO_FAILURE,
    LOAD_COMPLAINT_INFO_REQUEST, LOAD_COMPLAINT_INFO_SUCCESS,
    LOAD_COMPLAINTS_FAILURE,
    LOAD_COMPLAINTS_REQUEST,
    LOAD_COMPLAINTS_SUCCESS, LOAD_MY_COMPLAINTS_FAILURE, LOAD_MY_COMPLAINTS_REQUEST, LOAD_MY_COMPLAINTS_SUCCESS,
    RESPONCE_COMPLAINTS_FAILURE,
    RESPONCE_COMPLAINTS_REQUEST,
    RESPONCE_COMPLAINTS_SUCCESS,
} from "../../assets/types.js";
import axios from "axios";
import {DOMAIN} from "../../assets/utils.js";
import {toast} from "react-toastify";
import i18n from "../../locales/i18n.js";

export const loadComplaints = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_COMPLAINTS_REQUEST});

        axios.get(`${DOMAIN}complaints/?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_COMPLAINTS_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_COMPLAINTS_FAILURE, payload: error.message });
        })
    }
}

export const loadComplaintInfo = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_COMPLAINT_INFO_REQUEST});

        axios.get(`${DOMAIN}complaints/${params.id}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_COMPLAINT_INFO_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_COMPLAINT_INFO_FAILURE, payload: error.message });
        })
    }
}

export const loadMyComplaints = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_MY_COMPLAINTS_REQUEST});

        axios.get(`${DOMAIN}complaints/my?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_MY_COMPLAINTS_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_MY_COMPLAINTS_FAILURE, payload: error.message });
        })
    }
}

export const createComplaint = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_COMPLAINT_REQUEST});

        axios.post(`${DOMAIN}complaints/?lawyer=${params.lawyer}&page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_COMPLAINT_SUCCESS, payload: res.data });
            toast.success(i18n.t('The complaint was created successfully!'))
        }).catch(error=> {
            dispatch({ type: CREATE_COMPLAINT_FAILURE, payload: error.message });
        })
    }
}

export const responceComplaint = (params) => {
    return async (dispatch) => {
        dispatch({type: RESPONCE_COMPLAINTS_REQUEST});

        axios.patch(`${DOMAIN}complaints/${params.id}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`,
                "Content-Type": "application/json"
            }
        }).then(res=> {
            dispatch({ type: RESPONCE_COMPLAINTS_SUCCESS, payload: res.data });
            toast.success(i18n.t('You have successfully responded to the complaint!'))
        }).catch(error=> {
            dispatch({ type: RESPONCE_COMPLAINTS_FAILURE, payload: error.message });
        })
    }
}