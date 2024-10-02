import React, {useRef, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';

const Publications = () => {
    const sliderPublicationsRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
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
        },
        {
            id: 5,
            title: 'Акция для новых пользователей!',
            description: 'При регистрации на нашем сайте вы получите скидку 10% на услуги адвоката.',
            date: '21.12.2022',
            img: '/img/news/4.webp'
        }
    ]);

    function handlePrev () {
        if (!sliderPublicationsRef.current) return;
        sliderPublicationsRef.current.swiper.slidePrev();
    }
    function handleNext () {
        if (!sliderPublicationsRef.current) return;
        sliderPublicationsRef.current.swiper.slideNext();
    }
    function handleSwiper (swiper) {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    return (
        <section className={'pt-[112px] pb-[128px]'}>
            <div className="container">
                <MainTitle
                    title={'Publications'}
                />
                <div className={'mt-[40px] max_big:!px-10 max_sm:!p-5'}>
                    <div className={'relative'}>
                        <button
                            onClick={handlePrev}
                            className={`bg-romance absolute z-10 -left-20 max_big:-left-10 translate-x-[0%] translate-y-[-150%] max_sm:translate-y-[50%] top-[180px] w-[44px] h-[44px] rounded-full flex items-center justify-center ${isBeginning ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                            className={`bg-romance absolute z-10 -right-20 max_big:-right-10 translate-x-[0%] translate-y-[-150%] max_sm:translate-y-[50%] top-[180px] w-[44px] h-[44px] rounded-full flex items-center justify-center ${isEnd ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                        ref={sliderPublicationsRef}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper) => handleSwiper(swiper)}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            564: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }
                        }}
                    >
                        {
                            news.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={'flex flex-col gap-[24px]'}>
                                        <div
                                            className={'relative bg-romance w-full h-[272px] rounded-lg overflow-hidden'}>
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
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Publications;