import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const Questions = () => {
    const {t} = useTranslation();
    const [questionsList, setQuestionsList] = useState([
        {
            id: 1,
            title: 'Taxes',
            description: 'Tax lawyers advise clients on tax issues, help them understand the laws and solve tax problems.',
            img: '/img/questions/1.webp'
        },
        {
            id: 2,
            title: 'Law',
            description: 'Lawyers provide legal assistance, advise, prepare documents and represent clients in court and government agencies.',
            img: '/img/questions/2.webp'
        },
        {
            id: 3,
            title: 'Risk consultation',
            description: 'Legal advice on risks is an assistance in assessing and reducing legal threats to the client. Lawyers analyze risks and propose strategies for their prevention and control.',
            img: '/img/questions/3.webp'
        }
    ]);
    return (
        <section id={'faq'} className="py-[112px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <MainTitle
                        title="Request for questions"
                    />
                    {/*<button className="flex items-center font-medium gap-[8px]">*/}
                    {/*    {t('Watch all')}*/}
                    {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="black" strokeWidth="1.4"*/}
                    {/*              strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*    </svg>*/}
                    {/*</button>*/}
                </div>
                <div className="mt-[40px] grid grid-cols-3 gap-[30px] max_lg:flex max_lg:flex-col">
                    {
                        questionsList.map((question, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden bg-romance rounded-lg py-[33px] px-[37px]"
                            >
                                <img className={'absolute max_lg:w-full top-0 left-0 right-0 bottom-0 object-cover min-h-[250px] h-full'} src={question.img} alt="question"/>
                                <div className="relative z-10 flex items-center justify-between pb-[22px] border-b">
                                    <p className="font-bold text-xl">
                                        {t(question.title)}
                                    </p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="black" strokeWidth="1.4"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="relative z-10 pt-[22px]">
                                    {t(question.description)}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Questions;