import React from 'react';
import {useTranslation} from "react-i18next";

const MainButton = ({content, className,onClick,type, ...props}) => {
    const {t} = useTranslation()
    return (
        <button
            type={type}
            className={`font-bold bg-palatinate text-white py-3 min-w-[220px] rounded-lg ${className}`}
            onClick={onClick}
        >
            {t(content)}
        </button>
    );
};

export default MainButton;