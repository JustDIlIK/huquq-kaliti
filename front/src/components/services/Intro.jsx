import React, {useEffect, useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import ServiceItem from "./ui/ServiceItem.jsx";
import WhiteButton from "../ui/WhiteButton.jsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {loadServices} from "../../store/services/servicesActions.js";

const Intro = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services);

    useEffect(() => {
        dispatch(loadServices({page: 1, limit: 1000}))
    }, []);

    const [visibleServices, setVisibleServices] = useState(12);

    const showMoreServices = () => {
        setVisibleServices(services.length);
    };

    return (
        <section id={'intro'} className={'pt-[80px] pb-[112px] mt-[90px]'}>
            <div className="container">
                <MainTitle
                    title={'Services'}
                />
                <div className={'mt-10 grid grid-cols-4 gap-[30px] max_xl:grid-cols-3 max_xl:gap-6 max_md:grid-cols-2 max_sm:grid-cols-1'}>
                    {services && services.data && services.data.slice(0, visibleServices).map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}
                </div>
                {services.data && visibleServices < services.data.length && (
                    <WhiteButton
                        className={'bg-romance min-w-[220px] border-none mt-[44px] flex items-center justify-center mx-auto'}
                        content={'More services'}
                        onClick={showMoreServices}
                    />
                )}
            </div>
        </section>
    );
};

export default Intro;