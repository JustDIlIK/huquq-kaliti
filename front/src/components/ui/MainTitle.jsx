import React from 'react';
import {useTranslation} from "react-i18next";

const MainTitle = ({title, className, ...props}) => {
    const {t} = useTranslation()
    return (
        <h5
            className={`text-[36px] max_sm:text-[26px] font-bold ${className}`}
            dangerouslySetInnerHTML={{__html: t(title)}}
        >
        </h5>
    );
};

export default MainTitle;