import React from 'react';
import {formatText} from "../../../../../assets/utils.js";

const ContactItem = ({contact, index, changeChat, activeUser}) => {
    return (
        <div
            className={`contact__item flex items-center gap-2 border-b py-2.5 px-[8px] cursor-pointer hover:bg-greenWhite transition-all ease-in-out duration-300 ${activeUser.id === contact.id ? 'bg-greenWhite active' : ''}`}
            onClick={() => changeChat(contact)}
        >
            <div className={'w-[49px] h-[49px] relative shrink-0'}>
                <img className={'w-[49px] h-[49px]'} src="/img/logo.png" alt="img"/>
                <div className={'message__circle w-[12px] h-[12px] bg-tealishGreen rounded-full absolute top-0 right-0 border-[2px] border-white'}></div>
            </div>
            <div className={'flex flex-col relative w-full'}>
            <p className={'font-medium'}>
                    {contact.name}
                </p>
                <p>
                    {formatText('You: The weather will be perfect for the ri',20 )}
                </p>
                {/*<p className={'text-doveGrey'}>*/}
                {/*    {formatText('The weather will be perfect for the ri',25 )}*/}
                {/*</p>*/}
                <div className={'absolute bottom-0 -right-0 flex items-center gap-1'}>
                    <svg  width="16" height="10"
                         viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.9767 1.4693L11.0367 0.529297L6.81 4.75596L7.75 5.69596L11.9767 1.4693ZM14.8033 0.529297L7.75 7.58263L4.96333 4.80263L4.02333 5.74263L7.75 9.4693L15.75 1.4693L14.8033 0.529297ZM0.25 5.74263L3.97667 9.4693L4.91667 8.5293L1.19667 4.80263L0.25 5.74263Z"
                            fill="#005FFF"/>
                    </svg>
                    <p>
                        12/13/21
                    </p>
                </div>
                <div className={'bg-coral text-white rounded-full absolute -top-2 right-0 w-[22px] h-[22px] flex items-center justify-center'}>
                    2
                </div>
            </div>
        </div>
    );
};

export default ContactItem;