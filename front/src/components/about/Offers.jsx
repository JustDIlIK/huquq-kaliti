import React from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const Offers = () => {
    const {t} = useTranslation();
    return (
        <section>
            <div className="container flex items-center justify-between max_lg:flex-col max_lg:gap-10">
                <div className={'w-4/12 max_lg:w-10/12 max_md:w-full'}>
                    <MainTitle
                        title={'What do we offer?'}
                    />
                    <div className={'bg-romance mt-6 rounded-lg p-6'}>
                        <p>
                            {t('On our platform, you will find qualified lawyers who are ready to help you with a variety of issues — from family and real estate consultations to comprehensive business support.')}
                            <br/><br/>
                            {t('We are proud to provide our users with the opportunity to choose from a wide range of professionals who meet their needs and budget.')}
                        </p>
                    </div>
                </div>
                <div className={'relative'}>
                    <img className={'rounded-xl relative z-10'} src="/img/offers.png" alt="offers"/>
                    <img className={'absolute bottom-[-150px] -right-[150px]'} src="/img/offers-bg.png" alt="offers-bg"/>
                </div>
            </div>
        </section>
    );
};

export default Offers;