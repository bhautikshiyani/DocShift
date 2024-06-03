import React, { useState } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHsla, rgbStringToHsva } from '@uiw/color-convert'

const RGBtoHEX = () => {
    const [color, setColor] = useState("rgb(255, 255, 255)");

    const rgbtohsva = rgbStringToHsva(color)
    console.log("🚀 ~ RGBtoHEX ~ rgbtohsva:", rgbtohsva)

    const onColorChange = color => {
        setColor(color.hexString);
    };
    // rgbStringToHsva('rgb(255, 255, 255)')
    // hsvaToRgbString({ h: 0, s: 0, v: 100, a: 1 })

    return (
        <div className='text-white'>
            <input
                type='text'
                required
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className='dark:text-white w-full p-0 px-3 text-black bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] focus:shadow-none border-none focus:outline-none focus:ring-0 focus:border-none'
            />
            <div>
                <label>
                    Red (min: 0, max: 255):
                </label>
                <div>
                    <span>-</span>
                    <div>
                    <input step="1" max="255" min="0" type="number" autocomplete="off" tabindex="0" />
                    </div>
                    <span>-</span>

                </div>
            </div>
            <Wheel color={rgbtohsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
        </div>
    );
}

export default RGBtoHEX;
