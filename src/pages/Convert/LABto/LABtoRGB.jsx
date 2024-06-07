import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import LABInput from '@components/Convert/ColorInputs/LABInput';

const LABtoRGB = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
    const labtorgb = convert.lab.rgb(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <LABInput color={color} setColor={setColor} />
                <RGBPreview RGBColor={labtorgb} />
            </div>
            <ColorPreview rgbColor={labtorgb} />
        </div>
    );
}

export default LABtoRGB;
