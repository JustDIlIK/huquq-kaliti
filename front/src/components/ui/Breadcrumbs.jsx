import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../../assets/utils.js";
import {useTranslation} from "react-i18next";

const Breadcrumbs = ({links, dark, className, ...props}) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <div className={`flex items-center gap-[24px] ${className}`}>
            <button
                onClick={() => navigate(-1)}
                className={`bg-white py-3 px-4 rounded-lg flex items-center gap-2 font-medium ${dark ? '!bg-romance': ''}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#1E1E1E" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t('Back')}
            </button>
            <ul className={'flex items-center gap-[3px] font-medium'}>
                {
                    links.map((link, index) => (
                        <li
                            key={index}
                            className={`text-gray-400 relative flex ${index !== links.length - 1 ? 'pr-2': ''} ${link.path ? 'link': ''}`}>
                            {
                                link.path ?
                                    <Link to={MAIN_ROUTE} className={'hover:text-gray-400 pr-2'}>
                                        {t(link.label)}
                                    </Link>
                                    :
                                    <span className={'text-palatinate cursor-default'}>
                                        {t(link.label)}
                                    </span>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Breadcrumbs;