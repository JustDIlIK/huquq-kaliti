import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import WhiteButton from "../../ui/WhiteButton.jsx";
import {useTranslation} from "react-i18next";
import usePopup from "../../../hooks/usePopup.js";
import Popup from "../../ui/Popup.jsx";

const SpecialistLocation = () => {
    const { showPopup, showPopupWithTimeout } = usePopup();
    const [active, setActive] = useState(false);
    const {t} = useTranslation();

    const openPopup = () => {
        const link = 'https://yandex.ru/maps/?ll=69.25281,41.2796144&z=15&pt=69.25281,41.2796144,pm2rdl';
        navigator.clipboard.writeText(link)
        setActive(true)
        setTimeout(()=> {
            setActive(false)
        },  500)

        showPopupWithTimeout(500);
    };

    return (
        <section className={'relative py-[60px] mb-[112px] max_xl:flex max_xl:flex-col'}>
            <div className={'absolute top-0 left-0 right-0 bottom-0 max_xl:relative max_xl:order-2'}>
                <YMaps>
                    <Map width="100%" height="100%" defaultState={{ center: [41.279614, 69.252814], zoom: 10 }}>
                        <Placemark geometry={[41.279614, 69.252814]} options={{iconColor: 'red'}} />
                        <ZoomControl options={{ float: 'right' }} />
                    </Map>
                </YMaps>
            </div>
            <div className="container relative z-10">
                <div className={'bg-white w-4/12 max_xl:w-full max_xl:shadow-none rounded-lg py-8 px-11 shadow-feedback max_sm:px-3'}>
                    <div className={'w-11/12 max_xl:mx-auto max_xl:flex max_xl:flex-col max_xl:items-center'}>
                        <p className={'font-bold text-4xl leading-[46px]'}>
                            Локация нашего офиса
                        </p>
                        <a className={'mt-10 flex items-center gap-4 mb-10'} href={`https://yandex.ru/maps/?ll=69.25281,41.2796144&z=15&pt=69.25281,41.2796144,pm2rdl`} target={'_blank'}>
                            <svg className={'flex-shrink-0'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
                                    stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                                    stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Улица Истиклол, дом 25, Ташкент, Узбекистан
                        </a>
                        <button
                            onClick={openPopup}
                            className={`border flex items-center gap-2 font-bold text-[16px] px-[15px] py-[13px] rounded-lg ${active ? 'text-green-700' : 'text-palatinate'}`}
                        >
                            {
                                active ?
                                    <>
                                        <svg width="24px" height="24px" fill="#15a83d" viewBox="0 0 36 36" version="1.1"
                                             preserveAspectRatio="xMidYMid meet"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"><title>success-standard-line</title>
                                                <path className="clr-i-outline clr-i-outline-path-1"
                                                      d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path>
                                                <path className="clr-i-outline clr-i-outline-path-2"
                                                      d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"></path>
                                                <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
                                            </g>
                                        </svg>
                                        {t('Ссылка скопирована!')}
                                    </>
                                    :
                                    <>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z"
                                                stroke="#2F3EDE" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        {t('Скопировать ссылку локации')}
                                    </>
                            }
                        </button>
                    </div>
                </div>
            </div>
            <Popup show={showPopup} success={true}>
                {t('The link has been copied to the clipboard!')}
            </Popup>
        </section>
    );
};

export default SpecialistLocation;