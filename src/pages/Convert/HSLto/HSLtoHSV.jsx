import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';

const HSLtoHSV = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const hsltorgb = convert.hsl.rgb(color);
    const hsltohsv = convert.hsl.hsv(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSLInput color={color} setColor={setColor} />
                <HSVPreview hsvColor={hsltohsv} />
            </div>
            <ColorPreview rgbColor={hsltorgb} />
        </div>
    );
}

export default HSLtoHSV;
