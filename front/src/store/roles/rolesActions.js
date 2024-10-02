import axios from "axios";
import {DOMAIN} from "../../assets/utils.js";
import {
    CREATE_ROLE_FAILURE,
    CREATE_ROLE_REQUEST,
    CREATE_ROLE_SUCCESS, DELETE_ROLE_FAILURE,
    DELETE_ROLE_REQUEST,
    DELETE_ROLE_SUCCESS,
    EDIT_ROLE_FAILURE,
    EDIT_ROLE_REQUEST,
    EDIT_ROLE_SUCCESS,
    LOAD_PERMISSIONS_FAILURE,
    LOAD_PERMISSIONS_REQUEST,
    LOAD_PERMISSIONS_SUCCESS,
    LOAD_ROLES_FAILURE,
    LOAD_ROLES_REQUEST,
    LOAD_ROLES_SUCCESS
} from "../../assets/types.js";

export const loadRoles = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_ROLES_REQUEST})

        axios.get(`${DOMAIN}admin/role/`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((response) => {
            dispatch({type: LOAD_ROLES_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: LOAD_ROLES_FAILURE, payload: error.message})
        })
    }
}

export const createRole = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ROLE_REQUEST})

        axios.post(`${DOMAIN}admin/role/?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((response) => {
            dispatch({type: CREATE_ROLE_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: CREATE_ROLE_FAILURE, payload: error.message})
        })
    }
}

export const changeRole = (params) => {
    return async (dispatch) => {
        dispatch({type: EDIT_ROLE_REQUEST})

        axios.put(`${DOMAIN}admin/role/${params.role_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((response) => {
            dispatch({type: EDIT_ROLE_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: EDIT_ROLE_FAILURE, payload: error.message})
        })
    }
}

export const deleteRole = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_ROLE_REQUEST})

        axios.delete(`${DOMAIN}admin/role/${params.role_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((response) => {
            dispatch({type: DELETE_ROLE_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: DELETE_ROLE_FAILURE, payload: error.message})
        })
    }
}

export const loadPermissions = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_PERMISSIONS_REQUEST})

        axios.get(`${DOMAIN}admin/role/permissions`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((response) => {
            dispatch({type: LOAD_PERMISSIONS_SUCCESS, payload: response.data})
        }).catch((error) => {
            dispatch({type: LOAD_PERMISSIONS_FAILURE, payload: error.message})
        })
    }
}