import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';

const HSLtoRGB = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
    const hsltorgb = convert.hsl.rgb(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSLInput color={color} setColor={setColor} />
                <RGBPreview RGBColor={hsltorgb} />
            </div>
            <ColorPreview rgbColor={hsltorgb} />
        </div>
    );
}

export default HSLtoRGB;
