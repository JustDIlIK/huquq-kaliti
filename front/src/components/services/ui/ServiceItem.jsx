import React from 'react';
import {useTranslation} from "react-i18next";
import {formatText} from "../../../assets/utils.js";
import MainButton from "../../ui/MainButton.jsx";
import { HashLink as Link } from "react-router-hash-link";

const ServiceItem = ({service}) => {
    const {t, i18n} = useTranslation();
    return (
            <div className={'bg-romance rounded-lg p-6 flex flex-col gap-[35px]'}>
                <p className={'font-[600]'}>
                    {service.names[i18n.language]}
                </p>
                <p className={'text-doveGrey'}>
                    {formatText(service.descriptions[i18n.language], 80)}
                </p>
                <Link className={'text-palatinate underline'} to={`/service/${service.id}/#intro`}>
                    {t('More detailed')}
                </Link>
                <Link className={'text-palatinate underline mt-auto'} to={`/service/${service.id}/#specialists`}>
                    <MainButton
                        className={'w-full min-w-full'}
                        content={'List of lawyers'}
                    />
                </Link>
            </div>
    );
};

export default ServiceItem;