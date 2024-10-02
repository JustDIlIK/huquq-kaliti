import React, {useState} from 'react';
import AudioRecordingComponent from "./AudioRecordingComponent.jsx";
import {LiveAudioVisualizer} from "react-audio-visualize";
import {useAudioRecorder} from "react-audio-voice-recorder";
import {useSelector} from "react-redux";

const MessageForm = ({sendMessage}) => {
    const isRecording = useSelector(state => state.chat.isRecording);
    const recorder = useAudioRecorder();
    const [message, setMessage] = useState('');

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function sendMessage2(e){
        e.preventDefault()
        if(message.length > 0){
            sendMessage(e, message)
            setMessage('')
        }
    }

    return (
        <form onSubmit={sendMessage2}
              className={'h-[54px] px-3 flex items-center gap-2 justify-between'}>
            {
                isRecording ?
                    <></>
                    :
                    <button type="button">
                        <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.0003 14.668V25.3346M10.667 20.0013H21.3337M29.3337 20.0013C29.3337 27.365 23.3641 33.3346 16.0003 33.3346C8.63653 33.3346 2.66699 27.365 2.66699 20.0013C2.66699 12.6375 8.63653 6.66797 16.0003 6.66797C23.3641 6.66797 29.3337 12.6375 29.3337 20.0013Z"
                                stroke="#747881" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
            }
            {
                isRecording && recorder && recorder.mediaRecorder ?
                    <div className={'w-full flex items-center justify-end gap-2 pr-2'}>
                        <LiveAudioVisualizer
                            mediaRecorder={recorder.mediaRecorder}
                            width={200}
                            height={30}
                        />
                        {/*<div className={'text-end text-paleSky'}>*/}
                        {/*    <p>*/}
                        {/*        Аудио записывается. Говорите...*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                    :
                    <input
                        className={'border py-2 px-4 outline-0 rounded-full w-full focus:border-1 focus:border-brightBlue'}
                        type="text"
                        placeholder={'Написать сообщение...'}
                        value={message}
                        onChange={handleChange}
                    />
            }
            <AudioRecordingComponent
                recorderControls={recorder}
            />
            {
                isRecording ?
                    <></>
                    :
                    <button
                        className={`rounded-full w-10 h-10 flex items-center justify-center shrink-0 transition-all ease-in-out duration-300 ${message.length ? 'bg-brightBlue' : 'bg-greyCloud'}`}>
                        <svg width="20" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0004 10.5691H4.50043M4.41577 10.8606L2.08085 17.8353C1.89742 18.3833 1.8057 18.6572 1.87152 18.826C1.92868 18.9725 2.05144 19.0836 2.20292 19.1258C2.37736 19.1745 2.64083 19.056 3.16776 18.8188L19.8792 11.2987C20.3936 11.0672 20.6507 10.9515 20.7302 10.7907C20.7993 10.6511 20.7993 10.4872 20.7302 10.3475C20.6507 10.1868 20.3936 10.071 19.8792 9.83959L3.16193 2.31685C2.63659 2.08044 2.37392 1.96224 2.19966 2.01073C2.04832 2.05284 1.92556 2.16363 1.86821 2.30987C1.80216 2.47826 1.8929 2.75164 2.07437 3.2984L4.41642 10.3547C4.44759 10.4486 4.46317 10.4955 4.46933 10.5435C4.47479 10.5862 4.47473 10.6293 4.46916 10.6719C4.46289 10.7199 4.44718 10.7668 4.41577 10.8606Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
            }
        </form>
    );
};

export default MessageForm;