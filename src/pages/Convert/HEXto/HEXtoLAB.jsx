import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import LABPreview from '@components/Convert/LABPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';

const HEXtoLAB = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);
    const rgbtolab = convert.rgb.lab.raw(rgbColor);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HexInput color={color} setColor={setColor} setrgbColor={setrgbColor} rgbColor={rgbColor} />
                <LABPreview  labColor={rgbtolab}/>
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoLAB;
