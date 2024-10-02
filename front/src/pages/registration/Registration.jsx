import React, {useEffect, useState} from 'react';
import MainInput from "../../components/ui/MainInput.jsx";
import {Link, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE} from "../../assets/utils.js";
import Popup from "../../components/ui/Popup.jsx";
import {useTranslation} from "react-i18next";
import usePopup from "../../hooks/usePopup.js";
import Roller from "../../components/ui/roller/Roller.jsx";
import Loading from "../../components/ui/loading/Loading.jsx";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/user/userActions.js";
import Breadcrumbs from "../../components/ui/Breadcrumbs.jsx";
import {motion} from "framer-motion";

const Registration = () => {
    const links = [
        {label: 'Main', path: MAIN_ROUTE},
        {label: 'Registration '}
    ]
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    const registerLoading = useSelector(state => state.user.registerLoading)
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        password_repeat: ''
    });
    const [errorPassword, setErrorPassword] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const {t} = useTranslation();
    const {showPopup, showPopupWithTimeout} = usePopup();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await dispatch(register(formValues));
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    useEffect(() => {
        if (currentUser && currentUser.id) {
            navigate(ADMIN_ROUTE + '/' + PROFILE_ROUTE);
            setDisableButton(false);
        }
    }, [currentUser]);

    useEffect(() => {
        setDisableButton(false);
    }, [registerLoading]);

    const validatePasswords = (event) => {
        event.preventDefault();
        setDisableButton(true)
        if (formValues.password === formValues.password_repeat) {
            setErrorPassword(false)
            handleSubmit()
        } else {
            setErrorPassword(true)
            showPopupWithTimeout(600);
            setDisableButton(false)
        }
    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, display: "none"}}
            className={'flex items-center justify-start'}
        >
            <img className={'absolute left-0 top-0'} src="/img/register-bg.png" alt="register-bg"/>
            <img className={'absolute right-0 bottom-0'} src="/img/register-bg-2.png" alt="register-bg"/>
            <div className="relative container min-h-[100vh] flex items-center justify-between">
                <div
                    className={'flex items-center gap-[24px] absolute top-5 left-0 max_sm:flex-col max_sm:items-start max_xl:left-4 max_sm:left-10'}>
                    <Breadcrumbs
                        dark={true}
                        links={links}
                    />
                </div>
                <div
                    className={'w-5/12 mt-20 bg-white max_lg:mx-auto max_lg:w-8/12 max_sm:w-full p-12 max_sm:px-8 flex flex-col items-center max_md:w-9/12 shadow-feedback'}>
                    <h1 className={'font-bold text-[32px] mb-[40px] text-center max_sm:text-2xl'}>
                        {t('Registration')}
                    </h1>
                    <form onSubmit={validatePasswords} className={'w-full flex flex-col gap-[16px]'}>
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
                            className={`${errorPassword ? 'text-red-500' : ''}`}
                            label="Password"
                            type="password"
                            placeholder={'Come up with a password'}
                            required={true}
                            value={formValues.password}
                            onChange={handleChange}
                        />
                        <MainInput
                            id="password-input-repeat"
                            name="password_repeat"
                            className={`${errorPassword ? 'text-red-500' : ''}`}
                            label="Repeat the password"
                            type="password"
                            placeholder={'Repeat the password'}
                            required={true}
                            value={formValues.password_repeat}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className={'font-bold bg-palatinate text-white w-full py-3 rounded-lg mt-[16px]'}
                            disabled={disableButton}
                        >
                            {t('Register')}
                            {
                                disableButton && <Loading>
                                    .
                                </Loading>
                            }
                        </button>
                        <p className={'mt-[8px] text-center'}>
                            {t('Do you have an account? Log in')}
                            <Link to={LOGIN_ROUTE} className={'text-windows font-bold'}> {t('here')}</Link>
                        </p>
                    </form>
                </div>
                <img className={'max_lg:hidden'} src="/img/registration.png" alt="registration"/>
            </div>
            <Popup show={showPopup}>
                {t('Please fill in all the fields!')}
            </Popup>
        </motion.section>
    );
};

export default Registration;