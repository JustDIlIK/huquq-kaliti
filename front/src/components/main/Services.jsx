import React, {useEffect, useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import AccordionItem from "../ui/AccordionItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loadServices} from "../../store/services/servicesActions.js";
import {useTranslation} from "react-i18next";

const Services = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services);

    useEffect(() => {
        dispatch(loadServices({page: 1, limit: 1000}))
    }, []);

    return (
        <section id='services' className="py-[112px]">
            <div className="container">
                <MainTitle
                    title="The services we provide"
                />
                <div className={'grid grid-cols-2 max_md:grid-cols-1 gap-x-[30px] gap-y-[24px] mt-[40px]'}>
                    {
                        services && services.data && services.data.slice(0, 8).map((service, index) => (
                            <AccordionItem
                                className="!py-[24px] !px-[37px] max_md:!px-[17px]"
                                bold={false}
                                full={true}
                                key={index}
                                question={service.names[i18n.language]}
                                answer={service.descriptions[i18n.language]}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;