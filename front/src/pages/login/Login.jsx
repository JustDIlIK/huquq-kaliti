import React, {useEffect, useRef, useState} from 'react';
import MainInput from "../../components/ui/MainInput.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE} from "../../assets/utils.js";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/user/userActions.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from "swiper/modules";
import 'swiper/css';
import './Login.css'
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const Login = () => {
    const sliderRef = useRef(null);
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [disableButton, setDisableButton] = useState(false);
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const currentUser = useSelector(state => state.user.currentUser)
    const slides = [
        '/img/login/1.png',
        '/img/login/2.png',
        '/img/login/3.png',
        '/img/login/4.png',
    ]

    useEffect(() => {
        if(currentUser && currentUser.id){
            navigate(ADMIN_ROUTE+'/'+PROFILE_ROUTE);
            setDisableButton(false);
        }
    }, [currentUser]);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formValues))
    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
            className={'h-full relative'}
        >
            <div className={'w-full'}>
                <Swiper
                    className={'h-full max-h-[100vh]'}
                    ref={sliderRef}
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                    }}
                    loop={true}
                >
                    {
                        slides.map((slide, index) => (
                            <SwiperSlide
                                className={'max-h-[100vh] h-full'}
                                key={index}
                            >
                                <img className={'w-full h-full min-h-[100vh] max-h-[100vh] object-cover'} src={slide} alt="img"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="container !flex items-center justify-center min-h-[100vh] absolute top-0 left-0 right-0 bottom-0 z-10">
                <div
                    className={'w-full flex items-center justify-center max_md:w-full max_md:container max_md:mx-auto max_md:min-h-[100vh]'}>
                    <div className={'w-5/12 max_lg:w-8/12 max_sm:w-full bg-white p-12 max_sm:px-8 rounded-lg shadow-feedback flex flex-col items-center max_md:w-9/12'}>
                        <h1 className={'font-bold text-[32px] mb-[40px] text-center max_sm:text-2xl'}>
                            {t('Welcome')}
                        </h1>
                        <form onSubmit={handleSubmit} className={'w-full flex flex-col gap-[16px]'}>
                            <MainInput
                                id="email-input"
                                name="email"
                                label="Email"
                                type="email"
                                required={true}
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <MainInput
                                id="password-input"
                                name="password"
                                label="Password"
                                type="password"
                                required={true}
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <button disabled={disableButton}
                                    className={'font-bold bg-palatinate text-white w-full py-3 rounded-lg mt-[16px]'}>
                                {t('Entrance')}
                            </button>
                            <p className={'mt-[8px] text-center'}>
                                {t('Don\'t you have an account? Register')} <Link to={REGISTER_ROUTE}
                                                                                  className={'text-windows font-bold'}>{t('here')}</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Login;