import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import LABInput from '@components/Convert/ColorInputs/LABInput';

const LABtoCMYK = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
 
    const labtorgb = convert.lab.rgb(color);
    const labtocmyk = convert.lab.cmyk.raw(color);

   
    return (
        <div>
            <div className='grid grid-cols-2'>
                <LABInput color={color} setColor={setColor}  />
                <CMYKPreview cmykColor={labtocmyk} />
            </div>
            <ColorPreview rgbColor={labtorgb} />
        </div>
    );
}

export default LABtoCMYK;
