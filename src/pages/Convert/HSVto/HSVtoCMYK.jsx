import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';

const HSVtoCMYK = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
  
    const hsvtorgb = convert.hsv.rgb(color);
    const hsvtocmyk = convert.hsv.cmyk.raw(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSVInput color={color} setColor={setColor} />
                <CMYKPreview cmykColor={hsvtocmyk} />
            </div>
            <ColorPreview rgbColor={hsvtorgb} />
        </div>
    );
}

export default HSVtoCMYK;
