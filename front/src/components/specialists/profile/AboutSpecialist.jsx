import React, {useRef, useState} from 'react';
import MainTitle from "../../ui/MainTitle.jsx";
import MainSubtitle from "../../ui/MainSubtitle.jsx";
import {CSSTransition} from "react-transition-group";
import {formatText} from "../../../assets/utils.js";

const AboutSpecialist = () => {
    const [showMore, setShowMore] = useState(false);

    function openText() {
        setShowMore(true)
    }

    return (
        <section className={'pb-[112px]'}>
            <div className={'container'}>
                <MainTitle
                    title="About me"
                />
                <div
                    className={`relative mt-[24px] bg-alabaster rounded-lg p-[24px] pb-[64px] transition-all ease-in-out duration-300 about-me max_lg:after:!bottom-0 ${showMore ? 'open' : ''}`}>
                    <p className="w-7/12 max_xl:w-8/12 max_lg:w-full">
                        {formatText('Я — опытный юрист, специализирующийся в области трудового права. С более чем 15 лет опыта работы, я помогаю компаниям и частным лицам решать сложные юридические вопросы, связанные с трудовыми отношениями. Моя практика охватывает широкий спектр вопросов, включая составление и проверку трудовых договоров, разрешение трудовых споров, защиту прав работников и работодателей, а также консультации по вопросам соблюдения трудового законодательства. Я стремлюсь предоставлять клиентам эффективные и практичные решения, адаптированные к их уникальным потребностям, и всегда придерживаюсь высоких стандартов профессиональной этики и конфиденциальности. Моя цель — защитить интересы клиентов и обеспечить соблюдение их прав в рамках действующего законодательства.', showMore ? 10000 : 600)}
                    </p>
                    <CSSTransition
                        in={!showMore}
                        timeout={300}
                        classNames="about-me"
                        unmountOnExit
                    >
                        <button
                            onClick={openText}
                            className="text-palatinate absolute flex items-center gap-2 font-medium  bottom-[24px] z-10">
                            Подробнее
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L8 8.5L15 1.5" stroke="#2F3EDE" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </CSSTransition>
                </div>
            </div>
        </section>
    )
        ;
};

export default AboutSpecialist;