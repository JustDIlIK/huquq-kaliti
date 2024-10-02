import React from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const Intro = ({service}) => {
    const {t, i18n} = useTranslation();

    return (
        <section id={'intro'} className={'mt-[90px] pt-[80px] max_lg:pt-[40px] pb-[112px]'}>
            <div className="container">
                <MainTitle
                    className={'mb-10'}
                    title={`Услуга "${service.names[i18n.language]}"`}
                />
                <p>
                    {service.descriptions[i18n.language]}
                </p>
            </div>
        </section>
    );
};

export default Intro;