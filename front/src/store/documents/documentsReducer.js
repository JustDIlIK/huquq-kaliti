// documentReducer

import {
    CREATE_DOCUMENT_CATEGORIES_FAILURE,
    CREATE_DOCUMENT_CATEGORIES_REQUEST,
    CREATE_DOCUMENT_CATEGORIES_SUCCESS, CREATE_DOCUMENT_REQUEST,
    CREATE_DOCUMENT_SUBCATEGORY_FAILURE,
    CREATE_DOCUMENT_SUBCATEGORY_REQUEST,
    CREATE_DOCUMENT_SUBCATEGORY_SUCCESS,
    DELETE_DOCUMENT_CATEGORY_FAILURE,
    DELETE_DOCUMENT_CATEGORY_REQUEST,
    DELETE_DOCUMENT_CATEGORY_SUCCESS, DELETE_DOCUMENT_FAILURE, DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_SUBCATEGORY_FAILURE,
    DELETE_DOCUMENT_SUBCATEGORY_REQUEST,
    DELETE_DOCUMENT_SUBCATEGORY_SUCCESS, DELETE_DOCUMENT_SUCCESS,
    EDIT_DOCUMENT_CATEGORY_FAILURE,
    EDIT_DOCUMENT_CATEGORY_REQUEST,
    EDIT_DOCUMENT_CATEGORY_SUCCESS,
    EDIT_DOCUMENT_SUBCATEGORY_FAILURE,
    EDIT_DOCUMENT_SUBCATEGORY_REQUEST,
    EDIT_DOCUMENT_SUBCATEGORY_SUCCESS,
    LOAD_DOCUMENT_CATEGORIES_FAILURE,
    LOAD_DOCUMENT_CATEGORIES_INFO_FAILURE,
    LOAD_DOCUMENT_CATEGORIES_INFO_REQUEST,
    LOAD_DOCUMENT_CATEGORIES_INFO_SUCCESS,
    LOAD_DOCUMENT_CATEGORIES_REQUEST,
    LOAD_DOCUMENT_CATEGORIES_SUCCESS, LOAD_DOCUMENT_FAILURE, LOAD_DOCUMENT_REQUEST, LOAD_DOCUMENT_SUCCESS
} from "../../assets/types.js";

const initialState = {
    categories: [],
    categoryInfo: {},
    loadCategories: false,
    loadCategoriesInfo: false,
    loadCategoriesError: false,
    loadCategoryInfoError: false,
    createCategoryError: false,
    editCategoryError: false,
    deleteCategoryError: false,
    createSubcategoryError: false,
    editSubcategoryError: false,
    deleteSubcategoryError: false,
    documentInfo: {},
    loadDocumentInfo: false,
    loadDocumentError: false,
}

const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DOCUMENT_CATEGORIES_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case LOAD_DOCUMENT_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case LOAD_DOCUMENT_CATEGORIES_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                loadServicesError: action.error,
                categories: [],
            }
        }
        case LOAD_DOCUMENT_CATEGORIES_INFO_REQUEST: {
            return {
                ...state,
                loadCategoriesInfo: true
            }
        }
        case LOAD_DOCUMENT_CATEGORIES_INFO_SUCCESS: {
            return {
                ...state,
                loadCategoriesInfo: false,
                categoryInfo: action.payload,
            }
        }
        case LOAD_DOCUMENT_CATEGORIES_INFO_FAILURE: {
            return {
                ...state,
                loadCategoriesInfo: false,
                loadCategoryInfoError: action.error,
                categoryInfo: {},
            }
        }
        case CREATE_DOCUMENT_CATEGORIES_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case CREATE_DOCUMENT_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case CREATE_DOCUMENT_CATEGORIES_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                createCategoryError: action.error
            }
        }
        case EDIT_DOCUMENT_CATEGORY_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case EDIT_DOCUMENT_CATEGORY_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case EDIT_DOCUMENT_CATEGORY_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                editCategoryError: action.error
            }
        }
        case DELETE_DOCUMENT_CATEGORY_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case DELETE_DOCUMENT_CATEGORY_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case DELETE_DOCUMENT_CATEGORY_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                deleteCategoryError: action.error
            }
        }
        case CREATE_DOCUMENT_SUBCATEGORY_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case CREATE_DOCUMENT_SUBCATEGORY_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case CREATE_DOCUMENT_SUBCATEGORY_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                createSubcategoryError: action.error
            }
        }
        case EDIT_DOCUMENT_SUBCATEGORY_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case EDIT_DOCUMENT_SUBCATEGORY_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case EDIT_DOCUMENT_SUBCATEGORY_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                editSubcategoryError: action.error
            }
        }
        case DELETE_DOCUMENT_SUBCATEGORY_REQUEST: {
            return {
                ...state,
                loadCategories: true
            }
        }
        case DELETE_DOCUMENT_SUBCATEGORY_SUCCESS: {
            return {
                ...state,
                loadCategories: false,
                categories: action.payload,
            }
        }
        case DELETE_DOCUMENT_SUBCATEGORY_FAILURE: {
            return {
                ...state,
                loadCategories: false,
                deleteSubcategoryError: action.error
            }
        }
        case LOAD_DOCUMENT_REQUEST: {
            return {
                ...state,
                loadDocumentInfo: true
            }
        }
        case LOAD_DOCUMENT_SUCCESS: {
            return {
                ...state,
                loadDocumentInfo: false,
                documentInfo: action.payload,
            }
        }
        case LOAD_DOCUMENT_FAILURE: {
            return {
                ...state,
                loadDocumentInfo: false,
                loadDocumentError: action.error,
                documentInfo: {},
            }
        }
        case DELETE_DOCUMENT_REQUEST: {
            return {
                ...state,
                loadCategoriesInfo: true
            }
        }
        case DELETE_DOCUMENT_SUCCESS: {
            return {
                ...state,
                loadCategoriesInfo: false,
                categoryInfo: action.payload,
            }
        }
        case DELETE_DOCUMENT_FAILURE: {
            return {
                ...state,
                loadCategoriesInfo: false,
                loadCategoryInfoError: action.error,
                categoryInfo: {},
            }
        }
        default: {
            return state
        }
    }
}

export default documentsReducer