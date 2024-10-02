import React from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const OurMission = () => {
    const {t} = useTranslation();
    return (
        <section className={'relative py-[112px]'}>
            <img className={'absolute left-0 top-0'} src="/img/mission-bg.png" alt="mission-bg"/>
            <img className={'absolute right-0 top-[112px]'} src="/img/mission-bg-2.png" alt="mission-bg"/>
            <div className="container flex items-center justify-between max_lg:flex-col">
                <div className={'w-4/12 max_lg:w-6/12 max_md:w-10/12 max_lit:w-full'}>
                    <MainTitle
                        title={'Our mission'}
                    />
                    <div className={'bg-romance mt-6 rounded-lg p-6'}>
                        <p>
                            {t('We have created a unique platform that brings together professional lawyers and clients in need of legal assistance.')} <br/><br/> {t('Our mission is to make legal services accessible, transparent and effective for everyone.')}
                        </p>
                    </div>
                </div>
                <img src="/img/mission.png" alt="mission"/>
            </div>
        </section>
    );
};

export default OurMission;