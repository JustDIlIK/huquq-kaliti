import React from 'react';
import MainSubtitle from "../ui/MainSubtitle.jsx";
import { useTranslation } from 'react-i18next';
import MainButton from "../ui/MainButton.jsx";
import { HashLink as Link } from 'react-router-hash-link';

const Intro = () => {
    const { t } = useTranslation();
    return (
        <section id={'main'} className="relative pt-[135px]">
            <div className="container flex items-center justify-between max_md:flex-col">
                <div className="w-7/12 max_md:order-2 max_md:w-full max_md:text-center">
                    <h1 className="font-bold leading-[130%] text-[48px] max_sm:text-[38px]" dangerouslySetInnerHTML={{__html: t('We will help you with legal issues')}}>
                    </h1>
                    <MainSubtitle
                        className="w-[290px] max_md:mx-auto"
                        content="Ejudicary - is an online platform providing legal and advocacy services."
                    />
                    <Link to={'/#contacts'}>
                        <MainButton
                            className="bg-palatinate text-white py-3 min-w-[220px] rounded-lg font-bold mt-[32px]"
                            content={'Feedback'}
                        />
                    </Link>
                </div>
                <div className="w-5/12 max_md:w-7/12 max_sm:w-9/12">
                    <img src="/img/intro-bg.webp" alt="intro-mask-bg"/>
                    <img className={'absolute top-0 right-0'} src="/img/intro-mask.webp" alt="intro-mask-bg"/>
                </div>
            </div>
        </section>
    );
};

export default Intro;