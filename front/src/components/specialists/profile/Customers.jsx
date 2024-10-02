import React, {useRef, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import {Rating} from "@mui/material";

const Customers = () => {
    const sliderSertificatesRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const reviews = [
        {
            img: '/img/logo.png',
            content: 'Хочу выразить благодарность юристу за его профессионализм, компетентность и индивидуальный подход к каждому клиенту. Он помог мне разобраться в сложном юридическом вопросе, предоставил исчерпывающую информацию и дал ценные рекомендации.',
            rating: 4.5,
            name: 'Кузнецов Кузьма',
            city: 'Ташкент'
        },
        {
            img: '/img/logo.png',
            content: 'Хочу выразить благодарность юристу за его профессионализм, компетентность и индивидуальный подход к каждому клиенту. Он помог мне разобраться в сложном юридическом вопросе, предоставил исчерпывающую информацию и дал ценные рекомендации.',
            rating: 5,
            name: 'Кузнецов Кузьма',
            city: 'Ташкент'
        },
        {
            img: '/img/logo.png',
            content: 'Хочу выразить благодарность юристу за его профессионализм, компетентность и индивидуальный подход к каждому клиенту. Он помог мне разобраться в сложном юридическом вопросе, предоставил исчерпывающую информацию и дал ценные рекомендации.',
            rating: 5,
            name: 'Кузнецов Кузьма',
            city: 'Ташкент'
        },
        {
            img: '/img/logo.png',
            content: 'Хочу выразить благодарность юристу за его профессионализм, компетентность и индивидуальный подход к каждому клиенту. Он помог мне разобраться в сложном юридическом вопросе, предоставил исчерпывающую информацию и дал ценные рекомендации.',
            rating: 4.5,
            name: 'Кузнецов Кузьма',
            city: 'Ташкент'
        },
    ]

    function handlePrev () {
        if (!sliderSertificatesRef.current) return;
        sliderSertificatesRef.current.swiper.slidePrev();
    }
    function handleNext () {
        if (!sliderSertificatesRef.current) return;
        sliderSertificatesRef.current.swiper.slideNext();
    }
    function handleSwiper (swiper) {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    return (
        <section className={'py-[112px]'}>
            <div className="container">
                <MainTitle
                    title="Customer reviews"
                />
                <div className={'mt-[40px] max_big:!px-10 max_sm:!p-5'}>
                    <div className={'relative'}>
                        <button
                            onClick={handlePrev}
                            className={`absolute z-10 -left-20 max_big:-left-10 translate-x-[0%] translate-y-[0%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isBeginning ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                            className={`absolute z-10 -right-20 max_big:-right-10 translate-x-[0%] translate-y-[0%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isEnd ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                        className={'!p-6 max_sm:!p-0'}
                        ref={sliderSertificatesRef}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 36
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }
                        }}
                    >
                        {
                            reviews.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div className={'shadow-feedback rounded-lg py-[32px] px-[24px] flex flex-col gap-[32px]'}>
                                        <div className={'flex items-center gap-2'}>
                                            <Rating
                                                name="simple-controlled"
                                                readOnly
                                                value={4.5}
                                                defaultValue={4.5}
                                                precision={0.5}
                                            />
                                            <p>
                                                4.5
                                            </p>
                                        </div>
                                        <p className={'font-medium text-[16px]'}>
                                            {item.content}
                                        </p>
                                        <div className={'flex items-center gap-[16px]'}>
                                            <img className={'w-[54px] h-[54px] rounded-full'} src={item.img}
                                                 alt="sertificate-imge"/>
                                            <div>
                                                <p className={'font-bold'}>
                                                    {item.name}
                                                </p>
                                                <p>
                                                    {item.city}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Customers;