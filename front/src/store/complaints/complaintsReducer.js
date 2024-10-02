// complaintsReducer.js

import {
    CREATE_COMPLAINT_FAILURE,
    CREATE_COMPLAINT_REQUEST,
    CREATE_COMPLAINT_SUCCESS,
    LOAD_COMPLAINT_INFO_FAILURE,
    LOAD_COMPLAINT_INFO_REQUEST,
    LOAD_COMPLAINT_INFO_SUCCESS,
    LOAD_COMPLAINTS_FAILURE,
    LOAD_COMPLAINTS_REQUEST,
    LOAD_COMPLAINTS_SUCCESS,
    LOAD_MY_COMPLAINTS_FAILURE,
    LOAD_MY_COMPLAINTS_REQUEST,
    LOAD_MY_COMPLAINTS_SUCCESS, RESPONCE_COMPLAINTS_FAILURE,
    RESPONCE_COMPLAINTS_REQUEST, RESPONCE_COMPLAINTS_SUCCESS
} from "../../assets/types.js";

const initialState = {
    complaints: [],
    loadComplaints: false,
    complaintsError: false,
    complaintInfo: [],
    loadComplaintInfo: false,
    complaintInfoError: false,
    myComplaints: [],
    loadMyComplaints: false,
    myComplaintsError: false,
}

const complaintsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMPLAINTS_REQUEST: {
            return {
                ...state,
                loadComplaints: true
            }
        }
        case LOAD_COMPLAINTS_SUCCESS: {
            return {
                ...state,
                complaints: action.payload,
                loadComplaints: false
            }
        }
        case LOAD_COMPLAINTS_FAILURE: {
            return {
                ...state,
                loadComplaints: false,
                complaintsError: action.error
            }
        }
        case LOAD_COMPLAINT_INFO_REQUEST: {
            return {
                ...state,
                loadComplaintInfo: true
            }
        }
        case LOAD_COMPLAINT_INFO_SUCCESS: {
            return {
                ...state,
                complaintInfo: action.payload,
                loadComplaintInfo: false
            }
        }
        case LOAD_COMPLAINT_INFO_FAILURE: {
            return {
                ...state,
                loadComplaintInfo: false,
                complaintInfoError: action.error
            }
        }
        case RESPONCE_COMPLAINTS_REQUEST: {
            return {
                ...state,
                loadComplaintInfo: true
            }
        }
        case RESPONCE_COMPLAINTS_SUCCESS: {
            return {
                ...state,
                complaintInfo: action.payload,
                loadComplaintInfo: false
            }
        }
        case RESPONCE_COMPLAINTS_FAILURE: {
            return {
                ...state,
                loadComplaintInfo: false,
                complaintInfoError: action.error
            }
        }
        case LOAD_MY_COMPLAINTS_REQUEST: {
            return {
                ...state,
                loadMyComplaints: true
            }
        }
        case LOAD_MY_COMPLAINTS_SUCCESS: {
            return {
                ...state,
                myComplaints: action.payload,
                loadMyComplaints: false
            }
        }
        case LOAD_MY_COMPLAINTS_FAILURE: {
            return {
                ...state,
                loadMyComplaints: false,
                complaintsError: action.error
            }
        }
        case CREATE_COMPLAINT_REQUEST: {
            return {
                ...state,
                loadMyComplaints: true
            }
        }
        case CREATE_COMPLAINT_SUCCESS: {
            return {
                ...state,
                myComplaints: action.payload,
                loadMyComplaints: false
            }
        }
        case CREATE_COMPLAINT_FAILURE: {
            return {
                ...state,
                loadMyComplaints: false,
                complaintsError: action.error
            }
        }
        default: {
            return state
        }
    }
}

export default complaintsReducer;