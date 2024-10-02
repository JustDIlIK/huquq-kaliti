import React, {useEffect, useState} from 'react';
import './chat.css'
import LeftSide from "./left/LeftSide.jsx";
import RightSide from "./right/RightSide.jsx";
import {loadChats} from "../../../store/chat/chatActions.js";
import {useDispatch} from "react-redux";

const Chat = () => {
    const dispatch = useDispatch();
    const [activeUser, setActiveUser] = useState({});
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'Константин Константинович',
            img: '/img/logo.png',
            messages: [
                {
                    content: 'Привет!',
                    date: '21.03.2024 21:00',
                    to_me: true,
                    type: 'text'
                },
                {
                    content: 'Привет!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: '',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'img',
                    file: '/img/logo.png',
                },
                {
                    content: '',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'img',
                    file: '/img/profile-bg.png',
                },
                {
                    content: '',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'video',
                    file: '/consultarion.mp4',
                }
            ]
        },
        {
            id: 2,
            name: 'Кузьмин Кузьма',
            img: '/img/logo.png',
            messages: [
                {
                    content: 'Здравствуйте!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Добрый день!',
                    date: '21.03.2024 21:00',
                    to_me: true,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: 'Как дела?!',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'text'
                },
                {
                    content: '',
                    src: '/aurora.mp3',
                    date: '21.03.2024 21:00',
                    to_me: false,
                    type: 'audio'
                }
            ]
        }
    ])

    function changeChat(user) {
        setActiveUser(user);
    }

    useEffect(() => {
        if (activeUser.id) {
            const container = document.getElementById('messageContainer');
            setTimeout(()=> {
                container.scrollTop = container.scrollHeight;
            }, 100)
        }
    }, [activeUser]);

    function sendMessage(e, message) {
        e.preventDefault()
        let msg = {
            content: message,
            date: '21.03.2024 21:00',
            to_me: false,
            type: 'text'
        }
        setActiveUser((prevActiveUser) => ({
            ...prevActiveUser,
            messages: [...prevActiveUser.messages, msg],
        }));
    }

    useEffect(() => {
        dispatch(loadChats({page: 1, limit: 1000}))
    }, []);

    return (
        <section className={'w-full pb-3'}>
            <div className="container !mx-0 !px-0">
                <div className={'flex border rounded-lg max-h-[600px] min-h-[600px]'}>
                    <LeftSide
                        contacts={contacts}
                        activeUser={activeUser}
                        changeChat={(contact) => changeChat(contact)}
                    />
                    <RightSide
                        activeUser={activeUser}
                        sendMessage={sendMessage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Chat;