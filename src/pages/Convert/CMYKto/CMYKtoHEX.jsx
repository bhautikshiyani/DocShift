import React, { useEffect, useState } from 'react';
import { LuCopy } from 'react-icons/lu';
import CustomTooltip from '@components/CustomTooltip';
import convert from 'color-convert';
import RGBInputs from '@components/Convert/RGBInputs';
import ColorPreview from '@components/Convert/ColorPreview';
import { formatNumber, hslInput } from '../../../shared/utils';



const CMYKtoHEX = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);
    const updateRGB = (index, value) => {
        setColor(prevColor => {
            const newColor = [...prevColor];
            newColor[index] = value;
            return newColor;
        });
    };
    const cmyktorgb = convert.cmyk.rgb(color);
    const cmyktohex = convert.cmyk.hex(color);
    const handleSetColor = (e) => {
        setColor(e)
    }
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
                            cmyk{"("}
                        </span>
                        <input
                            required
                            value={formatNumber(color[0])}
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            onChange={(e) => updateRGB(0, Math.min(Math.max(parseInt(e.target.value), 0), 100))}
                            className=' py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>%</span>
                        <input
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            required
                            value={formatNumber(color[1])}
                            onChange={(e) => updateRGB(1, Math.min(Math.max(parseInt(e.target.value), 0), 100))}
                            className='py-0 px-1  text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>% </span>
                        <input
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            required
                            value={formatNumber(color[2])}
                            onChange={(e) => updateRGB(2, Math.min(Math.max(parseInt(e.target.value), 0), 100))}
                            className='py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>% </span>
                        <input
                            step="1"
                            max="255"
                            min="0"
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            required
                            value={formatNumber(color[3])}
                            onChange={(e) => updateRGB(3, Math.min(Math.max(parseInt(e.target.value), 0), 100))}
                            className='py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                        <span>%

                            {")"}
                        </span>
                    </div>

                    <RGBInputs inputs={hslInput} color={color} setColor={handleSetColor} />

                </div>
                <div className="text-black dark:text-white">
                    <div className='flex items-center gap-3'>
                        <strong>{`#${cmyktohex}`}</strong>
                        <CustomTooltip
                            hexColor={`#${cmyktohex}`}
                            onCopy={onCopy}
                            contentClassName=" text-violet11 bg-white"
                            arrowClassName="fill-white"
                        >
                            <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                        </CustomTooltip>
                    </div>
                    <div className="color-converter__channels">
                        <div className="color-converter__channel">Red: <strong>{cmyktorgb[0]}</strong></div>
                        <div className="color-converter__channel">Green: <strong>{cmyktorgb[1]}</strong></div>
                        <div className="color-converter__channel">Blue: <strong>{cmyktorgb[2]}</strong></div>
                    </div>
                </div>
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
}

export default CMYKtoHEX;
