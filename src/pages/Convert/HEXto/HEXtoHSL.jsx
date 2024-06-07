import React, {  useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';

const HEXtoHSL = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);
    const rgbtohsl = convert.rgb.hsl.raw(rgbColor);
   
    return (
        <div>
            <div className='grid grid-cols-2'>
                <HexInput color={color} setColor={setColor} setrgbColor={setrgbColor} rgbColor={rgbColor} />
                <HSLPreview hslColor={rgbtohsl} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoHSL;
