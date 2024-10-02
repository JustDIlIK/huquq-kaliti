// documntActions
import {
    CREATE_DOCUMENT_CATEGORIES_FAILURE,
    CREATE_DOCUMENT_CATEGORIES_REQUEST,
    CREATE_DOCUMENT_CATEGORIES_SUCCESS, CREATE_DOCUMENT_FAILURE, CREATE_DOCUMENT_REQUEST,
    CREATE_DOCUMENT_SUBCATEGORY_FAILURE,
    CREATE_DOCUMENT_SUBCATEGORY_REQUEST,
    CREATE_DOCUMENT_SUBCATEGORY_SUCCESS, CREATE_DOCUMENT_SUCCESS,
    DELETE_DOCUMENT_CATEGORY_FAILURE,
    DELETE_DOCUMENT_CATEGORY_REQUEST,
    DELETE_DOCUMENT_CATEGORY_SUCCESS, DELETE_DOCUMENT_FAILURE, DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_SUBCATEGORY_FAILURE,
    DELETE_DOCUMENT_SUBCATEGORY_REQUEST,
    DELETE_DOCUMENT_SUBCATEGORY_SUCCESS, DELETE_DOCUMENT_SUCCESS,
    EDIT_DOCUMENT_CATEGORY_FAILURE,
    EDIT_DOCUMENT_CATEGORY_REQUEST,
    EDIT_DOCUMENT_CATEGORY_SUCCESS, EDIT_DOCUMENT_FAILURE, EDIT_DOCUMENT_REQUEST,
    EDIT_DOCUMENT_SUBCATEGORY_FAILURE,
    EDIT_DOCUMENT_SUBCATEGORY_REQUEST,
    EDIT_DOCUMENT_SUBCATEGORY_SUCCESS, EDIT_DOCUMENT_SUCCESS,
    LOAD_DOCUMENT_CATEGORIES_FAILURE,
    LOAD_DOCUMENT_CATEGORIES_INFO_FAILURE,
    LOAD_DOCUMENT_CATEGORIES_INFO_REQUEST,
    LOAD_DOCUMENT_CATEGORIES_INFO_SUCCESS,
    LOAD_DOCUMENT_CATEGORIES_REQUEST,
    LOAD_DOCUMENT_CATEGORIES_SUCCESS, LOAD_DOCUMENT_FAILURE, LOAD_DOCUMENT_REQUEST, LOAD_DOCUMENT_SUCCESS
} from "../../assets/types.js";
import axios from "axios";
import {DOMAIN} from "../../assets/utils.js";
import {toast} from "react-toastify";
import i18n from "../../locales/i18n.js";

export const loadDocumentCategories = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_DOCUMENT_CATEGORIES_REQUEST});

        axios.get(`${DOMAIN}document/category?page=${params.page}&limit=${params.limit}`, {

        }).then(res=> {
            dispatch({ type: LOAD_DOCUMENT_CATEGORIES_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_DOCUMENT_CATEGORIES_FAILURE, payload: error.message });
        })
    }
}

export const loadDocumentCategoryInfo = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_DOCUMENT_CATEGORIES_INFO_REQUEST});

        axios.get(`${DOMAIN}document/category/${params.category_id}`, {

        }).then(res=> {
            dispatch({ type: LOAD_DOCUMENT_CATEGORIES_INFO_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_DOCUMENT_CATEGORIES_INFO_FAILURE, payload: error.message });
        })
    }
}

export const createDocumentCategory = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_DOCUMENT_CATEGORIES_REQUEST});

        axios.post(`${DOMAIN}document/category?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_DOCUMENT_CATEGORIES_SUCCESS, payload: res.data });
            toast.success(i18n.t('The category was added successfully!'))
        }).catch(error=> {
            dispatch({ type: CREATE_DOCUMENT_CATEGORIES_FAILURE, payload: error.message });
        })
    }
}

export const editDocumentCategory = (params) => {
    return async (dispatch) => {
        dispatch({type: EDIT_DOCUMENT_CATEGORY_REQUEST});

        axios.put(`${DOMAIN}document/category/${params.category_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: EDIT_DOCUMENT_CATEGORY_SUCCESS, payload: res.data });
            toast.success(i18n.t('The category has been successfully changed!'))
        }).catch(error=> {
            dispatch({ type: EDIT_DOCUMENT_CATEGORY_FAILURE, payload: error.message });
        })
    }
}

