import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HexPreview from '@components/Convert/HexPreview';
import LABInput from '@components/Convert/ColorInputs/LABInput';



const LABtoHEX = () => {
    const [color, setColor] = useState([0, 100, 14.70]);
    const labtorgb = convert.lab.rgb(color);
    const labtohex = convert.lab.hex(color);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <LABInput color={color} setColor={setColor} />
                <HexPreview hexColor={labtohex} />
            </div>
            <ColorPreview rgbColor={labtorgb} />
        </div>
    );
}

export default LABtoHEX;
