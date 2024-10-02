import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import {useTranslation} from 'react-i18next';
import MainButton from "./ui/MainButton.jsx";
import { HashLink as Link } from 'react-router-hash-link';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentUser } from '../store/user/userActions.js';

const Header = () => {
    const currentUser  = useSelector((state) => state.user.currentUser);

    const headerRef = useRef(null);
    const location = useLocation();
    const [activeBurger, setActiveBurger] = useState(false);
    const [activeHeader, setActiveHeader] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navLinks, setNavLinks] = useState([
        {
            name: 'about the platform',
            link: '/about-us/#intro'
        },
        {
            name: 'Constructor',
            link: '/#constructor'
        },
        {
            name: 'Team',
            link: '/#team'
        },
        {
            name: 'Services',
            link: '/services/#intro'
        },
        {
            name: 'News',
            link: '/#news'
        },
        {
            name: 'FAQ',
            link: '/usual-questions/#intro'
        },
    ])
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
    const [activeLanguage, setActiveLanguage] = useState({
        name: 'Uzbek (Latin)',
        short: 'Uzb (Lat)',
        locale: 'uz_l'
    });

    const [showLang, setShowLang] = useState(false)
    const langRef = useRef(null);
    const {i18n, t} = useTranslation();

    function setLang() {
        setShowLang(!showLang)
    }

    const changeLanguage = (lng) => {
        setShowLang(false)
        setActiveLanguage(lng)
        localStorage.setItem('huquq-lang', JSON.stringify(lng))
        i18n.changeLanguage(lng.locale);
    };

    function changeActiveBurger() {
        setActiveBurger(!activeBurger);
    }

    useEffect(() => {
        if(i18n.language === 'uz_l'){
            setActiveLanguage({
                name: 'Uzbek (Latin)',
                short: 'Uzb (Lat)',
                locale: 'uz_l'
            })
        } else if (i18n.language === 'uz'){
            setActiveLanguage({
                name: 'Uzbek (Cyrillic)',
                short: 'Uzbek (Cyr)',
                locale: 'uz'
            })
        } else if(i18n.language === 'en'){
            setActiveLanguage({
                name: 'English',
                short: 'En',
                locale: 'en'
            })
        } else if(i18n.language === 'ru'){
            setActiveLanguage({
                name: 'Russian',
                short: 'Ru',
                locale: 'ru'
            })
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            const currentScrollPos = window.scrollY;
            if (header) {
                if (currentScrollPos > 300) {
                    if (currentScrollPos > prevScrollPos) {
                        setIsScrollingUp(false);
                        setActiveBurger(false)
                        setShowLang(false)
                    } else {
                        setActiveHeader(true);
                        setIsScrollingUp(true);
                    }
                } else {
                    setActiveHeader(false);
                }
            }


            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

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
            ref={headerRef}
            className={`absolute top-0 left-0 right-0 z-[100] transition-all ease-in-out duration-300 transform ${
                activeHeader && isScrollingUp
                    ? '!fixed !bg-white shadow-lg !top-0 !animate-slide-down !py-[24px]'
                    : activeHeader
                        ? '!fixed !bg-white shadow-lg !top-0 !animate-slide-up !py-[24px]'
                        : '-top-full'
            } ${location.pathname === '/' ? 'py-[40px]' : 'py-[24px]'} w-full z-10`}
        >
            <div className="relative container flex items-center justify-between">
                <Link to={'/#main'} className="font-bold">
                    <img className={'max-w-[180px] max_xl:max-w-[150px]'} src="/logo.svg" alt=""/>
                </Link>
                <div className={`flex items-center justify-between gap-[100px] max_xl:gap-[30px] max_lg:absolute max_lg:-top-[43px] max_lg:pt-[100px] max_lg:justify-start max_lg:gap-10 max_lg:p-10 max_lg:bg-white max_lg:flex-col max_lg:shadow max_lg:h-[100vh] transition-all ease-in-out duration-300 ${activeBurger ? 'right-0 max_sm:w-full' : '-right-[200%]'}`}>
                    <nav className={'max_lg:w-full'}>
                        <ul className="flex items-center gap-5 max_lg:flex-col max_lg:items-start">
                            {
                                navLinks.map((link, index) => (
                                    <li className="cursor-pointer" key={index}>
                                        <Link to={link.link}>
                                            {t(link.name)}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className={'flex items-center gap-10 max_sm:flex-col max_sm:items-start max_sm:w-full'}>
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
                        {
                            currentUser && currentUser.id ?
                                <Link to={'/admin/profile'} className={'font-bold text-palatinate flex items-center gap-3'}>
                                    <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                                                  fill="#2F3EDE"></path>
                                        </g>
                                    </svg>
                                    {t('Profile')}
                                </Link>
                                :
                                <Link to={'/login'}>
                                    <MainButton
                                        content="Login/Registration"
                                    />
                                </Link>
                        }
                    </div>
                </div>
                <button onClick={changeActiveBurger}
                        className={`burger hidden max_lg:block ${activeBurger ? 'active' : ''}`}>
                    <div></div>
                </button>
            </div>
        </header>
    );
};

export default Header;