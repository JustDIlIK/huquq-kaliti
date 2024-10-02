import React, {useEffect, useRef, useState} from 'react';
import MainSubtitle from "../ui/MainSubtitle.jsx";
import {useTranslation} from "react-i18next";
import MainButton from "../ui/MainButton.jsx";
import {saveAs} from 'file-saver';
import Popup from "../ui/Popup.jsx";
import html2pdf from "html-to-pdf-js";
import usePopup from "../../hooks/usePopup.js";
import {useParams} from "react-router-dom";
import {loadDocumentInfo} from "../../store/documents/documentsActions.js";
import {useDispatch, useSelector} from "react-redux";

const Preview = () => {
    const {i18n, t} = useTranslation();
    const {slug} = useParams()
    const dispatch = useDispatch()
    const documentInfo = useSelector((state) => state.documents.documentInfo);
    const [item, setItem] = useState(
        {
            names: {
                ru: "",
                uz: "",
                en: "",
                uz_l: ""
            },
            sections: []
        })
    const item2 = {
        names: {
            ru: "ЗАЯВЛЕНИЕ О ПРЕДОСТАВЛЕНИИ ЕЖЕГОДНОГО ОТПЛАЧИВАЕМОГО ОТПУСКА",
            uz: "YILLIK PULLIK TA'TIL UCHUN ARIZA",
            en: "APPLICATION FOR ANNUAL PAID LEAVE",
            uz_l: "ЙИЛЛИК ПУЛЛИК ТАЪТИЛ УЧУН АРИЗА"
        },
        subcategory_id: 1,
        order: 1,
        sections: [
            {
                texts: {
                    ru: "ЗАЯВЛЕНИЕ О ПРЕДОСТАВЛЕНИИ ЕЖЕГОДНОГО ОТПЛАЧИВАЕМОГО ОТПУСКА",
                    uz: "YILLIK PULLIK TA'TIL UCHUN ARIZA",
                    en: "APPLICATION FOR ANNUAL PAID LEAVE",
                    uz_l: "ЙИЛЛИК ПУЛЛИК ТАЪТИЛ УЧУН АРИЗА"
                },
                options: {
                    align: "center",
                    color: "#000000",
                    size: 20,
                    weight: 600,
                    style: "bold"
                },
                next_new_line: true,
                order: 1,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "right",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 2,
                inputs: []
            },
            {
                texts: {
                    ru: "Ректору ФГБОУ ВО КГМУ",
                    uz: "КСМУ ректорига",
                    en: "To the Rector of KSMU",
                    uz_l: "Kgmudagi FGBOU rektori"
                },
                options: {
                    align: "right",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 3,
                inputs: []
            },
            {
                texts: {
                    ru: "Минздрава России",
                    uz: "Россия Соғлиқни сақлаш вазирлиги",
                    en: "Ministry of Health of Russia",
                    uz_l: "Rossiya Sog'liqni Saqlash Vazirligi"
                },
                options: {
                    align: "right",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 4,
                inputs: []
            },
            {
                texts: {
                    ru: "профессору В.А.Лазаренко",
                    uz: "Professor В. A. Лазаренкога",
                    en: "to Professor V.A.Lazarenko",
                    uz_l: "professor V. A. Lazarenko"
                },
                options: {
                    align: "right",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 5,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "right",
                    color: "#000000",
                    size: 18,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 6,
                inputs: [
                    {
                        texts: {
                            ru: "должность",
                            uz: "хабар",
                            en: "post",
                            uz_l: "lavozim"
                        },
                        options: {
                            align: "right",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: true,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {},
                options: {
                    align: "right",
                    color: "#000000",
                    size: 18,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 7,
                inputs: [
                    {
                        texts: {
                            ru: "ФИО",
                            uz: "Фcс",
                            en: "FCs",
                            uz_l: "To'liq ism"
                        },
                        options: {
                            align: "right",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: true,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {},
                options: {},
                next_new_line: true,
                order: 8,
                inputs: []
            },
            {
                texts: {
                    ru: "Заявление",
                    uz: "Баёнот",
                    en: "Statement",
                    uz_l: "Bayonot"
                },
                options: {
                    align: "center",
                    color: "#000000",
                    size: 18,
                    weight: 600,
                    style: "normal"
                },
                next_new_line: true,
                order: 9,
                inputs: []
            },
            {
                texts: {},
                options: {},
                next_new_line: false,
                order: 10,
                inputs: []
            },
            {
                texts: {
                    ru: "Прошу предоставить мне ежегодный оплачиваемый отпуск продолжительностью",
                    uz: "Сиздан менга йиллик пуллик таътилни тақдим етишингизни сўрайман",
                    en: "I ask you to provide me with an annual paid vacation of the duration",
                    uz_l: "Iltimos, menga yillik pullik ta'tilni taqdim eting"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 11,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 12,
                inputs: [
                    {
                        texts: {
                            ru: "дней",
                            uz: "кунлар",
                            en: "days",
                            uz_l: "kundar"
                        },
                        options: {
                            align: "left",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: false,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {
                    ru: "календарных дней с ",
                    uz: "календар кунлари",
                    en: "schedule days from",
                    uz_l: "kalendar kundari"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 13,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 14,
                inputs: [
                    {
                        texts: {
                            ru: "число, месяц, год",
                            uz: "сана, ой, йил",
                            en: "date, month, year",
                            uz_l: "kun, oy, yil"
                        },
                        options: {
                            align: "left",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: false,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {
                    ru: "по",
                    uz: "дан",
                    en: "to",
                    uz_l: "dan"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 15,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 16,
                inputs: [
                    {
                        texts: {
                            ru: "число, месяц, год",
                            uz: "сана, ой, йил",
                            en: "date, month, year",
                            uz_l: "kun, oy, yil"
                        },
                        options: {
                            align: "left",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: false,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {
                    ru: "за период работы",
                    uz: "иш даврида",
                    en: "during the period of work",
                    uz_l: "ish davrida"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 17,
                inputs: []
            },
            {
                texts: {},
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 18,
                inputs: [
                    {
                        texts: {
                            ru: "год/год",
                            uz: "йил/йил",
                            en: "year/year",
                            uz_l: "yil/yil"
                        },
                        options: {
                            align: "left",
                            color: "#00000",
                            size: 16,
                            weight: 400,
                            style: "normal"
                        },
                        next_new_line: false,
                        order: 0,
                        value: ''
                    }
                ]
            },
            {
                texts: {
                    ru: "год",
                    uz: "йил",
                    en: "year",
                    uz_l: "yil"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: false,
                order: 19,
                inputs: []
            },
            {
                texts: {},
                options: {},
                next_new_line: true,
                order: 20,
                inputs: []
            },
            {
                texts: {
                    ru: "Дата",
                    uz: "Сана",
                    en: "Date",
                    uz_l: "Sana"
                },
                options: {
                    align: "start",
                    color: "#000000",
                    size: 16,
                    weight: 400,
                    style: "normal"
                },
                next_new_line: true,
                order: 21,
                inputs: []
            },
        ]
    }
    const {showPopup, showPopupWithTimeout} = usePopup();
    const [activeInput, setActiveInput] = useState(null);
    const contentRef = useRef(null);

    const [inputValues, setInputValues] = useState(
        item.sections.reduce((acc, section) => {
            if (Array.isArray(section.inputs)) {
                section.inputs.forEach((input, index) => {
                    const key = `${section.order}-${index}`;
                    acc[key] = input.value || '';
                });
            } else {
                console.error("Section has no inputs or inputs is not an array:", section);
            }
            return acc;
        }, {})
    );

    const areInputsFilled = () => {
        const values = Object.values(inputValues);

        if (values.length === 0) {
            console.log('Input values are empty:', values);
            return false;
        }

        const allFilled = values.every(value => value.trim() !== '');

        return allFilled;
    };

    const openPopup = () => {
        showPopupWithTimeout(500);
    };

    const handleInputChange = (index, indexInput, event) => {
        const newValue = event.target.value;
        setActiveInput(`${index}-${indexInput}`)
        setInputValues(prevValues => ({
            ...prevValues,
            [`${index}-${indexInput}`]: newValue,
        }));
    };
    const handleInputFocus = (index, indexInput) => {
        setActiveInput(`${index}-${indexInput}`);
        const paragraph = document.getElementById(`${index}-${indexInput}`);
        if (paragraph && window.innerWidth >= 767) {
            paragraph.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }
    };
    const handleInputBlur = () => {
        setActiveInput(null);
    };

    const generateDocx = () => {
        if (!areInputsFilled()) {
            openPopup();
            return;
        }

        const content = contentRef.current.innerHTML;

        if (window.htmlDocx) {
            const converted = window.htmlDocx.asBlob(content);
            saveAs(converted, 'document.docx');
        } else {
            console.error('html-docx-js is not loaded.');
        }
    };

    const generatePdf = () => {
        if (!areInputsFilled()) {
            openPopup();
            return;
        }

        var element = document.getElementById('document');
        html2pdf(element);
    };

    useEffect(() => {
        dispatch(loadDocumentInfo({slug: slug}))
    }, [slug]);

    useEffect(() => {
        if (documentInfo.id) {
            setItem((prevDocument) => {
                const updatedSections = [...documentInfo.sections];

                updatedSections.sort((a, b) => a.order - b.order);

                return {
                    ...prevDocument,
                    sections: updatedSections,
                    slug: documentInfo.slug,
                    names: documentInfo.names,
                    id: documentInfo.id
                };
            });
        }
    }, [documentInfo]);

    return (
        <section id={'preview'} className={'pb-[112px] pt-[170px]'}>
            <div className="container">
                <div className={'flex flex-col items-center justify-center gap-[16px]'}>
                    <h3 className={'font-bold text-4xl'}>
                        {t('Document Constructor')}
                    </h3>
                    <MainSubtitle
                        className={'w-[300px] text-center !mt-0'}
                        content={'Save time by using the document designer to solve your tasks'}
                    />
                    <div className={'bg-romance px-2 py-1 rounded-lg'}>
                        {t('Is free')}!
                    </div>
                </div>
                <div className={'flex items-center justify-between max_lg:flex-col mt-[40px] max_lg:gap-10'}>
                    <p className={'font-bold text-xl w-4/12 max_lg:w-full max_lg:text-center'}>
                        {item.names[i18n.language]}
                    </p>
                    <div className={'flex items-center gap-3 max_sm:flex-col'}>
                        <MainButton
                            onClick={generateDocx}
                            content={'Download docx'}
                        />
                        <MainButton
                            onClick={generatePdf}
                            content={'Download pdf'}
                        />
                    </div>
                </div>
                <div className={'relative mt-[40px] flex gap-[10px] max_lg:flex-col'}>
                    <div className={'w-4/12 max_lg:w-full rounded-lg bg-romance p-[24px] flex flex-col gap-[16px]'}>
                        {
                            item.sections.map((section, index) => (
                                    section.inputs.length ?
                                        section.inputs.map((input, indexInput) => (
                                            <label
                                                key={`${index}-${indexInput}`}
                                                className={'flex flex-col gap-[8px] font-medium'}
                                            >
                                                {input.texts[i18n.language]}
                                                <input
                                                    className={`bg-white outline-0 rounded-lg p-3 ${activeInput === index + '-' + indexInput ? 'shadow-input' : ''}`}
                                                    type={input.type}
                                                    value={inputValues[`${index}-${indexInput}`] || ''}
                                                    onChange={(event) => handleInputChange(index, indexInput, event)}
                                                    onFocus={() => handleInputFocus(index, indexInput)}
                                                    onBlur={handleInputBlur}
                                                />
                                            </label>
                                        ))
                                        :
                                        ''
                                )
                            )
                        }
                    </div>
                    <div
                        className={'document relative w-8/12 max_lg:w-full max_lg:overflow-auto rounded-lg bg-romance p-[18px]'}>
                        <div
                            id="document"
                            ref={contentRef}
                            className={'times h-[700px] max_md:w-[762px] overflow-y-auto overflow-x-hidden bg-white rounded-lg p-[24px]'}
                        >
                            {
                                item.sections.map((section, index) => (
                                    section.inputs.length ?
                                        section.inputs.map((input, indexInput) => (
                                            input.next_new_line ?
                                                <p
                                                    id={`${index}-${indexInput}`}
                                                    key={`${index}-${indexInput}`}
                                                    style={{
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: input.options.color,
                                                        textAlign: input.options.align,
                                                        fontSize: input.options.size,
                                                        fontWeight: input.options.weight,
                                                        margin: `${input.next_new_line ? '' : '0 5px'}`,
                                                        backgroundColor: activeInput === `${index}-${indexInput}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
                                                    }}
                                                >
                                                    {inputValues[`${index}-${indexInput}`] ? inputValues[`${index}-${indexInput}`] : input.texts[i18n.language]}
                                                </p>
                                                :
                                                <span
                                                    id={`${index}-${indexInput}`}
                                                    key={`${index}-${indexInput}`}
                                                    style={{
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: input.options.color,
                                                        textAlign: input.options.align,
                                                        fontSize: input.options.size,
                                                        fontWeight: input.options.weight,
                                                        padding: `${input.next_new_line ? '' : '0 5px'}`,
                                                        fontStyle: "normal",
                                                        fontFamily: "Times New Roman",
                                                        backgroundColor: activeInput === `${index}-${indexInput}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
                                                    }}
                                                >
                                                    &nbsp;{inputValues[`${index}-${indexInput}`] ? inputValues[`${index}-${indexInput}`] : input.texts[i18n.language]}&nbsp;
                                                </span>
                                        ))
                                        :
                                        section.texts[i18n.language]
                                            ?
                                            section.next_new_line
                                                ?
                                                <p
                                                    key={index}
                                                    style={{
                                                        whiteSpace: "pre-line",
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: section.options.color,
                                                        textAlign: section.options.align,
                                                        fontSize: section.options.size,
                                                        fontWeight: section.options.weight,
                                                        display: `${section.next_new_line ? 'block' : 'inline'}`
                                                    }}
                                                >
                                                    {section.texts[i18n.language]}
                                                </p>
                                                :
                                                <span
                                                    key={index}
                                                    style={{
                                                        whiteSpace: "pre-line",
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: section.options.color,
                                                        textAlign: section.options.align,
                                                        fontSize: section.options.size,
                                                        fontWeight: section.options.weight,
                                                        fontFamily: "Times New Roman"
                                                    }}
                                                >
                                                    &nbsp;{section.texts[i18n.language]}&nbsp;
                                                </span>
                                            :
                                            section.next_new_line
                                                ?
                                                <p>&nbsp;</p>
                                                :
                                                <span>&nbsp;</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Popup show={showPopup}>
                {t('Please fill in all the fields!')}
            </Popup>
        </section>
    );
};

export default Preview;