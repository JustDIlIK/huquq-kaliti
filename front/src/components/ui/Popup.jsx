import React from 'react';
import {CSSTransition} from "react-transition-group";
import {useTranslation} from "react-i18next";

const Popup = ({ show, children,success, ...props }) => {
    const nodeRef = React.useRef(null);
    const {t} = useTranslation();
    return (
        <CSSTransition
            in={show}
            timeout={200}
            classNames="popup-slide"
            nodeRef={nodeRef}
            unmountOnExit
        >
            <div ref={nodeRef} className={`popup flex items-center gap-[8px] max_lit:!w-full ${success ? '!bg-green-700' : ''}`}>
                {
                    success ?
                        <svg width="30px" height="30px" fill="#ffffff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"><title>success-standard-line</title>
                                <path className="clr-i-outline clr-i-outline-path-1"
                                      d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path>
                                <path className="clr-i-outline clr-i-outline-path-2"
                                      d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"></path>
                                <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
                            </g>
                        </svg>
                        :
                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             fill="#fff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"></path>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                            </g>
                        </svg>
                }
                <div className="popup-content">
                    {t(children)}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Popup;