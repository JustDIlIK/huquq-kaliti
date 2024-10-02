// chatReducer.js

import {START_RECORDING_SUCCESS, STOP_RECORDING_SUCCESS} from "../../assets/types.js";

const initialState = {
    isRecording: false,
    chats: [],
    chatDetails: {}
}

const chatReducer = (state = initialState, action) => {
    switch (action.type){
        case START_RECORDING_SUCCESS: {
            return {
                ...state,
                isRecording: true
            }
        }
        case STOP_RECORDING_SUCCESS: {
            return {
                ...state,
                isRecording: false
            }
        }
        default:
            return state;
    }
}

export default chatReducer;