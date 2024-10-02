import React from 'react';

const TextInput = ({ code, label, img, value, activeInput, index, onChange, onFocus, onBlur }) => (
    <label className={`relative rounded-lg transition-all ease-in-out duration-300 ${activeInput === index.toString() ? 'shadow-input': ''}`}>
        <input
            value={value}
            onChange={onChange}
            className="bg-white outline-0 rounded-lg p-3 pr-16 w-full shadow-documentInput"
            placeholder="Введите текст..."
            type="text"
            onFocus={onFocus}
            onBlur={onBlur}
        />
        <div className="flex items-center gap-1 absolute top-3 right-5">
            <img src={img} alt={code} />
            <p>{label}</p>
        </div>
        {code === 'uz_l' && (
            <>
                <svg className={'absolute -top-[18px] left-0'}
                     width="2"
                     height="20"
                     viewBox="0 0 2 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1 4.37114e-08C1.55228 1.95703e-08 2 0.447715 2 1L2 5.5C2 6.05228 1.55229 6.5 1 6.5C0.447715 6.5 2.61354e-08 6.05229 1.99427e-09 5.5L-1.94707e-07 1C-2.18848e-07 0.447715 0.447715 6.78526e-08 1 4.37114e-08ZM1 13.5C1.55229 13.5 2 13.9477 2 14.5L2 19C2 19.5523 1.55229 20 1 20C0.447716 20 6.1624e-07 19.5523 5.92099e-07 19L3.95397e-07 14.5C3.71256e-07 13.9477 0.447716 13.5 1 13.5Z"
                          fill="#2F3EDE"/>
                </svg>
                <svg className={'absolute -top-[18px] right-0'}
                     width="2"
                     height="20"
                     viewBox="0 0 2 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1 4.37114e-08C1.55228 1.95703e-08 2 0.447715 2 1L2 5.5C2 6.05228 1.55229 6.5 1 6.5C0.447715 6.5 2.61354e-08 6.05229 1.99427e-09 5.5L-1.94707e-07 1C-2.18848e-07 0.447715 0.447715 6.78526e-08 1 4.37114e-08ZM1 13.5C1.55229 13.5 2 13.9477 2 14.5L2 19C2 19.5523 1.55229 20 1 20C0.447716 20 6.1624e-07 19.5523 5.92099e-07 19L3.95397e-07 14.5C3.71256e-07 13.9477 0.447716 13.5 1 13.5Z"
                          fill="#2F3EDE"/>
                </svg>
            </>
        )}
    </label>
);

export default TextInput;