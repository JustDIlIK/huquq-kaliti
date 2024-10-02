import React from 'react';

const Achievements = () => {
    const achievements = [
        {
            number: 125,
            name: 'Консультаций'
        },
        {
            number: 90,
            name: 'Отзывов'
        },
        {
            number: 4.5,
            name: 'Рейтинг'
        },
        {
            number: 15,
            name: 'Лет опыта'
        },
    ]
    return (
        <section className={'pb-[112px]'}>
            <div className="container grid grid-cols-4 gap-[50px] max_lg:gap-8 max_lg:grid-cols-2 max_sm:grid-cols-1">
                {
                    achievements.map((achievement, index) => (
                        <div key={index} className={'bg-palatinate bg-opacity-[0.06] rounded-lg flex flex-col items-center gap-[32px] py-[41px]'}>
                            <p className={'text-5xl font-bold text-palatinate'}>
                                {achievement.number}
                            </p>
                            <span className={'text-lg font-medium'}>
                                {achievement.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Achievements;