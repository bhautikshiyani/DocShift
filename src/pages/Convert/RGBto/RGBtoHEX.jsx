import React, { useState } from 'react';
import { LuCopy } from 'react-icons/lu';
import CustomTooltip from '@components/CustomTooltip';
import convert from 'color-convert';
import RGBInputs from '@components/Convert/RGBInputs';
import ColorPreview from '@components/Convert/ColorPreview';
import { rgbInputs } from '../../../shared/utils';


const RGBtoHEX = () => {
    const [color, setColor] = useState([0, 0, 0]);
    const updateRGB = (index, value) => {
        setColor(prevColor => {
            const newColor = [...prevColor];
            newColor[index] = value;
            return newColor;
        });
    };

    const rgbtohex = convert.rgb.hex(color);
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };

    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='text-white'>
                    <div>
                        <span>
                            rgb{"("}
                        </span>
                        <input
                            required
                            value={color[0]}
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            onChange={(e) => updateRGB(0, Math.min(Math.max(parseInt(e.target.value), 0), 255))}
                            className=' py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>, </span>
                        <input
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            required
                            value={color[1]}
                            onChange={(e) => updateRGB(1, Math.min(Math.max(parseInt(e.target.value), 0), 255))}
                            className='py-0 px-1  text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>, </span>
                        <input
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            required
                            value={color[2]}
                            onChange={(e) => updateRGB(2, Math.min(Math.max(parseInt(e.target.value), 0), 255))}
                            className='py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>
                            {")"}
                        </span>
                    </div>

                    <RGBInputs inputs={rgbInputs} color={color} setColor={setColor} />
                </div>
                <div className="text-black dark:text-white">
                    <div className='flex items-center gap-3'>
                        <strong>{`#${rgbtohex}`}</strong>
                        <CustomTooltip
                            hexColor={`#${rgbtohex}`}
                            onCopy={onCopy}
                            contentClassName=" text-violet11 bg-white"
                            arrowClassName="fill-white"
                        >
                            <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                        </CustomTooltip>
                    </div>
                    <div className="color-converter__channels">
                        <div className="color-converter__channel">Red: <strong>{color[0]}</strong></div>
                        <div className="color-converter__channel">Green: <strong>{color[1]}</strong></div>
                        <div className="color-converter__channel">Blue: <strong>{color[2]}</strong></div>
                    </div>
                </div>
            </div>
            <ColorPreview rgbColor={color} />
        </div>
    );
};

export default RGBtoHEX;
