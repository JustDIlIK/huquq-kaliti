import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import {Rating} from "@mui/material";

const SpecialistCard = ({img, index, name, post, age, city, feedbacks, id, ...props}) => {
    return (
        <Link
            to={`/specialist/${id}/#profile`}
            className={'flex max_sm:flex-col max_sm:items-center gap-[24px] items-start shadow-feedback px-[35px] py-[43px] max_lg:px-[25px] max_lg:py-[33px] rounded-lg'}
        >
            <div className={'flex flex-col gap-[15px]'}>
                <div className={'relative'}>
                    <img className={'w-[138px] h-[133px]'} src={img} alt={`specialist-${index}`}/>
                    <div
                        className={'absolute -bottom-3 right-[30%] bg-palatinate text-white rounded-lg w-[55px] py-1 text-center font-bold'}>
                        {post}
                    </div>
                </div>
                <p className={'text-center max-w-[133px]'}>
                    Гражданско-
                    процессуальное
                    право
                </p>
            </div>
            <div className={'flex items-center flex-col gap-[16px]'}>
                <h3 className={'text-xl font-medium'}>
                    {name}
                </h3>
                <p className={'text-lg font-medium'}>
                    {age} лет, {city}
                </p>
                <div className={'flex items-center gap-2'}>
                    <Rating
                        name="simple-controlled"
                        readOnly
                        value={4.5}
                        defaultValue={4.5}
                        precision={0.5}
                    />
                    <p>
                        4.5
                    </p>
                </div>
                <div className={'flex items-center gap-[10px]'}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.07294 10.2288C5.01111 9.8282 4.97903 9.4179 4.97903 9C4.97903 4.58172 8.56546 1 12.9895 1C17.4136 1 21 4.58172 21 9C21 9.9981 20.8171 10.9535 20.4827 11.8345C20.4133 12.0175 20.3785 12.109 20.3628 12.1804C20.3471 12.2512 20.3411 12.301 20.3394 12.3735C20.3377 12.4466 20.3475 12.5272 20.3673 12.6883L20.7677 15.9585C20.8111 16.3125 20.8328 16.4895 20.7742 16.6182C20.7229 16.731 20.6317 16.8205 20.5184 16.8695C20.3891 16.9254 20.2135 16.8995 19.8625 16.8478L16.694 16.3809C16.5284 16.3565 16.4458 16.3443 16.3704 16.3448C16.2958 16.3452 16.2443 16.3507 16.1713 16.3661C16.0976 16.3817 16.0034 16.4172 15.8151 16.4881C14.9364 16.819 13.9841 17 12.9895 17C12.5735 17 12.165 16.9683 11.7661 16.9073M6.60211 21C9.55152 21 11.9424 18.5376 11.9424 15.5C11.9424 12.4624 9.55152 10 6.60211 10C3.65273 10 1.26178 12.4624 1.26178 15.5C1.26178 16.1106 1.35839 16.6979 1.53673 17.2467C1.61211 17.4787 1.6498 17.5947 1.66218 17.6739C1.67509 17.7567 1.67735 17.8031 1.67254 17.8867C1.66794 17.9668 1.648 18.0573 1.60814 18.2383L1 21L3.97913 20.591C4.14174 20.5687 4.22305 20.5575 4.29404 20.558C4.3688 20.5585 4.40848 20.5626 4.4818 20.5773C4.55142 20.5912 4.65493 20.6279 4.86196 20.7014C5.40741 20.8949 5.99285 21 6.60211 21Z"
                            stroke="#09A552" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={'text-lg font-medium'}>
                        {feedbacks} отзывов
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SpecialistCard;