export const deleteDocumentCategory = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_DOCUMENT_CATEGORY_REQUEST});

        axios.delete(`${DOMAIN}document/category/${params.category_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: DELETE_DOCUMENT_CATEGORY_SUCCESS, payload: res.data });
            toast.success(i18n.t('The category has been successfully deleted!'))
        }).catch(error=> {
            dispatch({ type: DELETE_DOCUMENT_CATEGORY_FAILURE, payload: error.message });
        })
    }
}

export const createDocumentSubcategory = (params) => {
    return async (dispatch) => {
        dispatch({type: CREATE_DOCUMENT_SUBCATEGORY_REQUEST});

        axios.post(`${DOMAIN}document/category/subcategory/${params.category_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_DOCUMENT_SUBCATEGORY_SUCCESS, payload: res.data });
            toast.success(i18n.t('The subcategory has been successfully added!'))
        }).catch(error=> {
            dispatch({ type: CREATE_DOCUMENT_SUBCATEGORY_FAILURE, payload: error.message });
        })
    }
}

export const editDocumentSubcategory = (params) => {
    return async (dispatch) => {
        dispatch({type: EDIT_DOCUMENT_SUBCATEGORY_REQUEST});

        axios.put(`${DOMAIN}document/category/subcategory/${params.subcategory_id}?page=${params.page}&limit=${params.limit}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: EDIT_DOCUMENT_SUBCATEGORY_SUCCESS, payload: res.data });
            toast.success(i18n.t('The subcategory has been successfully changed!'))
        }).catch(error=> {
            dispatch({ type: EDIT_DOCUMENT_SUBCATEGORY_FAILURE, payload: error.message });
        })
    }
}

export const deleteDocumentSubcategory = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_DOCUMENT_SUBCATEGORY_REQUEST});

        axios.delete(`${DOMAIN}document/category/subcategory/${params.subcategory_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: DELETE_DOCUMENT_SUBCATEGORY_SUCCESS, payload: res.data });
            toast.success(i18n.t('The subcategory has been successfully deleted!'))
        }).catch(error=> {
            dispatch({ type: DELETE_DOCUMENT_SUBCATEGORY_FAILURE, payload: error.message });
        })
    }
}

export const createDocument = (params, navigate) => {
    return async (dispatch) => {
        dispatch({type: CREATE_DOCUMENT_REQUEST});

        axios.post(`${DOMAIN}document/`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: CREATE_DOCUMENT_SUCCESS, payload: res.data });
            navigate(`/admin/template-documents/${params.category_id}`);
            toast.success(i18n.t('The document was successfully created!'))
        }).catch(error=> {
            dispatch({ type: CREATE_DOCUMENT_FAILURE, payload: error.message });
        })
    }
}

export const loadDocumentInfo = (params) => {
    return async (dispatch) => {
        dispatch({type: LOAD_DOCUMENT_REQUEST});

        axios.get(`${DOMAIN}document/${params.slug}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: LOAD_DOCUMENT_SUCCESS, payload: res.data });
        }).catch(error=> {
            dispatch({ type: LOAD_DOCUMENT_FAILURE, payload: error.message });
        })
    }
}

export const editDocumentInfo = (params, navigate) => {
    return async (dispatch) => {
        dispatch({type: EDIT_DOCUMENT_REQUEST});

        axios.put(`${DOMAIN}document/${params.id}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: EDIT_DOCUMENT_SUCCESS, payload: res.data });
            navigate(`/admin/template-documents/${params.category_id}`);
            toast.success(i18n.t('The document has been successfully modified!'))
        }).catch(error=> {
            dispatch({ type: EDIT_DOCUMENT_FAILURE, payload: error.message });
        })
    }
}

export const deleteDocument = (params) => {
    return async (dispatch) => {
        dispatch({type: DELETE_DOCUMENT_REQUEST});

        axios.delete(`${DOMAIN}document/${params.id}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then(res=> {
            dispatch({ type: DELETE_DOCUMENT_SUCCESS, payload: res.data });
            toast.success(i18n.t('The document was successfully deleted!'))
        }).catch(error=> {
            dispatch({ type: DELETE_DOCUMENT_FAILURE, payload: error.message });
        })
    }
}