import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import LABInput from '@components/Convert/ColorInputs/LABInput';

const LABtoHSL = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const labtorgb = convert.lab.rgb(color);
    const labtohsl = convert.lab.hsl.raw(color);


    return (
        <div>
            <div className='grid grid-cols-2'>
                <LABInput color={color} setColor={setColor} />
                <HSLPreview hslColor={labtohsl} />
            </div>
            <ColorPreview rgbColor={labtorgb} />
        </div>
    );
}

export default LABtoHSL;
