import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import SpecialistCard from "./ui/SpecialistCard.jsx";

const Intro = () => {
    const [specialists, setSpecialists] = useState([
        {
            id: 1,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 2,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/2.png'
        },
        {
            id: 3,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/3.png'
        },
        {
            id: 4,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/4.png'
        },
        {
            id: 5,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/5.png'
        },
        {
            id: 6,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 7,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 8,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 9,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        },
        {
            id: 10,
            name: 'Сидоров Сергей',
            post: 'Юрист',
            age: '35',
            city: 'Ташкент',
            feedbacks: '15',
            pro: true,
            img: '/img/specialists/1.png'
        }
    ])

    return (
        <section id={'specialists'} className={'pt-[212px] pb-[112px]'}>
            <div className="container">
                <MainTitle
                    title="Specialists for your tasks"
                />
                <div className={'grid grid-cols-3 max_xl:grid-cols-2 max_md:grid-cols-1 gap-[30px] mt-10'}>
                    {
                        specialists.map((specialist, index) => (
                            <SpecialistCard
                                id={specialist.id}
                                key={index}
                                index={index}
                                img={specialist.img}
                                name={specialist.name}
                                post={specialist.post}
                                age={specialist.age}
                                city={specialist.city}
                                feedbacks={specialist.feedbacks}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Intro;