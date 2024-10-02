import React, {useEffect, useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import AccordionItem from "../ui/AccordionItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loadQuestions} from "../../store/questions/questionsActions.js";
import {useTranslation} from "react-i18next";

const UsuallyQuestions = ({specialist, ...props}) => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.questions);

    useEffect(() => {
        dispatch(loadQuestions({page: 1, limit: 1000}))
    }, []);

    return (
        <section className="relative py-[112px] bg-romance">
            <img className={'absolute top-10 left-0'} src="/img/usually-questions-1.webp" alt="usually-1"/>
            <img className={'absolute bottom-10 right-0 scale-x-[-1]'} src="/img/usually-questions-2.webp" alt="usually-2"/>
            <div className="container">
                <div className={'flex items-center justify-between'}>
                    <MainTitle
                        className="mb-[28px] max-w-[399px] break-words"
                        title="Answers to frequently asked questions"
                    />
                    <svg width="79" height="71" viewBox="0 0 79 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M68.8955 55.1571C69.04 60.3157 69.1841 65.4749 69.3281 70.6335C65.2017 68.0895 61.0759 65.5455 56.9495 63.002C51.6216 65.2712 45.5912 66.5508 39.2039 66.5508C17.5543 66.5508 0.00390625 51.8534 0.00390625 33.7231C0.00390625 15.5929 17.5543 0.895508 39.2039 0.895508C60.8536 0.895508 78.4039 15.5929 78.4039 33.7231C78.4039 41.9151 74.8211 49.4058 68.8955 55.1571Z"
                            fill="#2F3EDE"/>
                        <path
                            d="M44.2478 14.016C43.0804 13.6125 41.89 13.3795 40.6705 13.2585C37.1628 12.8886 33.555 13.5527 30.6168 15.5895C28.6338 16.9501 26.9689 18.9497 25.9573 21.2099C25.0062 23.3352 26.5743 25.734 28.9027 25.734C30.231 25.734 31.4086 24.9127 31.9044 23.6803C32.5012 22.1966 33.7129 21.164 34.9764 20.4658C36.0321 19.8811 37.2189 19.5919 38.4295 19.5216C39.0761 19.4844 39.7655 19.5075 40.4221 19.5799C41.8013 19.7128 43.227 20.1807 44.3131 21.0046C45.6578 22.0023 46.5239 23.5403 46.6486 25.206C46.6935 25.7472 46.6667 26.3124 46.5574 26.8375C46.2611 28.343 45.0718 29.4253 43.8301 30.3151C42.4704 31.2906 40.9906 32.1273 39.6086 33.1615C38.4457 34.0322 37.359 35.0189 36.5462 36.2536C35.8744 37.262 35.4275 38.4641 35.2168 39.6417C35.2018 39.7231 35.1877 39.7864 35.1746 39.8482C34.791 41.6462 36.1677 43.339 38.0061 43.339C39.4339 43.339 40.6351 42.2981 40.8268 40.8979C40.894 40.4064 40.9933 40.1204 41.1414 39.8136C41.3763 39.3356 41.7453 38.9484 42.1526 38.5825C42.4446 38.3223 42.7397 38.0953 43.0638 37.8602C44.3946 36.9092 45.8661 36.1166 47.2474 35.1481C50.6143 32.8624 52.7118 29.8363 52.7363 25.6403C52.7877 20.2653 49.2868 15.7098 44.2478 14.016Z"
                            fill="white"/>
                        <path
                            d="M37.8301 54.2835C39.9594 54.2835 41.6855 52.5573 41.6855 50.428C41.6855 48.2987 39.9594 46.5725 37.8301 46.5725C35.7008 46.5725 33.9746 48.2987 33.9746 50.428C33.9746 52.5573 35.7008 54.2835 37.8301 54.2835Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className={'flex flex-col gap-5'}>
                    {
                        questions && questions.data && questions.data.map((question, index) => (
                            <AccordionItem
                                className="!bg-white !py-[32px] !px-[40px] max_lg:!py-[22px] max_lg:!px-[10px]"
                                bold={true}
                                full={false}
                                key={index}
                                question={question.question[i18n.language]}
                                answer={question.answer[i18n.language]}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default UsuallyQuestions;