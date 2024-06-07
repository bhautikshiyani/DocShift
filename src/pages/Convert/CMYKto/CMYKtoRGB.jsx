import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';

const CMYKtoRGB = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);

    const cmyktorgb = convert.cmyk.rgb(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <CMYKInput color={color} setColor={setColor} />
                <RGBPreview RGBColor={cmyktorgb} />
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
}

export default CMYKtoRGB;