import React from 'react';
import {useTranslation} from "react-i18next";

const SectionIntro = ({content, src}) => {
    const {t} = useTranslation();
    return (
        <section id={'intro'} className={'h-[363px] mt-[90px] bg-romance relative'}>
            <img className={'absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover'} src={src} alt="section-bg"/>
            <div className="container h-full">
                <h3 className={'relative z-10 text-5xl flex items-center justify-center h-full font-bold text-white'}>
                    {t(content)}
                </h3>
            </div>
        </section>
    );
};

export default SectionIntro;