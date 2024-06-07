import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import LABPreview from '@components/Convert/LABPreview';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';

const RGBtoLAB = () => {
  const [color, setColor] = useState([0, 0, 0]);
  const rgbtolab = convert.rgb.lab.raw(color);

  return (
    <div>
      <div className='grid grid-cols-2'>
        <RGBInput color={color} setColor={setColor} />
        <LABPreview labColor={rgbtolab} />
      </div>
      <ColorPreview rgbColor={color} />
    </div>
  )
}

export default RGBtoLAB