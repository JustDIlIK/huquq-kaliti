import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";

const News = () => {
    const {t} = useTranslation();
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Акция для новых пользователей!',
            description: 'При регистрации на нашем сайте вы получите скидку 10% на услуги адвоката.',
            date: '21.12.2022',
            img: '/img/news/1.webp'
        },
        {
            id: 2,
            title: 'Акция для новых пользователей!',
            description: 'При регистрации на нашем сайте вы получите скидку 10% на услуги адвоката.',
            date: '21.12.2022',
            img: '/img/news/2.webp'
        },
        {
            id: 3,
            title: 'Акция для новых пользователей!',
            description: 'При регистрации на нашем сайте вы получите скидку 10% на услуги адвоката.',
            date: '21.12.2022',
            img: '/img/news/3.webp'
        },
        {
            id: 4,
            title: 'Акция для новых пользователей!',
            description: 'При регистрации на нашем сайте вы получите скидку 10% на услуги адвоката.',
            date: '21.12.2022',
            img: '/img/news/4.webp'
        }
    ]);
    return (
        <section id={'news'} className={'pb-[112px]'}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <MainTitle
                        title="News"
                    />
                    {/*<button className="flex items-center gap-[8px]">*/}
                    {/*    {t('Watch all')}*/}
                    {/*    <div className="w-[21px] h-[21px] bg-romance rounded-sm"></div>*/}
                    {/*</button>*/}
                </div>
                <div className="mt-[40px] grid grid-cols-4 max_lg:grid-cols-2 max_sm:grid-cols-1 gap-[30px]">
                    {
                        news.map((item, index) => (
                            <div className={'flex flex-col gap-[24px]'} key={index}>
                                <div className={'relative bg-romance w-full h-[272px] rounded-lg overflow-hidden'}>
                                    <img className={'h-full w-full object-cover'} src={item.img} alt="img"/>
                                </div>
                                <h3 className={'font-bold text-lg'}>
                                    {item.title}
                                </h3>
                                <p className={'break-words text-sm'}>
                                    {item.description}
                                </p>
                                <p>
                                    {item.date}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default News;