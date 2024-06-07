import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';
const RGBtoHSV = () => {
  const [color, setColor] = useState([0, 0, 0]);
  const rgbtohsv = convert.rgb.hsv.raw(color);


  return (
    <div>
      <div className='grid grid-cols-2'>
        <RGBInput color={color} setColor={setColor} />
        <HSVPreview hsvColor={rgbtohsv} />
      </div>
      <ColorPreview rgbColor={color} />
    </div>
  )
}

export default RGBtoHSV
