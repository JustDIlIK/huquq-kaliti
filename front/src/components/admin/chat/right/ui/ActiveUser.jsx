import React, {useRef, useState} from 'react';
import Modal from "../../../../ui/Modal.jsx";
import usePopup from "../../../../../hooks/usePopup.js";
import {useTranslation} from "react-i18next";
import Popup from "../../../../ui/Popup.jsx";
import {HashLink as Link} from "react-router-hash-link";
import {CSSTransition} from "react-transition-group";

const ActiveUser = ({activeUser}) => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {showPopup, showPopupWithTimeout} = usePopup();
    const [active, setActive] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openPopup = () => {
        const link = '@Karimov_A';
        navigator.clipboard.writeText(link)
        setActive(true)
        setTimeout(() => {
            setActive(false)
        }, 500)

        showPopupWithTimeout(500);
    };

    return (
        <>
            <div
                onClick={openModal}
                className={'py-[9px] px-4 border-b flex items-center gap-[18px] cursor-pointer'}
            >
                <div className={'w-10 h-10 relative shrink-0'}>
                    <img className={'w-10'} src={activeUser.img} alt="img"/>
                    <div
                        className={'message__circle w-[12px] h-[12px] bg-tealishGreen rounded-full absolute top-0 right-0 border-[2px] border-white'}></div>
                </div>
                <div className={'flex flex-col gap-1.5'}>
                    <p className={'font-medium'}>
                        {activeUser.name}
                    </p>
                    <p className={'text-paleSky'}>
                        Online for 10 mins
                    </p>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <>
                    <div className={'flex items-center gap-4 max_sm:flex-col'}>
                        <div className={'w-fit shrink-0'}>
                            <div className={'relative'}>
                                <img className={'w-[158px] h-[158px]'} src={activeUser.img} alt="img"/>
                                <div
                                    className={'absolute -bottom-3 left-14 bg-palatinate rounded-[4px] text-white w-fit px-2 py-1 font-bold'}>
                                    Юрист
                                </div>
                            </div>
                            <p className={'italic mt-[22px] text-center'}>
                                Стаж: 15 лет
                            </p>
                        </div>
                        <div className={'max_sm:text-center'}>
                            <p className={'font-[600] text-3xl max_sm:text-xl'}>
                                {activeUser.name}
                            </p>
                            <p className={'italic mt-2'}>
                                Трудовое право
                            </p>
                        </div>
                    </div>
                    <div className={'mt-4'}>
                        <p>
                            Имя пользователя
                        </p>
                        <button
                            onClick={openPopup}
                            className={`bg-romance flex items-center justify-between w-full rounded-[6px] p-4 ${active ? 'text-green-700' : 'text-palatinate'}`}
                        >
                            {
                                active ?
                                    <>
                                        {t('Ссылка скопирована!')}
                                        <svg width="24px" height="24px" fill="#15a83d" viewBox="0 0 36 36"
                                             version="1.1"
                                             preserveAspectRatio="xMidYMid meet"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"><title>success-standard-line</title>
                                                <path className="clr-i-outline clr-i-outline-path-1"
                                                      d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path>
                                                <path className="clr-i-outline clr-i-outline-path-2"
                                                      d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"></path>
                                                <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
                                            </g>
                                        </svg>
                                    </>
                                    :
                                    <>
                                        @Karimov_A
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z"
                                                stroke="#2F3EDE" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </>
                            }
                        </button>

                        <Link
                            to={`/specialist/${activeUser.id}/#profile`}
                            className={'hover:text-black'}
                        >
                            <button
                                className={'bg-romance hover:shadow-lg transition-all ease-in-out duration-300 font-bold flex items-center gap-2.5 py-3.5 px-6 rounded-[6px] mx-auto mt-8'}>
                                Перейти в профиль юриста
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.93 18.0703L21 12.0003L14.93 5.93031" stroke="#141414"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.00008 12H20.8301" stroke="#141414" strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </>
            </Modal>

            <Popup show={showPopup} success={true}>
                {t('The link has been copied to the clipboard!')}
            </Popup>
        </>
    );
};

export default ActiveUser;