import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HexPreview from '@components/Convert/HexPreview';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';

const CMYKtoHEX = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);

    const cmyktorgb = convert.cmyk.rgb(color);
    const cmyktohex = convert.cmyk.hex(color);


    return (
        <div>
            <div className='grid grid-cols-2'>
                <CMYKInput color={color} setColor={setColor} />
                <HexPreview hexColor={cmyktohex} />
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
};

export default CMYKtoHEX;