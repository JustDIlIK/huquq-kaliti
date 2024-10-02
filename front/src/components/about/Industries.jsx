import React, {useEffect} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {loadServices} from "../../store/services/servicesActions.js";

const Industries = () => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services.services);
    const industries = [
        'Civil law',
        'Criminal law',
        'Family law',
        'Corporate law',
        'Labor law',
        'Tax law',
        'Immigration law',
        'International law',
        'Intellectual property',
        'Administrative law',
        'Insurance law',
        'Banking and financial law',
        'Medical law',
        'Environmental law',
        'Information law and data protection'
    ]

    useEffect(() => {
        dispatch(loadServices({page: 1, limit: 1000}))
    }, []);

    return (
        <section className={'py-[112px] relative max_md:pt-[50px]'}>
            <img className={'absolute right-0'} src="/img/industries-bg.png" alt="industries-bg"/>
            <div className="container">
                <MainTitle
                    title={'Industries on the platform'}
                />
                <div className={'py-6 px-[36px] max_md:px-6 flex flex-wrap gap-x-[12px] gap-y-[16px] border mt-6'}>
                    {
                        services && services.data && services.data.map((industrie, index) => (
                            <div key={index} className={'p-6 max_md:p-4 bg-romance rounded-lg border'}>
                                {industrie.names[i18n.language]}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Industries;