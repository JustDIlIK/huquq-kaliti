import React from 'react';
import {useTranslation} from "react-i18next";

const MainTextarea = ({ label, name, id, className, inputClass, value, onChange, required, placeholder, ...props }) => {
    const {t} = useTranslation();
    return (
        <label className={`relative flex flex-col gap-[8px] font-medium ${className}`} htmlFor={id}>
            <p className={"m-0"}>
                {t(label)}
            </p>
            <textarea
                id={id}
                name={name}
                className={`bg-romance rounded-[6px] outline-0 p-3 min-h-[235px] ${inputClass}`}
                value={value}
                onChange={onChange}
                placeholder={t(placeholder)}
                required={required}
            />
        </label>
    );
};

export default MainTextarea;