import React from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";
import MainSubtitle from "../../ui/MainSubtitle.jsx";
import MainButton from "../../ui/MainButton.jsx";

const Prices = () => {
    const tariffs = [
        {
            name: 'Basic',
            price: 99,
            services: [
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
            ]
        },
        {
            name: 'Growth',
            price: 199,
            services: [
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
            ]
        },
        {
            name: 'Enterprice',
            price: 399,
            services: [
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
                'Онлайн консультация (1 час)',
            ]
        }
    ]
    const {t} = useTranslation();
    return (
        <section className={'py-[112px]'}>
            <div className="container flex items-center justify-between max_xl:flex-col max_xl:gap-10">
                <div className={'w-full max-w-[310px] max_xl:max-w-[600px] max_lg:max-w-full'}>
                    <p className={'text-lg mb-2'}>
                        {t('Prices')}
                    </p>
                    <MainTitle
                        title="Available tariff plans"
                    />
                    <MainSubtitle
                        content={'Vitae commodo consectetur volutpat aolme atolmerol euismod amet at arcu.'}
                    />
                </div>
                <div className={'w-8/12 flex gap-[32px] max_xl:w-full max_lg:flex-col'}>
                    {
                        tariffs.map((tariff, index) => (
                            <div key={index} className={'rounded-lg w-full flex flex-col justify-between min-h-[574px] max_lg:min-h-fit shadow-tariff px-[42px] py-[32px] first:bg-romance'}>
                                <div>
                                    <p className={'text-palatinate font-bold text-2xl mb-6'}>
                                        {tariff.name}
                                    </p>
                                    <h5 className={'text-6xl font-bold'}>
                                        ${tariff.price}
                                    </h5>
                                </div>
                                <ul className={'mt-10'}>
                                    {
                                        tariff.services.map((service, index) => (
                                            <li key={index} className={'flex items-center gap-[17px] text-[16px]'}>
                                            <svg className={'flex-shrink-0'} width="16" height="16" viewBox="0 0 17 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_321_1428)">
                                                        <path
                                                            d="M8.41156 16C12.83 16 16.4116 12.4184 16.4116 8C16.4116 3.5816 12.83 0 8.41156 0C3.99316 0 0.41156 3.5816 0.41156 8C0.41156 12.4184 3.99316 16 8.41156 16Z"
                                                            fill="#2F3EDE"/>
                                                        <path d="M4.79114 8.51728L6.85995 10.5861L12.032 5.41406"
                                                              stroke="white"
                                                              strokeWidth="2" strokeLinecap="round"
                                                              strokeLinejoin="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_321_1428">
                                                            <rect width="16" height="16" fill="white"
                                                                  transform="translate(0.41156)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                {service}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <MainButton
                                    className={'mt-[60px] !w-full !min-w-full'}
                                    content={'Buy'}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Prices;