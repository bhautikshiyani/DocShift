import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import LABPreview from '@components/Convert/LABPreview';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';

const HSLtoLAB = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const hsltorgb = convert.hsl.rgb(color);
    const hsltolab = convert.hsl.lab.raw(color);


    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSLInput color={color} setColor={setColor} />
                <LABPreview labColor={hsltolab} />
            </div>
            <ColorPreview rgbColor={hsltorgb} />
        </div>
    );
}

export default HSLtoLAB;