import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HexPreview from '@components/Convert/HexPreview';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';



const HSLtoHEX = () => {
    const [color, setColor] = useState([0, 100, 14.70]);

    const hsltorgb = convert.hsl.rgb(color);
    const hsltohex = convert.hsl.hex(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HSLInput color={color} setColor={setColor} />
                <HexPreview hexColor={hsltohex} />
            </div>
            <ColorPreview rgbColor={hsltorgb} />
        </div>
    );
}

export default HSLtoHEX;
