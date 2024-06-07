import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';

const CMYKtoHSL = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);

    const cmyktorgb = convert.cmyk.rgb(color);
    const cmyktohsl = convert.cmyk.hsl(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <CMYKInput color={color} setColor={setColor} />
                <HSLPreview hslColor={cmyktohsl} />
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
}

export default CMYKtoHSL;
