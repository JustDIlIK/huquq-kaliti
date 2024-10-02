import React from 'react';

const SectionControls = ({ index, section, handleNewLineTextChange, removeSection, toggleDynamic }) => {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between">
                <button
                    onClick={() => removeSection(index)}
                    className="text-sm bg-romance w-[32px] h-[32px] font-medium flex items-center justify-center rounded-lg gap-2"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 4.5V3.9C12 3.05992 12 2.63988 11.8365 2.31902C11.6927 2.03677 11.4632 1.8073 11.181 1.66349C10.8601 1.5 10.4401 1.5 9.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81902 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31902C6 2.63988 6 3.05992 6 3.9V4.5M7.5 8.625V12.375M10.5 8.625V12.375M2.25 4.5H15.75M14.25 4.5V12.9C14.25 14.1602 14.25 14.7901 14.0048 15.2715C13.7891 15.6949 13.4449 16.0391 13.0215 16.2548C12.5401 16.5 11.9101 16.5 10.65 16.5H7.35C6.08988 16.5 5.45982 16.5 4.97852 16.2548C4.55516 16.0391 4.21095 15.6949 3.99524 15.2715C3.75 14.7901 3.75 14.1602 3.75 12.9V4.5"
                            stroke="#EB5757"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <div className="flex items-center gap-2">
                    <label className="bg-romance rounded-lg py-1 px-3">
                        <input
                            onChange={(event) => handleNewLineTextChange(index, event)}
                            value={section.next_new_line}
                            checked={section.next_new_line}
                            type="checkbox"
                        />
                        <span className="checkmark"></span>
                        <span className="pl-2 font-medium">с новой строки</span>
                    </label>
                    <label htmlFor={`toggle-dynamic-${index}`} className="bg-romance rounded-lg py-1 px-3">
                        <input
                            id={`toggle-dynamic-${index}`}
                            type="checkbox"
                            checked={section.isDynamic}
                            onChange={(e) => toggleDynamic(index, e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        <span className="pl-2 font-medium">динамический</span>
                    </label>
                    <button className="tooltip">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_511_5748)">
                                <path
                                    d="M6.81848 6.75C6.9948 6.24875 7.34284 5.82608 7.80098 5.55685C8.25908 5.28762 8.79765 5.18921 9.32138 5.27903C9.8451 5.36887 10.3201 5.64114 10.6623 6.04765C11.0045 6.45415 11.1918 6.96864 11.191 7.5C11.191 9 8.94098 9.75 8.94098 9.75M9.00098 12.75H9.00848M16.501 9C16.501 13.1421 13.1431 16.5 9.00098 16.5C4.85884 16.5 1.50098 13.1421 1.50098 9C1.50098 4.85786 4.85884 1.5 9.00098 1.5C13.1431 1.5 16.501 4.85786 16.501 9Z"
                                    stroke="#777777"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_511_5748">
                                    <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="tooltiptext">
                          Создав динамическую строку, вы зададите свойство тексту, который не подлежит изменению для пользователя.
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionControls;