import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {useTranslation} from "react-i18next";

const PatternDoc = ({item}) => {
    const {t, i18n} = useTranslation();

    return (
        <Link to={`/constructor/${item.slug}/#preview`} className={'flex items-center gap-[16px] bg-romance p-[14px] rounded-lg w-full'}>
            <img src="/img/doc.svg" alt="doc"/>
            <p>
                {item.names[i18n.language]}
            </p>
        </Link>
    );
};

export default PatternDoc;