import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import LABInput from '@components/Convert/ColorInputs/LABInput';

const LABtoHSV = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
    const labtorgb = convert.lab.rgb(color);
    const labtohsv = convert.lab.hsv.raw(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <LABInput color={color} setColor={setColor} />
                <HSVPreview hsvColor={labtohsv} />
            </div>
            <ColorPreview rgbColor={labtorgb} />
        </div>
    );
}

export default LABtoHSV;
