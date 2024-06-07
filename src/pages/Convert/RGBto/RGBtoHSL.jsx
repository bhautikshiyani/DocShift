import React, { useState } from 'react';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';
const RGBtoHSL = () => {
	const [color, setColor] = useState([0, 0, 0]);
	
	const rgbtohsl = convert.rgb.hsl.raw(color);

	return (
		<div>
			<div className='grid grid-cols-2'>
				<RGBInput color={color} setColor={setColor} />
				<HSLPreview hslColor={rgbtohsl} />
			</div>
			<ColorPreview rgbColor={color} />
		</div>
	)
}

export default RGBtoHSL
