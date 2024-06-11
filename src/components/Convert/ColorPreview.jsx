import React from 'react'
import Wheel from '@uiw/react-color-wheel';
import convert from 'color-convert';

const ColorPreview = (props) => {
    const rgbtohex = convert.rgb.hex(props.rgbColor);
    const rgbtohsv = convert.rgb.hsv(props.rgbColor);
    return (
        <div className='w-1/2 mt-4 flex items-center gap-2'>
            <div className='w-[200px] h-[200px]' style={{ background: `#${rgbtohex}` }}></div>
            <Wheel color={{ a: 1, h: rgbtohsv[0], s: rgbtohsv[1], v: rgbtohsv[2] }} />
        </div>
    )
}

export default ColorPreview;
