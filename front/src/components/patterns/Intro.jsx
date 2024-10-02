import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../ui/Breadcrumbs.jsx";
import {useTranslation} from "react-i18next";
import MainTitle from "../ui/MainTitle.jsx";
import PatternItem from "./PatternItem.jsx";
import PatternDoc from "./ui/PatternDoc.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loadDocumentCategories} from "../../store/documents/documentsActions.js";
import {MAIN_ROUTE} from "../../assets/utils.js";

const Intro = () => {
    const links = [
        { label: 'Main', path: MAIN_ROUTE },
        { label: 'Select a template '}
    ]
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.documents.categories);
    const [documents, setDocuments] = useState([]);
    const [activeId, setActiveId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDocuments, setFilteredDocuments] = useState([]);

    useEffect(() => {
        dispatch(loadDocumentCategories({page: 1, limit: 1000}))
    }, []);

    const changeDocuments = (documents, id) => {
        setDocuments(documents)
        setActiveId(id)
        setSearchTerm('');
    }

    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setActiveId('')

        const result = categories.data.flatMap(category =>
            category.subcategories.flatMap(subcategory =>
                subcategory.documents.filter(doc =>
                    doc.names.ru.toLowerCase().includes(value)
                )
            )
        );

        setFilteredDocuments(result);
    };

    return (
        <section id={'#intro'} className={'pt-[170px] pb-[112px]'}>
            <div className="container">
                <Breadcrumbs
                    className={'mb-10'}
                    links={links}
                    dark={true}
                />
                <MainTitle
                    title={'Select a template'}
                />
                <div className={'mt-[40px] min-h-[400px] border-2 border-romance rounded-lg overflow-hidden flex max_lg:flex-col'}>
                    <div className={'w-4/12 bg-romance p-[24px] max_lg:w-full'}>
                        {/*start search*/}
                        <label className={'relative'} htmlFor="pattern-input">
                            <input
                                className={'p-3 pl-4 outline-0 w-full rounded-lg pr-12'}
                                id={'pattern-input'}
                                placeholder={'Поиск по шаблонам'}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                type="text"
                            />
                            <svg className={'absolute -top-1 right-3'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </label>
                        {/*end search*/}

                        <div className={'mt-3'}>
                            {
                                categories && categories.data && categories.data.map((category, index) => (
                                    <PatternItem
                                        key={index}
                                        activeId={activeId}
                                        category={category}
                                        changeDocuments={changeDocuments}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    {
                        searchTerm && !activeId ?
                            <div className={'w-8/12 max_lg:w-full p-[24px] flex items-start flex-col gap-[12px]'}>
                                {
                                    filteredDocuments.length > 0 && filteredDocuments.map((document, index) => (
                                        <PatternDoc
                                            key={index}
                                            item={document}
                                        />
                                    ))
                                }
                                {
                                    filteredDocuments && !filteredDocuments.length &&
                                    <div>
                                        Документов нет
                                    </div>
                                }
                            </div>
                            :
                            <div className={'w-8/12 max_lg:w-full p-[24px] flex items-start flex-col gap-[12px]'}>
                                {
                                    documents.length > 0 && documents.map((document, index) => (
                                        <PatternDoc
                                            key={index}
                                            item={document}
                                        />
                                    ))
                                }
                                {
                                    documents && !documents.length &&
                                    <div>
                                        Документов нет
                                    </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Intro;