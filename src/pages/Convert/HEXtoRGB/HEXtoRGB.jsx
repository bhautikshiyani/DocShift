import React, { useState } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { rgbStringToHsva } from '@uiw/color-convert'
import { LuCopy } from 'react-icons/lu'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import CustomTooltip from '@components/CustomTooltip';

const HEXtoRGB = () => {
    const [color, setColor] = useState("rgb(255, 255, 255)");
    const rgbtohsva = rgbStringToHsva(color)
    const parseRGB = (rgb) => {
        const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
        return result ? {
            r: parseInt(result[1], 10),
            g: parseInt(result[2], 10),
            b: parseInt(result[3], 10)
        } : null;
    };
    const rgbToHex = (r, g, b) => {
        const toHex = (c) => {
            const hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
    const rgb = parseRGB(color);
    const hexColor = rgb ? rgbToHex(rgb?.r, rgb?.g, rgb?.b) : "#ffffff";
    const updateRGB = (key, value) => {
        if (rgb) {
            const newRGB = { ...rgb, [key]: value };
            setColor(`rgb(${newRGB.r}, ${newRGB.g}, ${newRGB.b})`);
        }
    };
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };
    return (
        <div>
            <div>
                <div className='grid grid-cols-2'>
                    <div className='text-white'>
                        <input
                            type='text'
                            required
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className='rounded !min-w-lg !w-56 !max-w-lg gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        {/* {rgb && ( */}
                            <div>
                                <label className='text-[12px]'>Red (min: 0, max: 255):</label>
                                <div className='flex items-center'>
                                    <button onClick={() => updateRGB('r', Math.max(rgb?.r - 1, 0))}  className=' dark:text-white   w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] rounded-full text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
                                        <FaMinus />
                                    </button>
                                    <input className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] ' value={rgb?.r} onChange={(e) => updateRGB('r', Math.min(Math.max(parseInt(e.target.value), 0), 255))} step="1" max="255" min="0" type="number" autoComplete="off" tabIndex="0" />
                                    <button onClick={() => updateRGB('r', Math.min(rgb?.r + 1, 255))} className=' dark:text-white   w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] rounded-full text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className='text-[12px]'>Green (min: 0, max: 255):</label>
                                <div className='flex items-center'>
                                    <button
                                        onClick={() => updateRGB('g', Math.max(rgb?.g - 1, 0))}
                                        className='w-[40px] flex items-center justify-center h-[40px] text-black dark:text-white'>
                                        <FaMinus />
                                    </button>
                                    <input
                                        className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                                        value={rgb?.g}
                                        onChange={(e) => updateRGB('g', Math.min(Math.max(parseInt(e.target.value), 0), 255))}
                                        step="1"
                                        max="255"
                                        min="0"
                                        type="number"
                                        autoComplete="off"
                                        tabIndex="0" />
                                    <button
                                        onClick={() => updateRGB('g', Math.min(rgb?.g + 1, 255))}
                                        className='w-[40px] flex items-center justify-center h-[40px] text-black dark:text-white'>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className='text-[12px]'>Blue (min: 0, max: 255):</label>
                                <div className='flex items-center'>
                                    <button
                                        onClick={() => updateRGB('b', Math.max(rgb?.b - 1, 0))}
                                        className='w-[40px] flex items-center justify-center h-[40px] text-black dark:text-white'>
                                        <FaMinus />
                                    </button>
                                    <input className='rounded min-w-sm max-w-sm  gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                                        value={rgb?.b}
                                        onChange={(e) => updateRGB('b', Math.min(Math.max(parseInt(e.target.value), 0), 255))}
                                        step="1"
                                        max="255"
                                        min="0"
                                        type="number"
                                        autoComplete="off"
                                        tabIndex="0" />
                                    <button
                                        onClick={() => updateRGB('b', Math.min(rgb?.b + 1, 255))}
                                        className='w-[40px] flex items-center justify-center h-[40px] text-black dark:text-white'>
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                        {/* )} */}
                    </div>
                    <div className="text-black dark:text-white">
                        <div className='flex items-center gap-3'>
                            <strong>{hexColor}</strong>
                            <CustomTooltip
                                hexColor={'Copy'}
                                onCopy={onCopy}
                                contentClassName=" text-violet11 bg-white"
                                arrowClassName="fill-white"
                            >
                                <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                            </CustomTooltip>
                        </div>
                        <div className="color-converter__channels">
                            <div className="color-converter__channel">Red: <strong>{rgb ? rgb.r : 255}</strong></div>
                            <div className="color-converter__channel">Green: <strong>{rgb ? rgb.g : 255}</strong></div>
                            <div className="color-converter__channel">Blue: <strong>{rgb ? rgb.b : 255}</strong></div>
                        </div>
                    </div>
                </div>
                {/* <Wheel color={rgbtohsva} /> */}
            </div>
        </div>
    );
}

export default HEXtoRGB;
