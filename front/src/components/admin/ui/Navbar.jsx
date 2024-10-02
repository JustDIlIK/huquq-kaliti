import React, {useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {CHAT_ROUTE, DASHBOARD_ROUTE, PROFILE_ROUTE, SUPPORT_ROUTE} from "../../../assets/utils.js";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/user/userActions.js";

const Navbar = () => {
    const navigate = useNavigate();
    const currentUser = useSelector(state => state.user.currentUser)
    const {t} = useTranslation();
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean); // Разделяем и фильтруем пустые сегменты
    const currentSegment = pathSegments[pathSegments.length - 1];
    const dispatch = useDispatch()

    const exit = async () => {
        try {
            await dispatch(logout())
        }
        catch(error) {
            console.error('Registration failed:', error);
        }
    }
    //
    // useEffect(() => {
    //     if(!currentUser) {
    //         navigate('/#main');
    //     }
    // }, [currentUser]);

    return (
        <div className={'bg-white shadow-navbar w-2/12 pt-[48px] relative min-h-full'}>
            <div className="font-bold pl-[40px]">
                <span className={'bg-palatinate p-1 rounded-[4px] text-white'}>Huquq</span> Kaliti
            </div>
            <nav className={'pt-[73px] px-[16px] flex flex-col justify-between h-full relative'}>
                <ul className={'flex flex-col'}>
                    <li className={'font-medium'}>
                        <Link
                            to={DASHBOARD_ROUTE}
                            className={`flex items-center gap-[8px] py-[12px] px-[16px] hover:bg-palatinate hover:bg-opacity-10 rounded-lg hover:text-palatinate ${currentSegment === DASHBOARD_ROUTE ? 'bg-palatinate bg-opacity-10 text-palatinate' : ''}`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 20.9998V13.5998C9 13.0397 9 12.7597 9.10899 12.5458C9.20487 12.3576 9.35785 12.2047 9.54601 12.1088C9.75992 11.9998 10.0399 11.9998 10.6 11.9998H13.4C13.9601 11.9998 14.2401 11.9998 14.454 12.1088C14.6422 12.2047 14.7951 12.3576 14.891 12.5458C15 12.7597 15 13.0397 15 13.5998V20.9998M11.0177 2.76376L4.23539 8.03888C3.78202 8.39151 3.55534 8.56782 3.39203 8.78862C3.24737 8.9842 3.1396 9.20454 3.07403 9.43881C3 9.70328 3 9.99046 3 10.5649V17.7998C3 18.9199 3 19.4799 3.21799 19.9078C3.40973 20.2841 3.71569 20.5901 4.09202 20.7818C4.51984 20.9998 5.07989 20.9998 6.2 20.9998H17.8C18.9201 20.9998 19.4802 20.9998 19.908 20.7818C20.2843 20.5901 20.5903 20.2841 20.782 19.9078C21 19.4799 21 18.9199 21 17.7998V10.5649C21 9.99046 21 9.70328 20.926 9.43881C20.8604 9.20454 20.7526 8.9842 20.608 8.78862C20.4447 8.56782 20.218 8.39151 19.7646 8.03889L12.9823 2.76376C12.631 2.49051 12.4553 2.35388 12.2613 2.30136C12.0902 2.25502 11.9098 2.25502 11.7387 2.30136C11.5447 2.35388 11.369 2.49051 11.0177 2.76376Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t('Main')}
                        </Link>
                    </li>
                    <li className={'font-medium'}>
                        <Link to={PROFILE_ROUTE}
                              className={`flex items-center gap-[8px] py-[12px] px-[16px] hover:bg-palatinate hover:bg-opacity-10 rounded-lg hover:text-palatinate ${currentSegment === PROFILE_ROUTE ? 'bg-palatinate bg-opacity-10 text-palatinate' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 15C8.8299 15 6.01077 16.5306 4.21597 18.906C3.82968 19.4172 3.63653 19.6728 3.64285 20.0183C3.64773 20.2852 3.81533 20.6219 4.02534 20.7867C4.29716 21 4.67384 21 5.4272 21H18.5727C19.3261 21 19.7028 21 19.9746 20.7867C20.1846 20.6219 20.3522 20.2852 20.3571 20.0183C20.3634 19.6728 20.1703 19.4172 19.784 18.906C17.9892 16.5306 15.17 15 12 15Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3C9.51469 3 7.49997 5.01472 7.49997 7.5C7.49997 9.98528 9.51469 12 12 12Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t('Profile')}
                        </Link>
                    </li>
                    <li className={'font-medium'}>
                        <Link to={CHAT_ROUTE}
                              className={`flex items-center gap-[8px] py-[12px] px-[16px] hover:bg-palatinate hover:bg-opacity-10 rounded-lg hover:text-palatinate ${currentSegment === CHAT_ROUTE ? 'bg-palatinate bg-opacity-10 text-palatinate' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t('Chat with a lawyer')}
                        </Link>
                    </li>
                    <li className={'font-medium'}>
                        <Link to={SUPPORT_ROUTE}
                              className={`flex items-center gap-[8px] py-[12px] px-[16px] hover:bg-palatinate hover:bg-opacity-10 rounded-lg hover:text-palatinate ${currentSegment === SUPPORT_ROUTE ? 'bg-palatinate bg-opacity-10 text-palatinate' : ''}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 10.5V7M12 14H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z"
                                    stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t('Complain')}
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={exit}
                    className={`mb-10 font-medium flex items-center gap-[8px] py-[12px] px-[16px] exit_class hover:text-coral rounded-lg transition-all ease-in-out duration-300`}>
                    <svg width="24" height="24" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path className={'transition-all ease-in-out duration-300'} d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5" stroke="black" strokeWidth="1.6"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t('Exit')}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;