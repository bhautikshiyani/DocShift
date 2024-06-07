import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HexPreview from '@components/Convert/HexPreview';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';


const HSVtoHEX = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
  
    const hsvtorgb = convert.hsv.rgb(color);
    const hsvtohex = convert.hsv.hex(color);

 
    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSVInput  color={color} setColor={setColor} />
                <HexPreview hexColor={hsvtohex} />
            </div>
            <ColorPreview rgbColor={hsvtorgb} />
        </div>
    );
}

export default HSVtoHEX;
