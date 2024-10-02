import React, {useEffect, useState} from 'react';
import MainInput from "../ui/MainInput.jsx";
import MainButton from "../ui/MainButton.jsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changePassword, login, updateUser} from "../../store/user/userActions.js";
import {
    ADMIN_SERVICES_ROUTE, ADMIN_USUALLY_QUESTION_ROUTE,
    BECOME_LAWYER_ROUTE, COMPLAINTS_ROUTE, DOCUMENT_CONSTRUCTOR_ROUTE,
    DOMAIN, MAIN_ROUTE,
    PERMISSIONS_ROUTE,
    TEMPLATE_CATEGORIES_ROUTE, USERS_ROUTE
} from "../../assets/utils.js";
import {Link} from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs.jsx";

const Profile = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        lastname: '',
        password: '',
        patronymic: ''
    })
    const [url, setUrl] = useState('')
    const links = [
        { label: 'Main', path: MAIN_ROUTE },
        { label: 'Profile '}
    ]
    const adminRoutes = [
        {
            name: 'Template Categories',
            svg: '<svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M23.1667 12.5013V7.56797C23.1667 5.32776 23.1667 4.20765 22.7307 3.35201C22.3472 2.59936 21.7353 1.98744 20.9827 1.60394C20.1269 1.16797 19.0069 1.16797 16.7667 1.16797H8.23333C5.99312 1.16797 4.87301 1.16797 4.01737 1.60394C3.26472 1.98744 2.6528 2.59936 2.26931 3.35201C1.83333 4.20765 1.83333 5.32776 1.83333 7.56797V21.4346C1.83333 23.6749 1.83333 24.7949 2.26931 25.6506C2.6528 26.4033 3.26472 27.0152 4.01737 27.3986C4.87301 27.8346 5.99312 27.8346 8.23333 27.8346H12.5M15.1667 13.168H7.16667M9.83333 18.5013H7.16667M17.8333 7.83464H7.16667M20.5 26.5013V18.5013M16.5 22.5013H24.5" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: TEMPLATE_CATEGORIES_ROUTE
        },
        {
            name: 'Permissions for users',
            svg: '<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M19.8333 21.5L22.5 24.1667L27.8333 18.8333M14.5 17.5H9.16667C6.68164 17.5 5.43914 17.5 4.45903 17.906C3.15221 18.4473 2.11395 19.4856 1.57265 20.7924C1.16667 21.7725 1.16667 23.0149 1.16667 25.5M19.1667 1.88768C21.1212 2.67887 22.5 4.59508 22.5 6.83333C22.5 9.07159 21.1212 10.9879 19.1667 11.7789M16.5 6.83333C16.5 9.77885 14.1121 12.1667 11.1667 12.1667C8.22115 12.1667 5.83334 9.77885 5.83334 6.83333C5.83334 3.88781 8.22115 1.5 11.1667 1.5C14.1121 1.5 16.5 3.88781 16.5 6.83333Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: PERMISSIONS_ROUTE
        },
        {
            name: 'Services',
            svg: '<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M9.16666 25.5V6.83333C9.16666 5.59337 9.16666 4.97339 9.30295 4.46472C9.67282 3.08436 10.751 2.00616 12.1313 1.63629C12.64 1.5 13.26 1.5 14.5 1.5C15.74 1.5 16.36 1.5 16.8687 1.63629C18.2489 2.00616 19.3272 3.08436 19.6971 4.46472C19.8333 4.97339 19.8333 5.59337 19.8333 6.83333V25.5M5.43332 25.5H23.5667C25.0601 25.5 25.8069 25.5 26.3773 25.2093C26.8791 24.9537 27.2871 24.5457 27.5427 24.044C27.8333 23.4736 27.8333 22.7268 27.8333 21.2333V11.1C27.8333 9.60652 27.8333 8.85979 27.5427 8.28936C27.2871 7.78759 26.8791 7.37964 26.3773 7.12399C25.8069 6.83333 25.0601 6.83333 23.5667 6.83333H5.43332C3.93984 6.83333 3.19311 6.83333 2.62268 7.12399C2.12091 7.37964 1.71296 7.78759 1.45731 8.28936C1.16666 8.85979 1.16666 9.60652 1.16666 11.1V21.2333C1.16666 22.7268 1.16666 23.4736 1.45731 24.044C1.71296 24.5457 2.12091 24.9537 2.62268 25.2093C3.19311 25.5 3.93986 25.5 5.43332 25.5Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: ADMIN_SERVICES_ROUTE
        },
        {
            name: 'Permissions ("To become a lawyer")',
            svg: '<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M19.8334 21.5L23.8334 17.5M23.8334 17.5L27.8334 21.5M23.8334 17.5V25.5M14.5 18.1667H8.50002C6.63927 18.1667 5.70889 18.1667 4.95183 18.3963C3.24729 18.9133 1.91341 20.2473 1.39634 21.9519C1.16669 22.7089 1.16669 23.6392 1.16669 25.5M17.8334 7.5C17.8334 10.8137 15.1471 13.5 11.8334 13.5C8.51965 13.5 5.83335 10.8137 5.83335 7.5C5.83335 4.18629 8.51965 1.5 11.8334 1.5C15.1471 1.5 17.8334 4.18629 17.8334 7.5Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: BECOME_LAWYER_ROUTE
        },
        {
            name: 'Complaints',
            svg: '<svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M14.572 11.8346V7.16797M14.572 16.5013H14.5853M14.572 23.8346C20.8312 23.8346 25.9053 18.7605 25.9053 12.5013C25.9053 6.24208 20.8312 1.16797 14.572 1.16797C8.3128 1.16797 3.23869 6.24208 3.23869 12.5013C3.23869 13.768 3.44649 14.9861 3.82987 16.1234C3.97412 16.5514 4.04625 16.7654 4.05927 16.9298C4.07212 17.0922 4.0624 17.2061 4.02224 17.3638C3.98156 17.5237 3.89176 17.69 3.71216 18.0224L1.53128 22.0592C1.2202 22.6349 1.06465 22.9228 1.09947 23.145C1.12979 23.3385 1.24369 23.5089 1.41093 23.6109C1.60293 23.7281 1.92843 23.6944 2.57943 23.6272L9.40745 22.9213C9.61423 22.9 9.71761 22.8893 9.81185 22.8929C9.90453 22.8964 9.96996 22.9052 10.0603 22.926C10.1522 22.9472 10.2678 22.9917 10.4989 23.0806C11.7629 23.5677 13.1363 23.8346 14.572 23.8346Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: COMPLAINTS_ROUTE
        },
        {
            name: 'List of users',
            svg: '<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M15.1666 1.52734V7.03473C15.1666 7.78146 15.1666 8.15484 15.312 8.44005C15.4398 8.69093 15.6437 8.8949 15.8946 9.02274C16.1798 9.16806 16.5532 9.16806 17.3 9.16806H22.8073M15.1666 21.168H7.16665M17.8333 15.8346H7.16665M23.1666 11.8189V21.4346C23.1666 23.6749 23.1666 24.7949 22.7306 25.6506C22.3472 26.4033 21.7353 27.0152 20.9826 27.3986C20.1269 27.8346 19.0069 27.8346 16.7666 27.8346H8.23331C5.9931 27.8346 4.87299 27.8346 4.01735 27.3986C3.2647 27.0152 2.65278 26.4033 2.26929 25.6506C1.83331 24.7949 1.83331 23.6749 1.83331 21.4346V7.56797C1.83331 5.32776 1.83331 4.20765 2.26929 3.35201C2.65278 2.59936 3.2647 1.98744 4.01735 1.60394C4.87299 1.16797 5.9931 1.16797 8.23331 1.16797H12.5157C13.494 1.16797 13.9832 1.16797 14.4436 1.27849C14.8517 1.37648 15.2418 1.53809 15.5998 1.75741C16.0034 2.00477 16.3493 2.35068 17.0412 3.04249L21.2921 7.29345C21.984 7.98526 22.3298 8.33117 22.5772 8.73483C22.7965 9.09271 22.9581 9.4829 23.0561 9.89104C23.1666 10.3514 23.1666 10.8406 23.1666 11.8189Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: USERS_ROUTE
        },
        {
            name: 'Часто задаваемые вопросы',
            svg: '<svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M15.1666 1.52734V7.03473C15.1666 7.78146 15.1666 8.15484 15.312 8.44005C15.4398 8.69093 15.6437 8.8949 15.8946 9.02274C16.1798 9.16806 16.5532 9.16806 17.3 9.16806H22.8073M15.1666 21.168H7.16665M17.8333 15.8346H7.16665M23.1666 11.8189V21.4346C23.1666 23.6749 23.1666 24.7949 22.7306 25.6506C22.3472 26.4033 21.7353 27.0152 20.9826 27.3986C20.1269 27.8346 19.0069 27.8346 16.7666 27.8346H8.23331C5.9931 27.8346 4.87299 27.8346 4.01735 27.3986C3.2647 27.0152 2.65278 26.4033 2.26929 25.6506C1.83331 24.7949 1.83331 23.6749 1.83331 21.4346V7.56797C1.83331 5.32776 1.83331 4.20765 2.26929 3.35201C2.65278 2.59936 3.2647 1.98744 4.01735 1.60394C4.87299 1.16797 5.9931 1.16797 8.23331 1.16797H12.5157C13.494 1.16797 13.9832 1.16797 14.4436 1.27849C14.8517 1.37648 15.2418 1.53809 15.5998 1.75741C16.0034 2.00477 16.3493 2.35068 17.0412 3.04249L21.2921 7.29345C21.984 7.98526 22.3298 8.33117 22.5772 8.73483C22.7965 9.09271 22.9581 9.4829 23.0561 9.89104C23.1666 10.3514 23.1666 10.8406 23.1666 11.8189Z" stroke="#2F3EDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                '</svg>',
            link: ADMIN_USUALLY_QUESTION_ROUTE
        }
    ]

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (currentUser) {
            setFormValues({
                email: currentUser.email,
                name: currentUser.name || '',
                lastname: currentUser.lastname || '',
                patronymic: currentUser.patronymic || '',
                password: '',
                avatar: currentUser.avatar
            })
        }
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValues.password) {
            let fd = new FormData()
            fd.append('new_password', formValues.password)
            dispatch(changePassword(fd))
            setUpdateUser()
        } else {
            setUpdateUser()
        }
    }

    const setUpdateUser = () => {
        let form = new FormData();
        const fields = ['name', 'lastname', 'email', 'patronymic'];

        if (url && formValues.avatar) {
            form.append('avatar', formValues.avatar);
        }

        fields.forEach(field => {
            if (formValues[field]) {
                form.append(field, formValues[field]);
            }
        });
        dispatch(updateUser(form))
    }

    const onFileChange = (e) => {
        const file = e.target.files[0];
        setUrl(URL.createObjectURL(file))
    }

    const setAvatar = (e) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            avatar: e.target.files[0]
        }));
    }

    return (
        <section>
            <div className="container !ml-0">
                <Breadcrumbs
                    links={links}
                />
                <div className={'mt-[120px] flex items-center gap-[32px] bg-white px-[24px] py-[16px] rounded-lg relative'}>
                    <div className={'pt-[50px]'}>
                        <div className={'absolute bottom-[50px] overflow-hidden border rounded-full '}>
                            {
                                currentUser.role.system_name === 'admin' &&
                                <div className={'w-[134px] h-[134px] bg-white flex items-center justify-center'}>
                                    <img className={'overflow-hidden w-[64px] h-[64px]'}
                                         src="/img/user-logo.svg" alt="admin-logo"/>
                                </div>
                            }
                            {
                                currentUser.role.system_name !== 'admin' &&
                                <label
                                    className="image overflow-hidden w-[134px] h-[134px]"
                                    htmlFor="img-input">
                                    <img className={`block w-full h-full bg-white object-cover`}
                                         src={url || DOMAIN + currentUser.photo} alt="img"/>
                                </label>
                            }
                        </div>
                        {
                            currentUser.role.system_name === 'admin' &&
                            <div className={'w-[130px]'}></div>
                        }
                        {
                            currentUser.role.system_name !== 'admin' &&
                            <label htmlFor="img-input"
                                   className={'font-medium cursor-pointer flex items-center gap-[8px]'}>
                                {t('Edit a photo')}
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 17.5H17.5M10 2.5V14.1667M10 14.1667L15.8333 8.33333M10 14.1667L4.16667 8.33333"
                                        stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                                <input
                                    id="img-input"
                                    className={'hidden'}
                                    type="file"
                                    onChange={onFileChange}
                                    onInput={setAvatar}
                                />
                            </label>
                        }
                    </div>
                    <div className={'flex items-center gap-3.5'}>
                        <p className={'font-medium text-3xl'}>
                            {
                                currentUser.name ? currentUser.name + ' ' + (currentUser.lastname || '') : currentUser.role.names[i18n.language]
                            }
                        </p>
                        {
                            currentUser.role.system_name === 'admin' &&
                            <div
                                className={'bg-romance w-[36px] h-[36px] rounded-[3px] flex items-center justify-center'}>
                                <svg width="17" height="23" viewBox="0 0 17 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.19001 14.2219L3.22333 21.5L7.81173 18.747C7.96143 18.6572 8.03623 18.6123 8.11613 18.5947C8.18673 18.5792 8.25993 18.5792 8.33053 18.5947C8.41043 18.6123 8.48523 18.6572 8.63493 18.747L13.2233 21.5L12.2576 14.2212M15.2233 8.5C15.2233 12.366 12.0893 15.5 8.22333 15.5C4.35734 15.5 1.22333 12.366 1.22333 8.5C1.22333 4.63401 4.35734 1.5 8.22333 1.5C12.0893 1.5 15.2233 4.63401 15.2233 8.5Z"
                                        stroke="#2F3EDE" strokeWidth="1.6" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>

                            </div>
                        }
                    </div>
                </div>
                {  currentUser && currentUser.role.system_name === 'admin' &&
                    <div className={'rounded-lg bg-white px-6 py-8 grid grid-cols-6 gap-4 mt-[15px]'}>
                        {
                            adminRoutes.map((item, index) => (
                                <Link to={item.link} key={index} className={'admin__route cursor-pointer'}>
                                    <div
                                        className={'admin__route-item relative transition-all ease-in-out duration-300 w-full rounded-lg bg-romance p-8 flex items-center flex-col justify-center'}>
                                        <div
                                            className={'w-[72px] h-[72px] bg-palatinate bg-opacity-10 flex items-center justify-center rounded-full'}>
                                            <div dangerouslySetInnerHTML={{__html: item.svg}}>

                                            </div>
                                        </div>
                                        <div
                                            className={'route__item-button bg-white w-[18px] h-[18px] transition-all ease-in-out duration-300 flex items-center justify-center rounded-[6px] absolute top-2.5 right-2.5'}>
                                            <svg width="9" height="9" viewBox="0 0 12 12" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path className={'transition-all ease-in-out duration-300'}
                                                      d="M1.5 10.5L10.5 1.5M10.5 1.5H4.5M10.5 1.5V7.5" stroke="#6562F9"
                                                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className={'text-center text-navy font-medium mt-4'}>{t(item.name)}</p>
                                </Link>
                            ))
                        }
                    </div>
                }
                {
                    currentUser.role.system_name !== 'admin' &&
                    <form onSubmit={handleSubmit} className={'rounded-lg bg-white p-[24px] mt-[15px]'}>
                        <div className={'border-b'}>
                            <p className={'text-palatinate text-sm font-medium pb-2 border-b-[3px] border-palatinate w-fit'}>
                                {t('Change the profile')}
                            </p>
                        </div>
                        <div className={'mt-[32px] flex gap-[41px]'}>
                            <MainInput
                                className="w-4/12"
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <MainInput
                                className="w-4/12"
                                id="surname-input"
                                name="lastname"
                                label="Surname"
                                type="text"
                                value={formValues.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'mt-[32px] flex gap-[41px]'}>
                            <MainInput
                                className="w-4/12"
                                id="patronymic-input"
                                name="patronymic"
                                label="Patronymic"
                                type="text"
                                value={formValues.patronymic}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'mt-[22px] flex gap-[41px]'}>
                            <MainInput
                                className="w-4/12"
                                id="email-input"
                                name="email"
                                label="Mail"
                                type="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <MainInput
                                className="w-4/12"
                                id="password-input"
                                name="password"
                                label="Password"
                                type="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <MainButton
                            className={'mt-[133px] flex items-center justify-center !ml-auto'}
                            content={'Save'}
                        />
                    </form>
                }
            </div>
        </section>
    );
};

export default Profile;