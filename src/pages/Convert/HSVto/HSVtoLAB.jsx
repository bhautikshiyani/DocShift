import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import LABPreview from '@components/Convert/LABPreview';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';

const HSVtoLAB = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
  
    const hsvtorgb = convert.hsl.rgb(color);
    const hsvtolab = convert.hsv.lab.raw(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSVInput  color={color} setColor={setColor} />
                <LABPreview labColor={hsvtolab} />
            </div>
            <ColorPreview rgbColor={hsvtorgb} />
        </div>
    );
}

export default HSVtoLAB;
