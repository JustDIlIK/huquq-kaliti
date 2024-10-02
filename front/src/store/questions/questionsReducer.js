import {
    CREATE_QUESTION_FAILURE,
    CREATE_QUESTION_REQUEST,
    CREATE_QUESTION_SUCCESS, DELETE_QUESTION_FAILURE, DELETE_QUESTION_REQUEST, DELETE_QUESTION_SUCCESS,
    EDIT_QUESTION_FAILURE,
    EDIT_QUESTION_REQUEST,
    EDIT_QUESTION_SUCCESS,
    LOAD_QUESTIONS_FAILURE,
    LOAD_QUESTIONS_REQUEST,
    LOAD_QUESTIONS_SUCCESS
} from "../../assets/types.js";

const initialStore = {
    questions: [],
    loadQuestions: false,
    loadQuestionsError: false
}

const questionsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS_REQUEST:
            return {
                ...state,
                loadQuestions: true
            }
        case LOAD_QUESTIONS_SUCCESS:
            return {
                ...state,
                loadQuestions: false,
                questions: action.payload,
            }
        case LOAD_QUESTIONS_FAILURE:
            return {
                ...state,
                loadQuestions: false,
                questions: [],
                loadQuestionsError: action.error
            }
        case CREATE_QUESTION_REQUEST:
            return {
                ...state,
                loadQuestions: true
            }
        case CREATE_QUESTION_SUCCESS:
            return {
                ...state,
                loadQuestions: false,
                questions: action.payload,
            }
        case CREATE_QUESTION_FAILURE:
            return {
                ...state,
                loadQuestions: false,
                questions: [],
                loadQuestionsError: action.error
            }
        case EDIT_QUESTION_REQUEST:
            return {
                ...state,
                loadQuestions: true
            }
        case EDIT_QUESTION_SUCCESS:
            return {
                ...state,
                loadQuestions: false,
                questions: action.payload,
            }
        case EDIT_QUESTION_FAILURE:
            return {
                ...state,
                loadQuestions: false,
                questions: [],
                loadQuestionsError: action.error
            }
        case DELETE_QUESTION_REQUEST:
            return {
                ...state,
                loadQuestions: true
            }
        case DELETE_QUESTION_SUCCESS:
            return {
                ...state,
                loadQuestions: false,
                questions: action.payload,
            }
        case DELETE_QUESTION_FAILURE:
            return {
                ...state,
                loadQuestions: false,
                questions: [],
                loadQuestionsError: action.error
            }
        default: {
            return state
        }
    }
}

export default questionsReducer