import React, { useState } from 'react';
import {AudioRecorder} from "react-audio-voice-recorder";
import AudioFile from "./AudioFile.jsx";
import {useDispatch, useSelector} from "react-redux";
import {startRecording, stopRecording} from "../../../../../store/chat/chatActions.js";

const AudioRecordingComponent = ({ recorderControls }) => {
    const dispatch = useDispatch();
    const isRecording = useSelector(state => state.chat.isRecording);
    const [blob, setBlob] = useState(null);

    const startRecord = () => {
        recorderControls.startRecording();
        dispatch(startRecording())
        setBlob(null)
    };

    const stopRecord = () => {
        recorderControls.stopRecording();
        dispatch(stopRecording())
    };

    return (
        <div>
            {
                isRecording ?
                    <button type={"button"} onClick={stopRecord} disabled={!isRecording}
                            className={'bg-palatinate pulse rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-all ease-in-out duration-300'}>
                        <span style={{ "--i": 0 }}></span>
                        <span style={{ "--i": 1 }}></span>
                        <span style={{ "--i": 2 }}></span>
                        <span style={{ "--i": 3 }}></span>
                        <span style={{ "--i": 4 }}></span>
                        <span style={{ "--i": 5 }}></span>
                        <svg className={'relative z-10'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 10V12C19 15.866 15.866 19 12 19M12 19C8.13401 19 5 15.866 5 12V10M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    :
                    <button type={"button"} onClick={startRecord} disabled={isRecording}
                            className={'bg-greyCloud rounded-full w-10 h-10 flex items-center justify-center shrink-0'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 10V12C19 15.866 15.866 19 12 19M12 19C8.13401 19 5 15.866 5 12V10M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
            }

            <div className={'hidden'}>
                <AudioRecorder
                    onRecordingComplete={(blob) => setBlob(blob)}
                    recorderControls={recorderControls}
                />
            </div>
            {/*{blob && (*/}
            {/*    <>*/}
            {/*        <audio controls src={URL.createObjectURL(blob)}>*/}
            {/*        </audio>*/}
            {/*    </>*/}
            {/*)}*/}
        </div>
    );
};

export default AudioRecordingComponent;
