import React from 'react';
import {HexColorPicker} from "react-colorful";

const FormattingToolbar = ({ index, options, setBoldTexts, setItalicTexts, setAlignTexts, handleSizeChange, incrementSize, decrementSize, setTextColor, toggleColorPicker, colorPickerVisible, colorPickerRef }) => {
    return (
        <div
            className={'format-toolbar bg-white rounded-full shadow-documentInput py-2 px-[18px] flex items-center justify-between'}>
            <div
                className={'h-[16px] flex items-center gap-4 pr-4 border-r w-fit'}>
                <button onClick={() => setBoldTexts(index)}
                        className={`h-[23px] px-1 rounded-sm ${options.weight === '600' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/bold.svg" alt="bold"/>
                </button>
                <button onClick={() => setItalicTexts(index)}
                        className={`h-[23px] px-1 rounded-sm ${options.style === 'italic' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/italic.svg" alt="italic"/>
                </button>
            </div>
            <div className={'flex items-center gap-4 pl-4'}>
                <button onClick={() => setAlignTexts(index, 'left')}
                        className={`h-[23px] rounded-sm ${options.align === 'left' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/text-left.svg" alt="text-left"/>
                </button>
                <button onClick={() => setAlignTexts(index, 'center')}
                        className={`h-[23px] rounded-sm ${options.align === 'center' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/text-center.svg" alt="text-center"/>
                </button>
                <button onClick={() => setAlignTexts(index, 'right')}
                        className={`h-[23px] rounded-sm ${options.align === 'right' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/text-right.svg" alt="text-right"/>
                </button>
                <button onClick={() => setAlignTexts(index, 'justify')}
                        className={`h-[23px] rounded-sm ${options.align === 'justify' ? 'bg-palatinate bg-opacity-50' : ''}`}
                >
                    <img src="/img/text-contain.svg"
                         alt="text-contain"/>
                </button>
                <div className={'flex items-center gap-1'}>
                    <input
                        className={'w-[20px] outline-0 focus:outline-[0.2px] focus:outline-palatinate'}
                        value={options.size || ''}
                        min="1"
                        onChange={(event) => handleSizeChange(event, index)}
                        type="number"
                    />
                    <div className={'flex flex-col gap-[1px]'}>
                        <button onClick={() => incrementSize(index)}
                                className={'w-[15px] h-[15px] bg-romance rounded-sm flex items-center justify-center'}>
                            +
                        </button>
                        <button onClick={() => decrementSize(index)}
                                className={'w-[15px] h-[15px] bg-romance rounded-sm flex items-center justify-center'}>
                            -
                        </button>
                    </div>
                </div>
                <div id={'color-picker'} ref={colorPickerRef} className={'relative flex items-center justify-center'}>
                    <button onClick={() => toggleColorPicker(index)}
                            className={'relative w-[20px]'}>
                        <svg className={'m-auto'} width="21" height="20" viewBox="0 0 21 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.606 11.6667H8.196L6.86267 15H5.06767L10.0677 2.5H11.7343L16.7343 15H14.9393L13.606 11.6667ZM12.9393 10L10.901 4.90417L8.86267 10H12.9393ZM3.401 16.6667H18.401V18.3333H3.401V16.6667Z"
                                fill="#2C2C2C"/>
                            <rect width="15" height="1.66667"
                                  transform="translate(3.40002 16.6641)"
                                  fill={options.color}/>
                        </svg>
                    </button>
                    {colorPickerVisible === index && (
                        <div className={'absolute top-6 right-0 z-10'}>
                            <HexColorPicker
                                color={options.color}
                                onChange={(color) => setTextColor(index, color)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormattingToolbar;