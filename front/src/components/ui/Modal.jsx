import React, {useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

const Modal = ({isOpen, onClose, children}) => {

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="fade-blur"
            unmountOnExit
        >
            <div
                onClick={handleBackdropClick}
                className={`fixed backdrop-blur-sm inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
            >
                <div
                    className={`bg-white p-8 rounded-lg shadow-lg max-w-fit w-full relative mx-6`}
                >
                    <button
                        className="absolute top-6 right-6 text-lightSlate text-3xl text-center flex items-center justify-center bg-romance w-8 h-8 pb-1 rounded-full"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Modal;