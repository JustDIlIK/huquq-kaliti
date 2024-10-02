import React from 'react';
import {Link} from "react-router-dom";
import MainButton from "../../../ui/MainButton.jsx";
import {useTranslation} from "react-i18next";

const ComplaintItem = ({complaint}) => {
    const {t, i18n} = useTranslation();
    return (
        <div
            className={`bg-romance p-6 flex flex-col gap-[20px] rounded-lg ${complaint.comment ? 'bg-shamrock bg-opacity-10' : ''}`}
        >
            <p className={'font-bold'}>
                Обращение #{complaint.id}
            </p>
            <p className={'text-doveGrey'}>
                {complaint.title}
            </p>
            <div className={'bg-white rounded-lg py-2 px-3 flex items-center gap-[20px]'}>
                <div className={'w-[44px] h-[44px] bg-romance rounded-full'}></div>
                <div className={'flex flex-col gap-1'}>
                    <p>
                        {
                            complaint.user.name ? complaint.user.name + ' ' + (complaint.user.lastname || '') : 'Юзер'
                        }
                    </p>
                    <p className={'text-doveGrey text-sm'}>
                        {complaint.user.role.names[i18n.language]}
                    </p>
                </div>
            </div>
            <Link to={`/admin/complaints/${complaint.id}`}>
                <MainButton
                    className={'!min-w-full'}
                    content={'Подробнее'}
                />
            </Link>
        </div>
    );
};

export default ComplaintItem;