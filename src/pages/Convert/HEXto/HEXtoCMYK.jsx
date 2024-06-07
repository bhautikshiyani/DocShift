import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';

const HEXtoCMYK = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);
    const rgbtocmyk = convert.rgb.cmyk.raw(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HexInput color={color} setColor={setColor} setrgbColor={setrgbColor} rgbColor={rgbColor} />
                <CMYKPreview cmykColor={rgbtocmyk} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoCMYK;
