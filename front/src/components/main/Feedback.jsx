import React, {useState} from 'react';
import MainTitle from "../ui/MainTitle.jsx";
import MainInput from "../ui/MainInput.jsx";
import {Dropdown} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const Feedback = () => {
    const [options, setOptions] = useState([
        { key: 'angular', text: 'Адвокат', value: 'angular' },
        { key: 'css', text: 'Юрист', value: 'css' },
        { key: 'design', text: 'Судья', value: 'design' },
    ]);
    return (
        <section className="py-[112px]">
            <div className="container flex items-center justify-between">
                <div className="w-4/12 flex flex-col gap-[40px]">
                    <MainTitle
                        title="Обратная связь"
                    />
                    <form action="#" className="flex flex-col gap-[16px]">
                        <MainInput
                            id="name-input"
                            name="name-input"
                            label="Как к Вам обращаться?"
                            type="text"
                        />
                        <MainInput
                            id="phone-input"
                            name="phone-input"
                            label="Телефон"
                            type="phone"
                        />
                        <div className={"flex flex-col gap-[8px]"}>
                            <p className={"font-medium m-0"}>
                                По какому вопросу?
                            </p>
                            <Dropdown
                                placeholder='Выберите' fluid selection options={options}
                            />
                        </div>
                        <button className={"font-bold w-[220px] py-3 bg-romance rounded-lg mt-[16px]"}>
                            Отправить
                        </button>
                    </form>
                </div>
                <div className="w-5/12 bg-romance h-[440px]">

                </div>
            </div>
        </section>
    );
};

export default Feedback;