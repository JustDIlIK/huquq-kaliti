// servicesReducer

import {
    CHANGE_SERVICES_SUCCESS,
    CREATE_SERVICES_FAILURE,
    CREATE_SERVICES_REQUEST,
    CREATE_SERVICES_SUCCESS,
    DELETE_SERVICES_SUCCESS, LOAD_SERVICE_INFO_FAILURE,
    LOAD_SERVICE_INFO_REQUEST,
    LOAD_SERVICE_INFO_SUCCESS,
    LOAD_SERVICES_FAILURE,
    LOAD_SERVICES_REQUEST,
    LOAD_SERVICES_SUCCESS
} from "../../assets/types.js";

const initialState = {
    services: [],
    serviceInfo: {},
    servicesLoading: false,
    serviceInfoLoading: false,
    servicesError: false,
    serviceInfoError: false,
}

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SERVICES_REQUEST: {
            return {
                ...state,
                servicesLoading: true
            }
        }
        case LOAD_SERVICES_SUCCESS: {
            return {
                ...state,
                servicesLoading: false,
                services: action.payload,
            }
        }
        case LOAD_SERVICES_FAILURE: {
            return {
                ...state,
                servicesLoading: false,
                services: [],
                servicesError: action.error
            }
        }
        case LOAD_SERVICE_INFO_REQUEST: {
            return {
                ...state,
                serviceInfoLoading: true
            }
        }
        case LOAD_SERVICE_INFO_SUCCESS: {
            return {
                ...state,
                serviceInfoLoading: false,
                serviceInfo: action.payload,
            }
        }
        case LOAD_SERVICE_INFO_FAILURE: {
            return {
                ...state,
                serviceInfoLoading: false,
                serviceInfo: {},
                serviceInfoError: action.error
            }
        }
        case CREATE_SERVICES_REQUEST: {
            return {
                ...state,
                servicesLoading: true,
            }
        }
        case CREATE_SERVICES_SUCCESS: {
            return {
                ...state,
                servicesLoading: false,
                services: action.payload,
            }
        }
        case CREATE_SERVICES_FAILURE: {
            return {
                ...state,
                servicesLoading: false,
                services: [],
                servicesError: action.error
            }
        }
        case CHANGE_SERVICES_SUCCESS: {
            return {
                ...state,
                services: action.payload,
            }
        }
        case DELETE_SERVICES_SUCCESS: {
            return {
                ...state,
                services: action.payload,
            }
        }
        default:
            return state;
    }
}

export default servicesReducer