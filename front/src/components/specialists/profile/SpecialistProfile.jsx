import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import MainButton from "../../ui/MainButton.jsx";
import {Rating} from "@mui/material";
import WhiteButton from "../../ui/WhiteButton.jsx";

const SpecialistProfile = () => {
    const {t} = useTranslation();
    const { id } = useParams();
    const location = useLocation();
    const links = [
        {
            name: 'Reviews',
            path: `/specialist/${id}`
        },
    ]
    return (
        <section id={'profile'} className={'pt-[94px] pb-[37px]'}>
            <div className={'bg-romance w-full h-[417px]'}>
                <img className={'w-full h-full object-cover'} src="/img/profile-bg.png" alt="profile-bg"/>
            </div>
            <div className="container">
                <div className={'flex items-center justify-between max_md:flex-col max_md:items-start max_sm:items-center'}>
                    <div className={'flex items-center gap-3'}>
                        <div className={'w-fit -translate-y-[80px]'}>
                            <div className={'relative w-fit mx-auto'}>
                                <img className={'w-[158px] h-[158px]'} src="/img/logo.png" alt="logo"/>
                                <div
                                    className={'bg-palatinate px-2 py-1 text-white w-fit rounded-lg font-bold absolute -bottom-1 left-[30%]'}>
                                    Юрист
                                </div>
                            </div>
                            <div className={'mt-10 hidden max_sm:block max_sm:text-center'}>
                                <h3 className={'font-bold text-3xl mb-[8px]'}>
                                    Каримов Алишер
                                </h3>
                                <p className={'italic'}>
                                    Трудовое право
                                </p>
                            </div>
                            <p className={'mt-[14px] italic text-center text-[16px]'}>
                                Стаж: 15 лет
                            </p>
                            <WhiteButton
                                className={'mt-[16px]'}
                                content={'Заказать консультацию'}
                            />
                        </div>
                        <div className={'-translate-y-[70px] max_sm:hidden'}>
                            <h3 className={'font-bold text-3xl mb-[8px]'}>
                                Каримов Алишер
                            </h3>
                            <p className={'italic'}>
                                Трудовое право
                            </p>
                        </div>
                    </div>
                    <div className={'-translate-y-[70px] flex flex-col items-end gap-4 max_md:items-start max_sm:items-center'}>
                        <MainButton
                            content={'Написать юристу'}
                        />
                        <div className={'flex items-center gap-2'}>
                            <Rating
                                name="simple-controlled"
                                readOnly
                                value={4.5}
                                defaultValue={4.5}
                                precision={0.5}
                            />
                            <p>
                                4.5
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialistProfile;