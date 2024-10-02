import React, {useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";

const Cases = () => {
    const [activeCase, setActiveCases] = useState({
        id:1,
        name: 'Гражданское право',
        cases: [
            {
                number: 35,
                name: 'Защит в уголовных делах'
            },
            {
                number: 35,
                name: 'Защит в уголовных делах'
            },
            {
                number: 35,
                name: 'Защит в уголовных делах'
            }
        ]
    })
    const cases = [
        {
            id:1,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                },
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                },
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:2,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:3,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:4,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:5,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:6,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        },
        {
            id:7,
            name: 'Гражданское право',
            cases: [
                {
                    number: 35,
                    name: 'Защит в уголовных делах'
                }
            ]
        }
    ]

    function changeActive(item){
        setActiveCases(item)
    }

    return (
        <section className={'relative py-[112px] bg-romance'}>
            <img className={'absolute bottom-0 left-0'} src="/img/cases-1.png" alt="cases-1"/>
            <img className={'absolute top-0 right-0'} src="/img/cases-2.png" alt="cases-2"/>
            <div className="container">
                <MainTitle
                    title="Lawyer's cases"
                />
                <div className={'bg-white mt-[40px] rounded-lg flex max_sm:flex-col'}>
                    <div className={'max-h-[520px] w-5/12 overflow-y-auto max_sm:w-full max_sm:max-h-[260px] p-[24px] flex flex-col gap-[16px]'}>
                        {
                            cases.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={()=> changeActive(item)}
                                    className={`rounded-lg font-medium text-lg w-full py-6 transition-all ease-in-out duration-300 ${activeCase.id === item.id ? 'bg-palatinate text-white' : 'bg-romance'}`}
                                >
                                    {item.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className={'w-7/12 px-[17px] flex flex-col max_sm:w-full gap-[16px]'}>
                        <div className={'px-10 border-l h-full flex items-center max_lg:flex-col gap-[16px] justify-center'}>
                            {
                                activeCase.cases.map((item, index) => (
                                    <div key={index} className={'shadow-case rounded-xl py-[24px] px-[22px] flex items-center flex-col gap-[32px] text-center justify-center'}>
                                        <p className={'text-5xl text-palatinate font-bold'}>
                                            {item.number}
                                        </p>
                                        <span className={'font-medium'}>
                                            {item.name}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default Cases;