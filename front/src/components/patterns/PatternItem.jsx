import React, {useState} from 'react';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import {useTranslation} from "react-i18next";

const PatternItem = ({category, changeDocuments, activeId}) => {
    const {t, i18n} = useTranslation();
    const [open, setOpen] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    function openAccordion () {
        setOpen(!open);
        if(activeCategoryId){
            setActiveCategoryId(null)
        } else {
            setActiveCategoryId(category.id)
        }
    }
    return (
        <div className={'pattern__item'}>
            <Accordion className={'border-none !shadow-none !p-0 !rounded-[8px] !h-fit !bg-romance !text-mid'}>
                <AccordionSummary
                    className={`!font-medium transition-all ease-in-out duration-300 ${activeCategoryId === category.id ? '!text-palatinate !font-bold' : ''}`}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    onClick={openAccordion}
                >
                    {category.names[i18n.language]}
                    <svg className={`transition-all ease-in-out duration-300 ${open ? 'rotate-90' : ''}`} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.58334 7.79199L11 14.2087L17.4167 7.79199" stroke={`${open ? '#2F3EDE' : '#1E1E1E'}`} strokeWidth="1.4"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={'flex flex-col'}>
                        {
                            category.subcategories && category.subcategories.map((subcategory, subindex)=> (
                                <button
                                    key={subindex}
                                    onClick={()=> changeDocuments(subcategory.documents, subcategory.id, category.id)}
                                    className={`!ml-[24px] subpatern__item !text-start transition-all ease-in-out duration-300 ${activeId === subcategory.id ? 'text-palatinate font-medium' : ''}`}
                                >
                                    {subcategory.names[i18n.language]}
                                </button>
                            ))
                        }
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default PatternItem;