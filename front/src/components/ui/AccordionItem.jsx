import React, {useState} from 'react';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import {useTranslation} from "react-i18next";

const AccordionItem = ({question, answer, className, bold, full, ...props}) => {
    const [open, setOpen] = useState(false);
    function  openAccordion(){
        setOpen(!open);
    }
    return (
        <Accordion className={`border-none !shadow-sm !p-0 !rounded-[8px] !h-fit ${className} ${ full && open ? '!bg-palatinate !bg-opacity-10': '!bg-romance'}`}>
            <AccordionSummary
                className={`text-lg ${bold ? 'font-bold' : 'font-medium'}`}
                aria-controls="panel1-content"
                id="panel1-header"
                onClick={openAccordion}
            >
                <p className={`${ full && open ? 'font-bold' : ''} ${full ? '!text-xl': 'max_lg:pr-10'}`}>
                    {question}
                </p>
                {
                    full ?
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L8 8.5L15 1.5" stroke={`${open ? '#2F3EDE' : '#6B6B6B'}`} strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        :
                        <div
                            className={`w-[32px] h-[32px] max_lg:absolute max_lg:top-3 max_lg:right-2 rounded-full flex items-center justify-center transition-all ease-in-out duration-300 ${open ? '!bg-palatinate' : '!bg-romance'}`}>
                            <svg
                                className={`transition-all ease-in-out duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
                                width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path className={'transition-all ease-in-out duration-300'} d="M6.99988 1.23999V12.76"
                                      stroke={`${open ? 'white' : '#2F3EDE'}`} strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path className={'transition-all ease-in-out duration-300'} d="M1.23975 7H12.7597"
                                      stroke={`${open ? 'white' : '#2F3EDE'}`} strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                }
            </AccordionSummary>
            <AccordionDetails className={`font-medium ${full ? 'w-full' : 'w-6/12 max_lg:w-full'}`}>
                {answer}
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionItem;