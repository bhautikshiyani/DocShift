import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import LABPreview from '@components/Convert/LABPreview';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';

const CMYKtoLAB = () => {
    const [color, setColor] = useState([0, 100, 14.70, 10]);

    const cmyktorgb = convert.cmyk.rgb(color);
    const cmyktolab = convert.cmyk.lab.raw(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <CMYKInput color={color} setColor={setColor} />
                <LABPreview labColor={cmyktolab} />
            </div>
            <ColorPreview rgbColor={cmyktorgb} />
        </div>
    );
}

export default CMYKtoLAB;
