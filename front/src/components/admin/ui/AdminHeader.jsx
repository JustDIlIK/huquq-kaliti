import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {DOMAIN, MAIN_ROUTE} from "../../../assets/utils.js";
import {Breadcrumb} from "semantic-ui-react";
import Breadcrumbs from "../../ui/Breadcrumbs.jsx";
import {useTranslation} from "react-i18next";
import {CSSTransition} from "react-transition-group";
import {useSelector} from "react-redux";

const AdminHeader = () => {
    const {i18n, t} = useTranslation();
    const currentUser = useSelector(state => state.user.currentUser);
    const [showLang, setShowLang] = useState(false)
    const langRef = useRef(null);
    const [activeLanguage, setActiveLanguage] = useState({
        name: 'Uzbek (Latin)',
        short: 'Uzb (Lat)',
        locale: 'uz_l'
    });
    const languages = [
        {
            name: 'Russian',
            short: 'Ru',
            locale: 'ru'
        },
        {
            name: 'Uzbek (Latin)',
            short: 'Uzb (Lat)',
            locale: 'uz_l'
        },
        {
            name: 'Uzbek (Cyrillic)',
            short: 'Uzbek (Cyr)',
            locale: 'uz'
        },
        {
            name: 'English',
            short: 'En',
            locale: 'en'
        }
    ]

    function setLang() {
        setShowLang(!showLang)
    }
    const changeLanguage = (lng) => {
        setShowLang(false)
        setActiveLanguage(lng)
        localStorage.setItem('huquq-lang', JSON.stringify(lng))
        i18n.changeLanguage(lng.locale);
    };

    useEffect(() => {
        let lng = localStorage.getItem('huquq-lang')
        if(lng){
            lng = JSON.parse(lng)
            setActiveLanguage(lng)
            i18n.changeLanguage(lng.locale);
        }
    }, []);

    return (
        <header
            className={'py-[21px] absolute top-0 left-0 right-0 z-10 bg-white shadow-adminHeader w-full pr-4'}
        >
            <div className="container !ml-[20px] flex items-center justify-end">
                <div className={'flex items-center gap-[32px]'}>
                    <div className={'relative'}>
                        <button onClick={setLang} className={'flex items-center gap-2'}>
                            <p>
                                {t(activeLanguage.short)}
                            </p>
                            <svg
                                className={`${showLang ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300`}
                                width={'15'} height={'20'} viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#000000"
                                          d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
                                </g>
                            </svg>
                        </button>
                        <CSSTransition nodeRef={langRef} in={showLang} timeout={200} classNames="fade"
                                       unmountOnExit>
                            <div
                                ref={langRef}
                                className={'absolute top-10 rounded-lg bg-white shadow w-[200px] max_sm:w-[250px] flex flex-col items-start overflow-hidden'}>
                                {
                                    languages.map((language, index) => (
                                        <button
                                            className={`${language.short === activeLanguage.short ? 'bg-palatinate text-white hover:!bg-palatinate' : ''} w-full text-start py-1 px-3 hover:bg-romance transition-all ease-in-out duration-300`}
                                            key={index}
                                            onClick={() => changeLanguage(language)}
                                        >
                                            {t(language.name)}
                                        </button>
                                    ))
                                }
                            </div>
                        </CSSTransition>
                    </div>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 21H10M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                                stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <Link to={'profile'} className={'flex items-center gap-[16px]'}>
                        {
                            currentUser.role.system_name === "admin" ?
                                <img
                                    className={'w-[32px] h-[32px] rounded-full overflow-hidden'}
                                    src={'/img/user-logo.svg'}
                                    alt="img"/>
                                :
                                <img
                                    className={'w-[32px] h-[32px] rounded-full overflow-hidden'}
                                    src={currentUser.photo ? DOMAIN + currentUser.photo : '/img/user-logo.svg'}
                                    alt="img"/>
                        }
                        <p className={'font-medium'}>
                            {
                                currentUser.name ? currentUser.name + ' ' + (currentUser.lastname || '') : currentUser.role.names[i18n.language]
                            }
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;