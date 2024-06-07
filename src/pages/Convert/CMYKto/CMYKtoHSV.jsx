import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';

const CMYKtoHSV = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);
    const cmyktorgb = convert.cmyk.rgb(color);
    const hsltohsv = convert.hsl.hsv(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <CMYKInput color={color} setColor={setColor} />
                <HSVPreview hsvColor={hsltohsv} />
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
}

export default CMYKtoHSV;