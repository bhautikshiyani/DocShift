import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';
const RGBtoCMYK = () => {
  const [color, setColor] = useState([0, 0, 0]);
  const rgbtocmyk = convert.rgb.cmyk.raw(color);

  return (
    <div>
      <div className='grid grid-cols-2'>
        <RGBInput color={color} setColor={setColor} />
        <CMYKPreview cmykColor={rgbtocmyk} />
      </div>
      <ColorPreview rgbColor={color} />
    </div>
  )
}

export default RGBtoCMYK
