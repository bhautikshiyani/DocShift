import React, {useState } from 'react';
import ColorPreview from '@components/Convert/ColorPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';

const HEXtoRGB = () => {
    const [color, setColor] = useState('000000');
    const [rgbColor, setrgbColor] = useState([]);

    return (
        <div>
            <div className='grid grid-cols-2'>
                <HexInput color={color} setColor={setColor} setrgbColor={setrgbColor} rgbColor={rgbColor} />
                <RGBPreview RGBColor={rgbColor}/>
            </div>
            <ColorPreview rgbColor={rgbColor} />
        </div>
    );
}

export default HEXtoRGB;
