import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';

const HSVtoHSL = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
  
    const hsvtorgb = convert.hsv.rgb(color);
    const hsvtohsl = convert.hsv.hsl.raw(color);

   
    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSVInput  color={color} setColor={setColor} />
                <HSLPreview hslColor={hsvtohsl} />
            </div>
            <ColorPreview rgbColor={hsvtorgb} />
        </div>
    );
}

export default HSVtoHSL;
