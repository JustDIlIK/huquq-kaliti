import React from 'react';

const MyComplaintItem = ({complaint}) => {
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
            {
                complaint.comment ?
                    <div className={'bg-white bg-opacity-70 rounded-lg border p-3'}>
                        <p className={'font-bold text-shamrock'}>
                            На вашу жалобу откликнулись:
                        </p>
                        <p className={'text-doveGrey'}>
                            {complaint.comment}
                        </p>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default MyComplaintItem;