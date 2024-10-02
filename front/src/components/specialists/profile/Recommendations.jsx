import React, {useRef, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';

const Recommendations = () => {
    const sliderRecommendationsRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const advices = [
        {
            direction: 'Трудовое право',
            advice: 'Регулярно изучайте актуальные изменения в законодательстве и используйте их в своей деятельности для обеспечения соблюдения прав работников и работодателей.'
        },
        {
            direction: 'Трудовое право',
            advice: 'Регулярно изучайте актуальные изменения в законодательстве и используйте их в своей деятельности для обеспечения соблюдения прав работников и работодателей.'
        },
        {
            direction: 'Трудовое право',
            advice: 'Регулярно изучайте актуальные изменения в законодательстве и используйте их в своей деятельности для обеспечения соблюдения прав работников и работодателей.'
        },
        {
            direction: 'Трудовое право',
            advice: 'Регулярно изучайте актуальные изменения в законодательстве и используйте их в своей деятельности для обеспечения соблюдения прав работников и работодателей.'
        }
    ]

    function handlePrev () {
        if (!sliderRecommendationsRef.current) return;
        sliderRecommendationsRef.current.swiper.slidePrev();
    }
    function handleNext () {
        if (!sliderRecommendationsRef.current) return;
        sliderRecommendationsRef.current.swiper.slideNext();
    }
    function handleSwiper (swiper) {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    return (
        <section className={'pb-[112px] bg-romance'}>
            <div className="container">
                <MainTitle
                    title={'Our tips'}
                />
                <div className={'mt-[40px] max_big:!px-10 max_sm:!p-5'}>
                    <div className={'relative'}>
                        <button
                            onClick={handlePrev}
                            className={`bg-white absolute z-10 -left-20 max_big:-left-10 translate-x-[0%] translate-y-[-150%] max_sm:translate-y-[-150%] top-[180px] w-[44px] h-[44px] rounded-full flex items-center justify-center ${isBeginning ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                            className={`bg-white absolute z-10 -right-20 max_big:-right-10 translate-x-[0%] translate-y-[-150%] max_sm:translate-y-[-150%] top-[180px] w-[44px] h-[44px] rounded-full flex items-center justify-center ${isEnd ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                        ref={sliderRecommendationsRef}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 30
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
                            advices.map((advice, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div className={'rounded-lg bg-white py-10 px-8'}>
                                        <div className={'text-center border-b pb-5'}>
                                            <p className={'text-2xl font-bold'}>
                                                Совет №<span className={'text-3xl'}>{index + 1}</span>
                                            </p>
                                            <p className={'mt-[12px]'}>
                                                {advice.direction}
                                            </p>
                                        </div>
                                        <p className={'pt-5'}>
                                            {advice.advice}
                                        </p>
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

export default Recommendations;