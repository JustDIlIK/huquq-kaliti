import {
    DELETE_MESSAGE_FAILURE,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    EDIT_MESSAGE_FAILURE,
    EDIT_MESSAGE_REQUEST,
    EDIT_MESSAGE_SUCCESS,
    LOAD_CHAT_DETAIL_FAILURE,
    LOAD_CHAT_DETAIL_REQUEST,
    LOAD_CHAT_DETAIL_SUCCESS,
    LOAD_CHATS_FAILURE,
    LOAD_CHATS_REQUEST,
    LOAD_CHATS_SUCCESS, READ_MESSAGE_FAILURE,
    READ_MESSAGE_REQUEST, READ_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    START_RECORDING_SUCCESS,
    STOP_RECORDING_SUCCESS
} from "../../assets/types.js";
import axios from "axios";
import {DOMAIN} from "../../assets/utils.js";

export const startRecording = () => {
    return (dispatch) => {
        dispatch({type: START_RECORDING_SUCCESS, payload: true})
    }
}
export const stopRecording = () => {
    return (dispatch) => {
        dispatch({type: STOP_RECORDING_SUCCESS, payload: true})
    }
}

export const loadChats = (params) =>    {
    return (dispatch) => {
        dispatch({type: LOAD_CHATS_REQUEST});

        axios.get(`${DOMAIN}chat/?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: LOAD_CHATS_SUCCESS, payload: res.data})
            dispatch(loadChatDetail({page: 1, limit: 1000, chat_id: res.data.data[0].id}))
        }).catch((error) => {
            dispatch({type: LOAD_CHATS_FAILURE, payload: error.message})
        })
    }
}

export const loadChatDetail = (params) =>    {
    return (dispatch) => {
        dispatch({type: LOAD_CHAT_DETAIL_REQUEST});

        axios.get(`${DOMAIN}chat/${params.chat_id}?page=${params.page}&limit=${params.limit}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: LOAD_CHAT_DETAIL_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch({type: LOAD_CHAT_DETAIL_FAILURE, payload: error.message})
        })
    }
}

export const sendMessage = (params) =>    {
    return (dispatch) => {
        dispatch({type: SEND_MESSAGE_REQUEST});

        axios.post(`${DOMAIN}chat/${params.chat_id}?message=${params.message}`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: SEND_MESSAGE_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch({type: SEND_MESSAGE_FAILURE, payload: error.message})
        })
    }
}

export const editMessage = (params) =>    {
    return (dispatch) => {
        dispatch({type: EDIT_MESSAGE_REQUEST});

        axios.put(`${DOMAIN}chat/message/${params.message_id}?message=${params.message}`, {}, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: EDIT_MESSAGE_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch({type: EDIT_MESSAGE_FAILURE, payload: error.message})
        })
    }
}

export const deleteMessage = (params) =>    {
    return (dispatch) => {
        dispatch({type: DELETE_MESSAGE_REQUEST});

        axios.delete(`${DOMAIN}chat/message/${params.message_id}`, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: DELETE_MESSAGE_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch({type: DELETE_MESSAGE_FAILURE, payload: error.message})
        })
    }
}

export const readMessage = (params) =>    {
    return (dispatch) => {
        dispatch({type: READ_MESSAGE_REQUEST});

        axios.post(`${DOMAIN}chat/messages/read`, params.form, {
            headers: {
                Authorization: `${localStorage.getItem('huquq-token')}`
            }
        }).then((res) => {
            dispatch({type: READ_MESSAGE_SUCCESS, payload: res.data})
        }).catch((error) => {
            dispatch({type: READ_MESSAGE_FAILURE, payload: error.message})
        })
    }
}