import {
    CREATE_ROLE_FAILURE,
    CREATE_ROLE_REQUEST, CREATE_ROLE_SUCCESS, EDIT_ROLE_FAILURE, EDIT_ROLE_REQUEST, EDIT_ROLE_SUCCESS,
    LOAD_PERMISSIONS_FAILURE,
    LOAD_PERMISSIONS_REQUEST,
    LOAD_PERMISSIONS_SUCCESS,
    LOAD_ROLES_FAILURE,
    LOAD_ROLES_REQUEST,
    LOAD_ROLES_SUCCESS
} from "../../assets/types.js";

const initialState = {
    roles: [],
    permissions: [],
    loadRoles: false,
    loadRolesError: false,
    loadPermissions: false,
    loadPermissionsError: false,
}

const rolesReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ROLES_REQUEST:
            return {
                ...state,
                loadRoles: true,
                loadRolesError: false,
            }
        case LOAD_ROLES_SUCCESS:
            return {
                ...state,
                loadRoles: false,
                roles: action.payload
            }
        case LOAD_ROLES_FAILURE:
            return {
                ...state,
                loadRoles: false,
                loadRolesError: true,
            }
        case CREATE_ROLE_REQUEST:
            return {
                ...state,
                loadRoles: true,
                loadRolesError: false,
            }
        case CREATE_ROLE_SUCCESS:
            return {
                ...state,
                loadRoles: false,
                roles: action.payload
            }
        case CREATE_ROLE_FAILURE:
            return {
                ...state,
                loadRoles: false,
                loadRolesError: true,
            }
        case EDIT_ROLE_REQUEST:
            return {
                ...state,
                loadRoles: true,
                loadRolesError: false,
            }
        case EDIT_ROLE_SUCCESS:
            return {
                ...state,
                loadRoles: false,
                roles: action.payload
            }
        case EDIT_ROLE_FAILURE:
            return {
                ...state,
                loadRoles: false,
                loadRolesError: true,
            }
        case LOAD_PERMISSIONS_REQUEST:
            return {
                ...state,
                loadPermissions: true,
                loadPermissionsError: false,
            }
        case LOAD_PERMISSIONS_SUCCESS:
            return {
                ...state,
                loadPermissions: false,
                permissions: action.payload
            }
        case LOAD_PERMISSIONS_FAILURE:
            return {
                ...state,
                loadPermissions: false,
                loadPermissionsError: true,
            }
        default: {
            return state;
        }
    }
}

export default rolesReducer