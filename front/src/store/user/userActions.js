// userActions.js
import axios from 'axios';
import {DOMAIN} from "../../assets/utils.js";
import {toast} from "react-toastify";
import {
    BLOCK_USER_FAILURE,
    BLOCK_USER_REQUEST,
    BLOCK_USER_SUCCESS,
    LOAD_CURRENT_USER_FAILURE,
    LOAD_CURRENT_USER_REQUEST,
    LOAD_CURRENT_USER_SUCCESS,
    LOAD_USERS_FAILURE,
    LOAD_USERS_REQUEST,
    LOAD_USERS_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    PASSWORD_FAILURE,
    PASSWORD_REQUEST,
    PASSWORD_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, UNBLOCK_USER_FAILURE,
    UNBLOCK_USER_REQUEST,
    UNBLOCK_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "../../assets/types.js";
import i18n from "../../locales/i18n.js";


export const loadCurrentUser = () => {
    return async (dispatch) => {
        dispatch({ type: LOAD_CURRENT_USER_REQUEST });

        axios.get(`${DOMAIN}auth/current-user`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_CURRENT_USER_SUCCESS, payload: res.data });
        }).catch(error=> {
            localStorage.removeItem('huquq-token')
            dispatch({ type: LOAD_CURRENT_USER_FAILURE, payload: error.message });
        })
    };
};

export const register = (form) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });

        axios.post(`${DOMAIN}auth/register`, form).then(res=> {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
            localStorage.setItem('huquq-token', res.data.access_token)
            toast.success(i18n.t('You have successfully registered!'))
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: REGISTER_FAILURE, payload: error.message });
        })
    };
};

export const login = (form) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });

        axios.post(`${DOMAIN}auth/login`, form).then(res=> {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
            localStorage.setItem('huquq-token', res.data.access_token)
            toast.success(i18n.t('You have successfully logged in!'))
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        })
    };
};

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT_REQUEST });


        axios.post(`${DOMAIN}auth/logout`, {}, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            toast.success(i18n.t('You have successfully logged out!'))
            localStorage.removeItem('huquq-token')
            dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: LOGOUT_FAILURE, payload: error.message });
        })
    };
};

export const changePassword = (password) => {
    return async (dispatch) => {
        dispatch({ type: PASSWORD_REQUEST });

        axios.post(`${DOMAIN}auth/change-password`, password, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            toast.success(i18n.t('You have successfully changed your password!'))
            dispatch({ type: PASSWORD_SUCCESS, payload: res.data });
            dispatch(loadCurrentUser())
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: PASSWORD_FAILURE, payload: error.message });
        })
    };
};

export const updateUser = (form) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_USER_REQUEST });

        axios.patch(`${DOMAIN}auth/user?name=${form.get('name') || ''}&lastname=${form.get('lastname') || ''}&patronymic=${form.get('patronymic') || ''}`, form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            toast.success(i18n.t('Your data has been successfully changed!'))
            dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
            dispatch(loadCurrentUser())
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
        })
    };
};

export const loadUserList = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_USERS_REQUEST})

        axios.get(`${DOMAIN}admin/users/?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_USERS_SUCCESS, payload: res.data });
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: LOAD_USERS_FAILURE, payload: error.message });
        })
    }
}

export const blockUser = (params) => {
    return async (dispatch) => {
        dispatch({type: BLOCK_USER_REQUEST})

        axios.post(`${DOMAIN}admin/users/block/${params.user_id}?page=${params.page}&limit=${params.limit}`, {}, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            toast.success(i18n.t('You have successfully blocked the user!'))
            dispatch({ type: BLOCK_USER_SUCCESS, payload: res.data });
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: BLOCK_USER_FAILURE, payload: error.message });
        })
    }
}

export const unblockUser = (params) => {
    return async (dispatch) => {
        dispatch({type: UNBLOCK_USER_REQUEST})

        axios.post(`${DOMAIN}admin/users/unblock/${params.user_id}?page=${params.page}&limit=${params.limit}`, {}, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            toast.success(i18n.t('You have successfully unblocked the user!'))
            dispatch({ type: UNBLOCK_USER_SUCCESS, payload: res.data });
        }).catch(error=> {
            toast.error(error.message)
            dispatch({ type: UNBLOCK_USER_FAILURE, payload: error.message });
        })
    }
}