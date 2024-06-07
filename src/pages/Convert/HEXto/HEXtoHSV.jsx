import React, {useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';

const HEXtoHSV = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);
    const rgbtohsv = convert.rgb.hsv.raw(rgbColor);
    
    return (
        <div>
            <div className='grid grid-cols-2'>
                <HexInput color={color} setColor={setColor} setrgbColor={setrgbColor} rgbColor={rgbColor} />
                <HSVPreview hsvColor={rgbtohsv} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoHSV;
