import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';

const HSVtoRGB = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const hsvtorgb = convert.hsv.rgb(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSVInput color={color} setColor={setColor} />
                <RGBPreview RGBColor={hsvtorgb} />
            </div>
            <ColorPreview rgbColor={hsvtorgb} />
        </div>
    );
}

export default HSVtoRGB;
