import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import TextInput from "../ui/document-constructor/TextInput.jsx";
import FormattingToolbar from "../ui/document-constructor/FormattingToolbar.jsx";
import SectionControls from "../ui/document-constructor/SectionControls.jsx";
import {CSSTransition} from "react-transition-group";
import {useNavigate, useParams} from "react-router-dom";
import MainInput from "../../ui/MainInput.jsx";
import MainButton from "../../ui/MainButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {createDocument, editDocumentInfo, loadDocumentInfo} from "../../../store/documents/documentsActions.js";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const EditDocumentConstructor = () => {
    const { slug, category_id, subcategory_id } = useParams();
    const documentInfo = useSelector((state) => state.documents.documentInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {i18n, t} = useTranslation();
    const [documentELement, setDocumentELement] = useState({
        names: {
            ru: 'Документ',
            en: 'Document',
            uz: 'Документ',
            uz_l: 'Document',
        },
        subcategory_id: 1,
        order: 1,
        sections: [
            {
                texts: {
                    ru: '',
                    en: '',
                    uz: '',
                    uz_l: '',
                },
                options: {
                    align: "center",
                    color: "#000000",
                    size: 20,
                    weight: 600,
                    style: "normal"
                },
                next_new_line: true,
                order: 1,
                inputs: []
            }
        ]
    })
    const languages = [
        {code: 'ru', label: 'Ru', img: '/img/ru.svg'},
        {code: 'en', label: 'En', img: '/img/ru.svg'},
        {code: 'uz', label: 'Uz', img: '/img/uz.svg'},
        {code: 'uz_l', label: 'Уз', img: '/img/uz.svg'}
    ]
    const [colorPickerVisible, setColorPickerVisible] = useState(null);
    const colorPickerRef = useRef();
    const [activeInput, setActiveInput] = useState(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                setColorPickerVisible(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        dispatch(loadDocumentInfo({slug: slug}))
    }, []);
    useEffect(() => {
        if(documentInfo.id){
            setDocumentELement((prevDocument) => {
                const updatedSections = documentInfo.sections.map(section => ({
                    ...section,
                    inputs: section.inputs.length > 0
                        ? section.inputs.map((input, index) => ({
                            ...input,
                            isDynamic: index === 0 ? true : input.isDynamic
                        }))
                        : section.inputs
                }));

                updatedSections.sort((a, b) => a.order - b.order);

                return {
                    ...prevDocument,
                    subcategory_id: subcategory_id,
                    sections: updatedSections,
                    slug: documentInfo.slug,
                    names: documentInfo.names,
                    id: documentInfo.id
                };
            });
        }
    }, [documentInfo]);

    const changeTextInputs = (event, index, lang) => {
        const newText = event.target.value;
        const newSections = [...documentELement.sections];
        if(documentELement.sections[index].inputs.length) {
            newSections[index].inputs[0].texts[lang] = newText;
            setDocumentELement((prevDocument) => ({
                ...prevDocument,
                sections: newSections
            }));
        } else {
            newSections[index].texts[lang] = newText;
            setDocumentELement((prevDocument) => ({
                ...prevDocument,
                sections: newSections
            }));
        }

    }
    const changeNameInputs = (event, code) => {
        const newText = event.target.value;

        setDocumentELement((prevDocument) => ({
            ...prevDocument,
            names: {
                ...prevDocument.names,
                [code]: newText,
            },
        }));
    };

    const setBoldTexts = (index) => {
        if(documentELement.sections[index].inputs.length) {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentStyle = newSections[index].inputs[0].options.weight;

                newSections[index].inputs[0].options.weight = currentStyle === '600' ? '400' : '600';

                return {...prevDocument, sections: newSections};
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentStyle = newSections[index].options.weight;

                newSections[index].options.weight = currentStyle === '600' ? '400' : '600';

                return {...prevDocument, sections: newSections};
            });
        }
    };

    const setItalicTexts = (index) => {
        if(documentELement.sections[index].inputs.length) {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentStyle = newSections[index].inputs[0].options.style;

                newSections[index].inputs[0].options.style = currentStyle === 'italic' ? 'normal' : 'italic';

                return {...prevDocument, sections: newSections};
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentStyle = newSections[index].options.style;

                newSections[index].options.style = currentStyle === 'italic' ? 'normal' : 'italic';

                return {...prevDocument, sections: newSections};
            });
        }
    };

    const setAlignTexts = (index, alignment) => {
        if(documentELement.sections[index].inputs.length) {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].inputs[0].options.align = alignment;

                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].options.align = alignment;

                return { ...prevDocument, sections: newSections };
            });
        }
    };

    const incrementSize = (index) => {
        if(documentELement.sections[index].inputs.length){
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].inputs[0].options.size = newSections[index].inputs[0].options.size + 1;

                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].options.size = newSections[index].options.size + 1;

                return { ...prevDocument, sections: newSections };
            });
        }
    };
    const decrementSize = (index) => {
        if(documentELement.sections[index].inputs.length){
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentSize = newSections[index].inputs[0].options.size;

                newSections[index].inputs[0].options.size = Math.max(currentSize - 1, 1);

                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                const currentSize = newSections[index].options.size;

                newSections[index].options.size = Math.max(currentSize - 1, 1);

                return { ...prevDocument, sections: newSections };
            });
        }
    };
    const handleSizeChange = (event, index) => {
        const newSize = Number(event.target.value)
        if(documentELement.sections[index].inputs.length){
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].inputs[0].options.size = newSize;
                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].options.size = newSize;
                return { ...prevDocument, sections: newSections };
            });
        }
    };

    const setTextColor = (index, color) => {
        if(documentELement.sections[index].inputs.length){
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].inputs[0].options.color = color;
                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].options.color = color;
                return { ...prevDocument, sections: newSections };
            });
        }
    };
    const toggleColorPicker = (index) => {
        setColorPickerVisible(colorPickerVisible === index ? null : index);
    };

    const handleNewLineTextChange = (index, event) => {
        const isChecked = event.target.checked;
        if(documentELement.sections[index].inputs.length){
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].inputs[0].next_new_line = isChecked;
                return { ...prevDocument, sections: newSections };
            });
        } else {
            setDocumentELement((prevDocument) => {
                const newSections = [...prevDocument.sections];
                newSections[index].next_new_line = isChecked;
                return { ...prevDocument, sections: newSections };
            });
        }
        console.log(documentELement.sections)
    };

    const addNewSection = () => {
        const newSection = {
            texts: {
                ru: '',
                en: '',
                uz: '',
                uz_l: '',
            },
            options: {
                align: "center",
                color: "#000000",
                size: 20,
                weight: 600,
                style: "bold"
            },
            next_new_line: true,
            order: documentELement.sections.length ? documentELement.sections[documentELement.sections.length - 1].order + 1 : 1,
            inputs: []
        };

        setDocumentELement((prevDocument) => ({
            ...prevDocument,
            sections: [...prevDocument.sections, newSection]
        }));
    }
    const removeSection = (index) => {
        setDocumentELement((prevDocument) => {
            const newSections = prevDocument.sections.filter((_, i) => i !== index);

            return {
                ...prevDocument,
                sections: newSections
            };
        });
    };

    const toggleDynamic = (index, isChecked) => {
        setDocumentELement((prevDocument) => {
            const newSections = [...prevDocument.sections];
            const section = newSections[index];

            if (isChecked) {
                section.inputs = [
                    {
                        texts: { ...section.texts },
                        options: { ...section.options },
                        next_new_line: section.next_new_line,
                        order: section.order,
                        value: '',
                        isDynamic: true
                    },
                ];
                section.texts = {};
            } else {
                const input = section.inputs[0];
                if (input) {
                    section.texts = { ...input.texts };
                    section.options = { ...input.options };
                    section.next_new_line = input.next_new_line;
                    section.order = input.order;
                    section.inputs = [];
                    section.isDynamic = false
                }
            }

            return { ...prevDocument, sections: newSections };
        });
    };

    const handleInputFocus = (index, indexInput) => {
        setActiveInput(`${index}`);
        const paragraph = document.getElementById(`${index}`);
        // if (paragraph && window.innerWidth >= 767) {
        //     paragraph.scrollIntoView({
        //         behavior: 'smooth',
        //         block: 'center',
        //         inline: 'nearest'
        //     });
        // }
    };
    const handleInputBlur = (event) => {
        if (!event.relatedTarget || !event.relatedTarget.closest('.format-toolbar')) {
            setActiveInput(null);
        }
    };

    const handleChangeDocument = () => {
        dispatch(editDocumentInfo({form: transformObject(documentInfo, documentELement), category_id: category_id, id: documentELement.id}, navigate));
    };

    const transformObject = (initialObject, finalObject) => {
        const transformed = {
            names: { ...finalObject.names },
            subcategory_id: Number(finalObject.subcategory_id) || 0,
            order: finalObject.order || 0,
            new_sections: [],
            deleted_section_ids: [],
            sections: [],
        };

        // удаленные секции
        const deletedSectionIds = initialObject.sections
            .map(section => section.id)
            .filter(id => !finalObject.sections.some(finalSection => finalSection.id === id));

        transformed.deleted_section_ids = deletedSectionIds;


        finalObject.sections.forEach(section => {
            const initialSection = initialObject.sections.find(initSection => initSection.id === section.id);

            const transformedSection = {
                texts: { ...section.texts },
                options: { ...section.options },
                next_new_line: section.next_new_line,
                order: section.order || 0,
                inputs: section.inputs.map(input => ({
                    texts: input.texts || {},
                    options: {
                        align: input.options.align || "string",
                        color: input.options.color || "string",
                        size: input.options.size || 0,
                        weight: input.options.weight || 0,
                        style: input.options.style || "string",
                        type: input.options.type || "string"
                    },
                    next_new_line: input.next_new_line,
                    order: input.order || 0,
                    id: input.id || 0
                })),
                id: section.id || 0,
                deleted_input_ids: [],
                new_inputs: []
            };

            // Если у нас есть начальная секция, проверяем удаленные инпуты
            if (initialSection) {
                const deletedInputIds = initialSection.inputs
                    .map(input => input.id)
                    .filter(id => !section.inputs.some(finalInput => finalInput.id === id));

                if (deletedInputIds.length > 0) {
                    transformedSection.deleted_input_ids = deletedInputIds; // Устанавливаем удаленные ID для этой секции
                }
            }

            // Проверяем, если у секции изначально не было inputs, но они появились потом
            if ((!initialSection?.inputs || initialSection.inputs.length === 0) && section.inputs.length > 0) {
                transformedSection.new_inputs = section.inputs.map(input => ({
                    texts: input.texts || {},
                    options: {
                        align: input.options.align || "string",
                        color: input.options.color || "string",
                        size: input.options.size || 0,
                        weight: input.options.weight || 0,
                        style: input.options.style || "string",
                        type: input.options.type || "string"
                    },
                    next_new_line: input.next_new_line,
                    order: input.order || 0,
                    id: input.id || 0
                }));
            }

            transformed.sections.push(transformedSection);
        });

        // новыеч секций
        const newSections = finalObject.sections.filter(section => !section.id);
        transformed.new_sections = newSections.map(section => ({
            texts: { ...section.texts },
            options: { ...section.options },
            next_new_line: section.next_new_line,
            order: section.order || 0,
            inputs: section.inputs.map(input => ({
                texts: input.texts || {},
                options: {
                    align: input.options.align || "string",
                    color: input.options.color || "string",
                    size: input.options.size || 0,
                    weight: input.options.weight || 0,
                    style: input.options.style || "string",
                    type: input.options.type || "string"
                },
                next_new_line: input.next_new_line,
                order: input.order || 0
            }))
        }));

        return transformed;
    }

    // start drag and drop
    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const newSections = Array.from(documentELement.sections);

        const [removed] = newSections.splice(source.index, 1);

        newSections.splice(destination.index, 0, removed);

        const updatedSections = newSections.map((section, index) => ({
            ...section,
            order: index + 1,
        }));

        setDocumentELement((prevDocument) => ({
            ...prevDocument,
            sections: updatedSections,
        }));
    };
    // end drag and drop

    return (
        <section id={'preview'} className={'pt-[50px]'}>
            <div className="container !ml-0">
                <div className={'flex flex-col items-center mt-[40px] gap-10'}>
                    <p className={'text-center font-bold text-xl'}>
                        Название документа:
                    </p>
                    <div className={'grid grid-cols-2 gap-5 items-center'}>
                        {documentInfo && languages.map(({code, label, img}, langIndex) => (
                            <div
                                key={code}
                                className={'bg-white p-3 rounded-lg'}
                            >
                                <MainInput
                                    id={`names-${code}`}
                                    name={`names-${code}`}
                                    label={`Name ${code}`}
                                    type="text"
                                    required={true}
                                    value={documentELement.names[code]}
                                    onChange={(event) => changeNameInputs(event, code)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'relative mt-6 flex gap-[10px] max_lg:flex-col p-6 bg-white rounded-lg'}>
                    <div
                        className={'w-5/12  bg-white border shadow-adminConstructor max_lg:w-full rounded-lg flex flex-col gap-[16px]'}>
                        <div
                            className={'py-4 w-full bg-palatinate bg-opacity-10 rounded-t-lg flex items-center justify-center gap-2'}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.37604 18.1159C3.42198 17.7024 3.44496 17.4957 3.50751 17.3025C3.56301 17.131 3.64143 16.9679 3.74064 16.8174C3.85245 16.6478 3.99955 16.5008 4.29373 16.2066L17.5 3.0003C18.6046 1.89573 20.3954 1.89573 21.5 3.0003C22.6046 4.10487 22.6046 5.89573 21.5 7.0003L8.29373 20.2066C7.99954 20.5008 7.85245 20.6478 7.68289 20.7597C7.53245 20.8589 7.36929 20.9373 7.19785 20.9928C7.0046 21.0553 6.79786 21.0783 6.38437 21.1243L3 21.5003L3.37604 18.1159Z"
                                    stroke="#2F3EDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={'font-bold text-palatinate'}>
                                Редактируемая область
                            </p>
                        </div>
                        <div className={'px-[18px] py-8'}>
                            <div className={'flex items-center justify-between mb-4'}>
                                <p>
                                    Поля для ввода
                                </p>
                                <div className={'flex items-center gap-2'}>
                                    <div className={'flex items-center gap-2 py-1 px-3.5 bg-romance rounded-lg'}>
                                        <p className={'text-sm font-medium'}>
                                            Нажать чтобы увидеть
                                        </p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M5.99967 0.832031C6.27582 0.832031 6.49967 1.05589 6.49967 1.33203V2.33203C6.49967 2.60817 6.27582 2.83203 5.99967 2.83203C5.72353 2.83203 5.49967 2.60817 5.49967 2.33203V1.33203C5.49967 1.05589 5.72353 0.832031 5.99967 0.832031ZM2.31279 2.31181C2.50805 2.11655 2.82463 2.11655 3.01989 2.31181L3.727 3.01892C3.92226 3.21418 3.92226 3.53076 3.727 3.72602C3.53174 3.92129 3.21516 3.92129 3.01989 3.72602L2.31279 3.01892C2.11753 2.82366 2.11753 2.50707 2.31279 2.31181ZM9.72703 2.31182C9.92229 2.50708 9.92229 2.82367 9.72702 3.01892L9.01989 3.72603C8.82462 3.92129 8.50804 3.92128 8.31278 3.72602C8.11752 3.53075 8.11753 3.21417 8.31279 3.01891L9.01993 2.3118C9.21519 2.11655 9.53178 2.11655 9.72703 2.31182ZM5.31279 5.31181C5.44537 5.17923 5.64099 5.13197 5.81948 5.18939L14.338 7.93013C14.5039 7.98349 14.63 8.11933 14.6709 8.28867C14.7118 8.45802 14.6616 8.63646 14.5384 8.75965L12.966 10.332L15.0199 12.3859C15.2152 12.5811 15.2152 12.8977 15.0199 13.093L13.094 15.0189C12.8987 15.2142 12.5821 15.2142 12.3869 15.0189L10.333 12.9651L8.76063 14.5375C8.63743 14.6606 8.459 14.7108 8.28965 14.6699C8.1203 14.629 7.98446 14.5029 7.9311 14.337L5.19037 5.8185C5.13294 5.64001 5.1802 5.44439 5.31279 5.31181ZM6.44073 6.43976L8.63234 13.2515L9.97945 11.9044C10.1747 11.7091 10.4913 11.7091 10.6866 11.9044L12.7404 13.9583L13.9592 12.7394L11.9054 10.6856C11.7101 10.4903 11.7101 10.1737 11.9054 9.97848L13.2525 8.63136L6.44073 6.43976ZM0.833008 5.9987C0.833008 5.72256 1.05687 5.4987 1.33301 5.4987H2.33301C2.60915 5.4987 2.83301 5.72256 2.83301 5.9987C2.83301 6.27484 2.60915 6.4987 2.33301 6.4987H1.33301C1.05687 6.4987 0.833008 6.27484 0.833008 5.9987ZM3.72699 8.3118C3.92226 8.50706 3.92227 8.82365 3.72701 9.01891L3.0199 9.72604C2.82464 9.92131 2.50806 9.92132 2.31279 9.72606C2.11753 9.5308 2.11752 9.21422 2.31278 9.01895L3.01989 8.31182C3.21515 8.11655 3.53173 8.11655 3.72699 8.3118Z"
                                                  fill="black"/>
                                        </svg>
                                    </div>
                                    <button className={'tooltip'}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.81848 6.75C6.9948 6.24875 7.34284 5.82608 7.80098 5.55685C8.25908 5.28762 8.79765 5.18921 9.32138 5.27903C9.8451 5.36887 10.3201 5.64114 10.6623 6.04765C11.0045 6.45415 11.1918 6.96864 11.191 7.5C11.191 9 8.94098 9.75 8.94098 9.75M9.00098 12.75H9.00848M16.501 9C16.501 13.1421 13.1431 16.5 9.00098 16.5C4.85884 16.5 1.50098 13.1421 1.50098 9C1.50098 4.85786 4.85884 1.5 9.00098 1.5C13.1431 1.5 16.501 4.85786 16.501 9Z"
                                                stroke="#2F3EDE" strokeWidth="1.2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span className="tooltiptext">
                                            Кликните, чтобы увидеть, над каким элементом в документе, ведётся редактирование.
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className={'h-[600px] max_md:w-[762px] overflow-y-auto overflow-x-hidden'}>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="sections">
                                        {(provided) => (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                            >
                                                {
                                                    documentELement.sections.map((section, index) => (
                                                        section.inputs.length ?
                                                            section.inputs.map((input, indexInput) => (
                                                                <Draggable key={index} draggableId={`section-${index}`} index={index}>
                                                                    {(provided) => (
                                                                        <div
                                                                            key={indexInput}
                                                                            className={'mb-10'}
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <div
                                                                                className={'px-4 py-6 border bg-palatinate bg-opacity-5 rounded-lg mb-2 flex flex-col gap-4'}
                                                                            >
                                                                                {languages.map(({code, label, img}, langIndex) => (
                                                                                    <TextInput
                                                                                        key={`text-${code}-${index}`}
                                                                                        activeInput={activeInput}
                                                                                        index={index}
                                                                                        code={code}
                                                                                        label={label}
                                                                                        img={img}
                                                                                        value={input.texts[code]}
                                                                                        onChange={(event) => changeTextInputs(event, index, code)}
                                                                                        onFocus={() => handleInputFocus(index)}
                                                                                        onBlur={(event)=> handleInputBlur(event)}
                                                                                    />
                                                                                ))}
                                                                                <CSSTransition
                                                                                    in={activeInput === index.toString()}
                                                                                    timeout={300}
                                                                                    classNames="fade-blur"
                                                                                    unmountOnExit
                                                                                >
                                                                                    <FormattingToolbar
                                                                                        index={index}
                                                                                        options={input.options}
                                                                                        setBoldTexts={setBoldTexts}
                                                                                        setItalicTexts={setItalicTexts}
                                                                                        setAlignTexts={setAlignTexts}
                                                                                        handleSizeChange={handleSizeChange}
                                                                                        incrementSize={incrementSize}
                                                                                        decrementSize={decrementSize}
                                                                                        setTextColor={setTextColor}
                                                                                        toggleColorPicker={toggleColorPicker}
                                                                                        colorPickerVisible={colorPickerVisible}
                                                                                        colorPickerRef={colorPickerRef}
                                                                                    />
                                                                                </CSSTransition>
                                                                            </div>
                                                                            <SectionControls
                                                                                key={index}
                                                                                index={index}
                                                                                section={input}
                                                                                handleNewLineTextChange={handleNewLineTextChange}
                                                                                removeSection={removeSection}
                                                                                toggleDynamic={toggleDynamic}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            ))
                                                            :
                                                            <Draggable key={index} draggableId={`section-${index}`} index={index}>
                                                                {(provided) => (
                                                                    <div
                                                                        key={index}
                                                                        className={'mb-10'}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <div
                                                                            className={'px-4 py-6 border bg-palatinate bg-opacity-5 rounded-lg mb-2 flex flex-col gap-4'}
                                                                        >
                                                                            {languages.map(({code, label, img}, langIndex) => (
                                                                                <TextInput
                                                                                    key={`text-${code}-${index}`}
                                                                                    activeInput={activeInput}
                                                                                    index={index}
                                                                                    code={code}
                                                                                    label={label}
                                                                                    img={img}
                                                                                    value={section.texts[code]}
                                                                                    onChange={(event) => changeTextInputs(event, index, code)}
                                                                                    onFocus={() => handleInputFocus(index)}
                                                                                    onBlur={(event)=> handleInputBlur(event)}
                                                                                />
                                                                            ))}
                                                                            <CSSTransition
                                                                                in={activeInput === index.toString()}
                                                                                timeout={300}
                                                                                classNames="fade-blur"
                                                                                unmountOnExit
                                                                            >
                                                                                <FormattingToolbar
                                                                                    index={index}
                                                                                    options={documentELement.sections[index].options}
                                                                                    setBoldTexts={setBoldTexts}
                                                                                    setItalicTexts={setItalicTexts}
                                                                                    setAlignTexts={setAlignTexts}
                                                                                    handleSizeChange={handleSizeChange}
                                                                                    incrementSize={incrementSize}
                                                                                    decrementSize={decrementSize}
                                                                                    setTextColor={setTextColor}
                                                                                    toggleColorPicker={toggleColorPicker}
                                                                                    colorPickerVisible={colorPickerVisible}
                                                                                    colorPickerRef={colorPickerRef}
                                                                                />
                                                                            </CSSTransition>
                                                                        </div>
                                                                        <SectionControls
                                                                            key={index}
                                                                            index={index}
                                                                            section={section}
                                                                            handleNewLineTextChange={handleNewLineTextChange}
                                                                            removeSection={removeSection}
                                                                            toggleDynamic={toggleDynamic}
                                                                        />
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                    ))
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                {/* start new section*/}
                                <button
                                    onClick={addNewSection}
                                    className={'flex items-center justify-center flex-col mx-auto gap-2 hover:text-palatinate'}
                                >
                                    <div
                                        className={'w-[54px] h-[54px] bg-romance rounded-lg flex items-center justify-center'}>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M8.00098 0.5C8.55326 0.5 9.00098 0.947715 9.00098 1.5V7.5H15.001C15.5533 7.5 16.001 7.94772 16.001 8.5C16.001 9.05228 15.5533 9.5 15.001 9.5H9.00098V15.5C9.00098 16.0523 8.55326 16.5 8.00098 16.5C7.44869 16.5 7.00098 16.0523 7.00098 15.5V9.5H1.00098C0.448692 9.5 0.000976562 9.05228 0.000976562 8.5C0.000976562 7.94772 0.448692 7.5 1.00098 7.5H7.00098V1.5C7.00098 0.947715 7.44869 0.5 8.00098 0.5Z"
                                                  fill="#2F3EDE"/>
                                        </svg>
                                    </div>
                                    <p className={'max-w-[120px] font-medium text-sm transition-all ease-in-out duration-300'}>
                                        Создать новую строку
                                    </p>
                                </button>
                                {/* end new section*/}
                            </div>
                        </div>
                    </div>
                    <div
                        className={'document relative w-8/12 max_lg:w-full max_lg:overflow-auto rounded-lg bg-romance p-[18px]'}>
                        <div
                            id="document"
                            ref={contentRef}
                            className={'times h-[700px] max_md:w-[762px] overflow-y-auto overflow-x-hidden bg-white rounded-lg p-[24px]'}
                        >
                            {
                                documentELement.sections.map((section, index) => (
                                    section.inputs.length ?
                                        section.inputs.map((input, indexInput) => (
                                            input.next_new_line ?
                                                <p
                                                    className={'transition-all ease-in-out duration-300'}
                                                    id={`${index}`}
                                                    key={`${index}`}
                                                    style={{
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: input.options.color,
                                                        textAlign: input.options.align,
                                                        fontSize: input.options.size,
                                                        fontStyle: input.options.style,
                                                        fontWeight: input.options.weight,
                                                        margin: `${input.next_new_line ? '' : '0 5px'}`,
                                                        backgroundColor: activeInput === `${index}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
                                                    }}
                                                >
                                                    {input.texts[i18n.language]}
                                                </p>
                                                :
                                                <span
                                                    className={'transition-all ease-in-out duration-300'}
                                                    id={`${index}`}
                                                    key={`${index}`}
                                                    style={{
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: input.options.color,
                                                        textAlign: input.options.align,
                                                        fontSize: input.options.size,
                                                        fontWeight: input.options.weight,
                                                        padding: `${input.next_new_line ? '' : '0 5px'}`,
                                                        fontStyle: input.options.style,
                                                        fontFamily: "Times New Roman",
                                                        backgroundColor: activeInput === `${index}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
                                                    }}
                                                >
                                                    &nbsp;{input.texts[i18n.language]}&nbsp;
                                                </span>
                                        ))
                                        :
                                        section.texts[i18n.language]
                                            ?
                                            section.next_new_line
                                                ?
                                                <p
                                                    className={'transition-all ease-in-out duration-300'}
                                                    id={index}
                                                    key={index}
                                                    style={{
                                                        whiteSpace: "pre-line",
                                                        width: `100%`,
                                                        marginTop: "5px",
                                                        color: section.options.color,
                                                        textAlign: section.options.align,
                                                        fontSize: section.options.size,
                                                        fontStyle: section.options.style,
                                                        fontWeight: section.options.weight,
                                                        display: `${section.next_new_line ? 'block' : 'inline'}`,
                                                        backgroundColor: activeInput === `${index}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
                                                    }}
                                                >
                                                    {section.texts[i18n.language]}
                                                </p>
                                                :
                                                <span
                                                    className={'transition-all ease-in-out duration-300'}
                                                    id={index}
                                                    key={index}
                                                    style={{
                                                        whiteSpace: "pre-line",
                                                        marginTop: "5px",
                                                        color: section.options.color,
                                                        textAlign: section.options.align,
                                                        fontSize: section.options.size,
                                                        fontWeight: section.options.weight,
                                                        fontStyle: section.options.style,
                                                        fontFamily: "Times New Roman",
                                                        backgroundColor: activeInput === `${index}` ? 'rgba(47, 62, 222, 0.2)' : 'transparent'
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
                <MainButton
                    onClick={handleChangeDocument}
                    className={'my-5 block mx-auto'}
                    content={'Сохранить'}
                />
            </div>
        </section>
    );
};

export default EditDocumentConstructor;