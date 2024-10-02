// userReducer.js

import {
    BLOCK_USER_FAILURE,
    BLOCK_USER_REQUEST, BLOCK_USER_SUCCESS,
    LOAD_CURRENT_USER_FAILURE,
    LOAD_CURRENT_USER_REQUEST,
    LOAD_CURRENT_USER_SUCCESS, LOAD_USERS_FAILURE,
    LOAD_USERS_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, UNBLOCK_USER_FAILURE, UNBLOCK_USER_SUCCESS
} from "../../assets/types.js";

const initialState = {
    currentUser: null,
    userLoading: false,
    userError: null,
    registerLoading: false,
    registerError: null,
    loginLoading: false,
    loginError: null,
    userList: false,
    usersError: null,
    blockUserError: null,
    unblockUserError: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CURRENT_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
                userError: null,
            };
        case LOAD_CURRENT_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                currentUser: action.payload,
            };
        case LOAD_CURRENT_USER_FAILURE:
            return {
                ...state,
                userLoading: false,
                userError: action.error,
                currentUser: undefined,
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                registerError: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                currentUser: action.payload,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registerError: action.error,
                currentUser: undefined,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: undefined,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                currentUser: action.payload,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.error,
                currentUser: undefined,
            };
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                userList: action.payload,
            };
        case LOAD_USERS_FAILURE:
            return {
                ...state,
                userList: [],
                usersError: action.error
            };
        case BLOCK_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload,
            };
        case BLOCK_USER_FAILURE:
            return {
                ...state,
                userList: [],
                blockUserError: action.error
            };
        case UNBLOCK_USER_SUCCESS:
            return {
                ...state,
                userList: action.payload,
            };
        case UNBLOCK_USER_FAILURE:
            return {
                ...state,
                userList: [],
                unblockUserError: action.error
            };
        default:
            return state;
    }
};

export default userReducer;
