// File: HexPreview.js
import React from 'react';
import convert from 'color-convert';
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { onCopy } from '@shared/utils';

const HexPreview = (props) => {
    const { hexColor } = props;
    console.log("🚀 ~ HexPreview ~ hexColor:", hexColor)
    let hextorgb = [0, 0, 0];

    if (hexColor && hexColor.length === 6) {
        hextorgb = convert.hex.rgb(hexColor);
    } else {
        console.error('Invalid hex color value:', hexColor);
    }
    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`#${hexColor}`}</strong>
                <CustomTooltip
                    hexColor={`#${hexColor}`}
                    onCopy={onCopy}
                    contentClassName=" text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Red: <strong>{hextorgb[0]}</strong></div>
                <div className="color-converter__channel">Green: <strong>{hextorgb[1]}</strong></div>
                <div className="color-converter__channel">Blue: <strong>{hextorgb[2]}</strong></div>
            </div>
        </div>
    );
};

export default HexPreview;
