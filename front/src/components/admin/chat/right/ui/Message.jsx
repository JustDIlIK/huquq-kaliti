import React, {useState} from 'react';
import AudioFile from "./AudioFile.jsx";

const Message = ({toMe, message, ...props}) => {
    const [activeFile, setActiveFile] = useState(false);

    function changeActiveFile() {
        setActiveFile(!activeFile)
    }

    return (
        <>
            <div
                className={`relative bg-white w-fit hover:translate-y-4 ${toMe ? 'message-from' : 'message-me ml-auto'} ${message.type === 'text' ? 'p-3': 'p-[2px]'}`}>
                {
                    message.type === 'text' &&
                    <p>{message.content}</p>
                }
                {
                    message.type === 'img' &&
                    <img
                        onClick={changeActiveFile}
                        className={'max-w-[400px] w-full cursor-pointer'}
                        src={message.file}
                        alt="message-file"
                    />
                }
                {
                    message.type === 'video' &&
                    <video
                        className={'max-w-[400px]'}
                        autoPlay controls
                    >
                        <source src={message.file} type="video/mp4"/>
                    </video>
                }
                {
                    message.type === 'audio' &&
                    <AudioFile id={'asd'} src={message.src}/>
                }
                <div className={'message-date'}>
                    {message.date}
                </div>
                {/*<svg className={`tick absolute -bottom-4 ${toMe ? 'hidden' : 'right-0'}`} width="16" height="10"*/}
                {/*     viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path*/}
                {/*        d="M11.9767 1.4693L11.0367 0.529297L6.81 4.75596L7.75 5.69596L11.9767 1.4693ZM14.8033 0.529297L7.75 7.58263L4.96333 4.80263L4.02333 5.74263L7.75 9.4693L15.75 1.4693L14.8033 0.529297ZM0.25 5.74263L3.97667 9.4693L4.91667 8.5293L1.19667 4.80263L0.25 5.74263Z"*/}
                {/*        fill="#005FFF"/>*/}
                {/*</svg>*/}
                <svg className={`tick absolute -bottom-4 ${toMe ? 'hidden' : 'right-0'}`}  width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.99993 7.80007L1.19993 5.00006L0.266602 5.9334L3.99993 9.66673L11.9999 1.66673L11.0666 0.733398L3.99993 7.80007Z"
                          fill="#747881"/>
                </svg>
            </div>
            {
                activeFile &&
                <>
                    <div onClick={changeActiveFile}
                         className={'fixed bg-black bg-opacity-80 top-0 left-0 bottom-0 right-0 z-20'}>

                    </div>
                    <button onClick={changeActiveFile} className={'fixed top-5 right-5 z-40 w-10 h-10 bg-transparent'}>
                        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M3 21.32L21 3.32001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"></path>
                                <path d="M3 3.32001L21 21.32" stroke="#ffffff" strokeWidth="1.5"></path>
                            </g>
                        </svg>
                    </button>
                    <div className={'fixed top-10 left-10 bottom-10 right-10 flex items-center justify-center z-30'}>
                        {
                            message.type === 'img' &&
                            <img
                                className={'w-full h-full object-contain'}
                                src={message.file}
                                alt="message-file"
                            />
                        }
                    </div>
                </>
            }
        </>
    );
};

export default Message;