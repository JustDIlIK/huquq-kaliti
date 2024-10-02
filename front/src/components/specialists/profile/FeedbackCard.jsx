import React from 'react';
import {Rating} from "@mui/material";

const FeedbackCard = ({name, city, rating, message, ...props}) => {
    return (
        <div className={'relative shadow-feedback px-[22px] py-[32px] pt-[60px]'}>
            <img className={'absolute -top-[60px] left-[40%] w-[94px] h-[94px]'} src="/img/logo.png" alt="logo"/>
            <div className={'absolute top-0 right-[16px] text-shamrock font-medium text-2xl flex items-center gap-[6px]'}>
                +1
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z"
                        stroke="#09A552" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={'flex flex-col gap-[16px] items-center'}>
                <p className={'font-medium text-3xl text-center'}>
                    {name}
                </p>
                <p>
                    {city}
                </p>
                <div className={'flex items-center gap-2'}>
                    <Rating
                        name="simple-controlled"
                        readOnly
                        value={rating}
                        defaultValue={rating}
                        precision={0.5}
                    />
                    <p>
                        {rating}
                    </p>
                </div>
            </div>
            <p className={'mt-[24px]'}>
                {message}
            </p>
        </div>
    );
};

export default FeedbackCard;