import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HexPreview from '@components/Convert/HexPreview';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';

const RGBtoHEX = () => {
    const [color, setColor] = useState([0, 0, 0]);
    const rgbtohex = convert.rgb.hex(color);
    return (
        <div>
            <div className='grid grid-cols-2'>
                <RGBInput color={color} setColor={setColor} />
                <HexPreview hexColor={rgbtohex} />
            </div>
            <ColorPreview rgbColor={color} />
        </div>
    );
};

export default RGBtoHEX;