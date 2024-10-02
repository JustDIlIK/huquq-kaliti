import React from 'react';
import SearchContact from "./ui/SearchContact.jsx";
import ContactItem from "./ui/ContactItem.jsx";

const LeftSide = ({contacts, changeChat, activeUser}) => {
    return (
        <div className={'flex flex-col w-3/12 bg-white border-r rounded-l-lg overflow-hidden'}>
            <div className={'px-5 py-6 flex items-center justify-center gap-3 bg-alabaster'}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.09436 10.2288C5.03221 9.8282 4.99996 9.4179 4.99996 9C4.99996 4.58172 8.60525 1 13.0526 1C17.4999 1 21.1052 4.58172 21.1052 9C21.1052 9.9981 20.9213 10.9535 20.5852 11.8345C20.5154 12.0175 20.4804 12.109 20.4646 12.1804C20.4489 12.2512 20.4428 12.301 20.4411 12.3735C20.4394 12.4466 20.4493 12.5272 20.4692 12.6883L20.8717 15.9585C20.9153 16.3125 20.9371 16.4895 20.8782 16.6182C20.8266 16.731 20.735 16.8205 20.6211 16.8695C20.4911 16.9254 20.3146 16.8995 19.9617 16.8478L16.7765 16.3809C16.6101 16.3565 16.527 16.3443 16.4512 16.3448C16.3763 16.3452 16.3245 16.3507 16.2511 16.3661C16.177 16.3817 16.0823 16.4172 15.893 16.4881C15.0097 16.819 14.0524 17 13.0526 17C12.6344 17 12.2237 16.9683 11.8227 16.9073M6.63158 21C9.5965 21 12 18.5376 12 15.5C12 12.4624 9.5965 10 6.63158 10C3.66668 10 1.26316 12.4624 1.26316 15.5C1.26316 16.1106 1.36028 16.6979 1.53955 17.2467C1.61533 17.4787 1.65322 17.5947 1.66566 17.6739C1.67864 17.7567 1.68091 17.8031 1.67608 17.8867C1.67145 17.9668 1.65141 18.0573 1.61134 18.2383L1 21L3.9948 20.591C4.15827 20.5687 4.24 20.5575 4.31137 20.558C4.38652 20.5585 4.42641 20.5626 4.50011 20.5773C4.5701 20.5912 4.67416 20.6279 4.88227 20.7014C5.43059 20.8949 6.01911 21 6.63158 21Z"
                        stroke="#2F3EDE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className={'text-palatinate font-bold'}>
                    Юристы
                </p>
            </div>
            <SearchContact/>
            {
                contacts && contacts.map((contact, index) => (
                    <ContactItem
                        key={index}
                        index={index}
                        contact={contact}
                        activeUser={activeUser}
                        changeChat={(contact) => changeChat(contact)}
                    />
                ))
            }
        </div>
    );
};

export default LeftSide;