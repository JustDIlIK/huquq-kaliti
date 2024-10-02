import React, {useEffect, useState} from 'react';
import Message from "./ui/Message.jsx";
import ClosedChat from "./ui/ClosedChat.jsx";
import MessageForm from "./ui/MessageForm.jsx";
import ActiveUser from "./ui/ActiveUser.jsx";
import {CSSTransition} from "react-transition-group";

const RightSide = ({activeUser, sendMessage}) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('messageContainer');
            if (container) {
                setShowButton(container.scrollTop < container.scrollHeight - container.clientHeight);
            }
        };

        const container = document.getElementById('messageContainer');
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeUser]);

    function scrollBottom(){
        const container = document.getElementById('messageContainer');
        if(container.scrollTop !== container.scrollHeight){
            container.scrollTop = container.scrollHeight;
        }
    }

    return (
        <>
            {
                activeUser.id ?
                    <div className={'bg-white w-9/12 rounded-r-lg h-full flex flex-col relative'}>
                        <ActiveUser
                            activeUser={activeUser}/>
                        <div id="messageContainer"
                             className={'h-[472px] overflow-y-auto overflow-x-hidden flex flex-col gap-5 px-2 py-6'}>
                            {
                                activeUser.messages.map((message, index) => (
                                    <Message key={index} message={message} toMe={message.to_me}/>
                                ))
                            }
                            <CSSTransition in={showButton} timeout={200} classNames="fade"
                                           unmountOnExit>
                                <button onClick={scrollBottom}
                                        className="absolute bottom-20 right-10 z-10 bg-white rounded-full flex items-center justify-center shadow-scrollButton w-10 h-10">
                                    <svg width="12" height="12" viewBox="0 0 12 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.40976 0.294922L5.99976 4.87492L10.5898 0.294922L11.9998 1.70492L5.99976 7.70492L-0.000244141 1.70492L1.40976 0.294922Z"
                                            fill="#005FFF"
                                        />
                                    </svg>
                                </button>
                            </CSSTransition>
                        </div>
                        <MessageForm
                            sendMessage={sendMessage}
                        />
                    </div>
                    :
                    <ClosedChat/>
            }
        </>
    );
};

export default RightSide;