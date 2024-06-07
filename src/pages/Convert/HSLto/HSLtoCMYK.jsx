import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';

const HSLtoCMYK = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const hsltorgb = convert.hsl.rgb(color);
    const hsltocmyk = convert.hsl.cmyk(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSLInput color={color} setColor={setColor} />
                <CMYKPreview cmykColor={hsltocmyk} />
            </div>
            <ColorPreview rgbColor={hsltorgb} />
        </div>
    );
}

export default HSLtoCMYK;
