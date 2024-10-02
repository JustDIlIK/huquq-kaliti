import React from 'react';
import {useTranslation} from "react-i18next";

const WhiteButton = ({content, className,onClick, ...props}) => {
    const {t} = useTranslation()
    return (
        <button
            className={`border text-palatinate font-bold text-[16px] px-[15px] py-[13px] rounded-lg ${className}`}
            onClick={onClick}
        >
            {t(content)}
        </button>
    );
};

export default WhiteButton;