import React from 'react';
import {useTranslation} from "react-i18next";

const MainSubtitle = ({content, className, ...props}) => {
    const {t} = useTranslation();
    return (
        <p className={`mt-[32px] text-[16px] max_sm:text-[14px] break-words ${className}`}>
            {t(content)}
        </p>
    );
};

export default MainSubtitle;