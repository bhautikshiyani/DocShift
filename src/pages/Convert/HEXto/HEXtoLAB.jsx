import React, { useEffect, useState } from 'react';
import { LuCopy } from 'react-icons/lu';
import CustomTooltip from '@components/CustomTooltip';
import convert from 'color-convert';
import RGBInputs from '@components/Convert/RGBInputs';
import ColorPreview from '@components/Convert/ColorPreview';
import { formatNumber, rgbInputs } from '../../../shared/utils';

const HEXtoLAB = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);
    const rgbtolab = convert.rgb.lab.raw(rgbColor);

    const handleSetHexColor = (e) => {
        const hextorgb = convert.hex.rgb(color);
        setrgbColor(hextorgb)
    }
    const handleSetColor = (e) => {
        const rgbtohex = convert.rgb.hex(e);
        setColor(rgbtohex)
    }
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };
    const hextorgb = convert.hex.rgb(color);
    useEffect(() => {
        setrgbColor(hextorgb)
    }, [color])
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='text-white'>
                    <div>
                        <span>
                            hex code (#):
                        </span>
                        <input
                            type='text'
                            required
                            placeholder='000000'
                            value={color}
                            onChange={(e) => { setColor(e.target.value), handleSetHexColor(e.target.value) }}
                            className='rounded !min-w-lg !w-56 !max-w-lg gradient-active-color__input !outline-none placeholder:dark:!text-gray-500 placeholder:!text-gray-300 !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                        />
                    </div>

                    <RGBInputs inputs={rgbInputs} color={rgbColor} setColor={handleSetColor} />
                </div>
                <div className="text-black dark:text-white">
                    <div className='flex items-center gap-3'>
                        <strong>{`lab(${formatNumber(rgbtolab[0])}, ${formatNumber(rgbtolab[1])}, ${formatNumber(rgbtolab[2])})`}</strong>
                        <CustomTooltip
                            hexColor={`lab(${formatNumber(rgbtolab[0])}, ${formatNumber(rgbtolab[1])}, ${formatNumber(rgbtolab[2])})`}
                            onCopy={onCopy}
                            contentClassName="text-violet11 bg-white"
                            arrowClassName="fill-white"
                        >
                            <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                        </CustomTooltip>
                    </div>
                    <div className="color-converter__channels">
                        <div className="color-converter__channel">Lightness: <strong>{formatNumber(rgbtolab[0])}</strong></div>
                        <div className="color-converter__channel">a: <strong>{formatNumber(rgbtolab[1])} </strong></div>
                        <div className="color-converter__channel">b: <strong>{formatNumber(rgbtolab[2])} </strong></div>
                    </div>
                </div>
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoLAB;
