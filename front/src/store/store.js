// store.js
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from "redux-thunk";
import userReducer from './user/userReducer.js';
import chatReducer from "./chat/chatReducer.js";
import servicesReducer from "./services/servicesReducer.js";
import documentsReducer from "./documents/documentsReducer.js";
import questionsReducer from "./questions/questionsReducer.js";
import complaintsReducer from "./complaints/complaintsReducer.js";
import rolesReducer from "./roles/rolesReducer.js";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    services: servicesReducer,
    documents: documentsReducer,
    questions: questionsReducer,
    complaints: complaintsReducer,
    roles: rolesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;