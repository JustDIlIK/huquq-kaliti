import React, {useRef, useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from "swiper/modules";
import {useTranslation} from "react-i18next";
import SpecialistCard from "../specialists/ui/SpecialistCard.jsx";
import { HashLink as Link } from 'react-router-hash-link';

const Specialists = () => {
    const {t} = useTranslation();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const sliderRef = useRef(null);
    const [specialists, setSpecialists] = useState([
        {
            id: 1,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 2,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/2.png'
        },
        {
            id: 3,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/3.png'
        },
        {
            id: 4,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/4.png'
        },
        {
            id: 5,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/5.png'
        },
        {
            id: 6,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 7,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 8,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        }
    ])

    function handlePrev () {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }
    function handleNext () {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }
    function handleSwiper (swiper) {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }


    return (
        <section id={'team'} className="relative pt-[80px]">
            <div className="container">
                <div className="flex items-center justify-between max_xl:flex-col max_xl:items-start max_xl:gap-5">
                    <MainTitle
                        title="Specialists for your tasks"
                    />
                    <Link to={'/specialists/#specialists'} className="flex items-center gap-[8px] font-medium max_xl:ml-auto">
                        {t('Watch all')}
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12.5H20M20 12.5L14 6.5M20 12.5L14 18.5" stroke="black" strokeWidth="1.4"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className={'mt-[40px] max_big:!px-10 max_sm:!p-5'}>
                    <div className={'relative'}>
                        <button
                            onClick={handlePrev}
                            className={`absolute z-10 -left-20 max_big:-left-10 translate-x-[50%] translate-y-[240%] max_sm:translate-y-[550%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isBeginning ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
                            disabled={isBeginning}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12L4 12M4 12L10 18M4 12L10 6" stroke="black" strokeWidth="1.4"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className={`absolute z-10 -right-20 max_big:-right-10 translate-x-[-50%] translate-y-[230%] max_sm:translate-y-[550%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isEnd ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
                            disabled={isEnd}
                        >
                            <svg className={'rotate-[180deg]'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12L4 12M4 12L10 18M4 12L10 6" stroke="black" strokeWidth="1.4"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <Swiper
                        className={'!p-2'}
                        ref={sliderRef}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper)=> handleSwiper(swiper)}
                        modules={[Grid]}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                grid:{
                                    rows: 2,
                                    fill: "row",
                                },
                                spaceBetween:30
                            },
                            768: {
                                slidesPerView: 2,
                                grid:{
                                    rows: 2,
                                    fill: "row",
                                },
                                spaceBetween:20
                            },
                            0: {
                                slidesPerView: 1,
                                grid:{
                                    rows: 2,
                                    fill: "row",
                                },
                                spaceBetween:10
                            }
                        }}
                    >
                        {
                            specialists.map((specialist, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <SpecialistCard
                                        id={specialist.id}
                                        index={index}
                                        img={specialist.img}
                                        name={specialist.name}
                                        post={specialist.post}
                                        age={specialist.age}
                                        city={specialist.city}
                                        feedbacks={specialist.feedbacks}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Specialists;