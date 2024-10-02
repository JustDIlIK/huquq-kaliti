import React, {useRef, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';

const Sertificates = () => {
    const sliderSertificatesRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const sertificates = [
        {
            img: '/img/sertificates/1.jpg',
            name: 'Юрист-BestProfi'
        },
        {
            img: '/img/sertificates/2.jpg',
            name: 'IARL'
        },
        {
            img: '/img/sertificates/3.jpg',
            name: 'NB'
        },
        {
            img: '/img/sertificates/3.jpg',
            name: 'Юрист-BestProfi'
        }
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
        <section className={'pb-[239px] max_lg:pb-[112px]'}>
            <div className="container">
                <MainTitle
                    title="Recommendations and certificates"
                />
                <div className={'mt-[40px] max_big:!px-10 max_sm:!p-5'}>
                    <div className={'relative'}>
                        <button
                            onClick={handlePrev}
                            className={`absolute z-10 -left-20 max_big:-left-10 translate-x-[0%] translate-y-[-80%] max_lg:translate-y-[-120%] max_sm:translate-y-[-220%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isBeginning ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                            className={`absolute z-10 -right-20 max_big:-right-10 translate-x-[0%] translate-y-[-80%] max_lg:translate-y-[-130%] max_sm:translate-y-[-230%] top-[180px] bg-romance w-[44px] h-[44px] rounded-full flex items-center justify-center ${isEnd ? 'opacity-50 max_big:opacity-80' : 'opacity-100'}`}
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
                        ref={sliderSertificatesRef}
                        onSlideChange={(swiper) => handleSwiper(swiper)}
                        onSwiper={(swiper)=> handleSwiper(swiper)}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50
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
                            sertificates.map((sertificate, index) => (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div>
                                        <img className={'w-full'} src={sertificate.img} alt="sertificate-imge"/>
                                        <p className={'mt-[24px]'}>
                                            Сертификат от {sertificate.name}
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

export default Sertificates;