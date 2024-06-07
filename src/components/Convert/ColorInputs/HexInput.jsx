// import React, { useEffect } from 'react'
// import RGBInputs from '../RGBInputs'
// import { rgbInputs } from '@shared/utils'
// import convert from 'color-convert';

// const HexInput = (props) => {
//     const hextorgb = convert.hex.rgb(props.color);
//     const handleSetHexColor = (e) => {
//         const hextorgb = convert.hex.rgb(props.color);
//         props.setrgbColor(hextorgb)
//     }
//     const handleSetColor = (e) => {
//         const rgbtohex = convert.rgb.hex(e);
//         props.setColor(rgbtohex)
//     }
//     useEffect(() => {
//         props.setrgbColor(hextorgb)
//     }, [props.color])
//     return (
//         <div className='text-white'>
//             <div>
//                 <span>
//                     hex code (#):
//                 </span>
//                 <input
//                     type='text'
//                     required
//                     placeholder='000000'
//                     value={props.color}
//                     onChange={(e) => { props.setColor(e.target.value), handleSetHexColor(e.target.value) }}
//                     className='rounded !min-w-lg !w-56 !max-w-lg gradient-active-color__input !outline-none placeholder:dark:!text-gray-500 placeholder:!text-gray-300 !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
//                 />
//             </div>
//             <RGBInputs inputs={rgbInputs} color={props.rgbColor} setColor={handleSetColor} />
//         </div>
//     )
// }

// export default HexInput

// File: HexInput.js
import React, { useEffect } from 'react';
import RGBInputs from '../RGBInputs';
import { rgbInputs } from '@shared/utils';
import convert from 'color-convert';

const HexInput = ({ color, setColor, setRgbColor, rgbColor }) => {
    useEffect(() => {
        const hextorgb = convert.hex.rgb(color);
        setRgbColor(hextorgb);
    }, [color, setRgbColor]);

    const handleSetHexColor = (e) => {
        const hexValue = e.target.value;
        const isValidHex = /^#?[0-9A-F]{6}$/i.test(hexValue);

        if (isValidHex) {
            const hextorgb = convert.hex.rgb(hexValue);
            setRgbColor(hextorgb);
            setColor(hexValue);
        } else {
            console.error("Invalid hex color value");
        }
    };

    const handleSetColor = (e) => {
        const rgbValue = e;
        const rgbtohex = convert.rgb.hex(rgbValue);
        setColor(rgbtohex);
    };

    return (
        <div className='text-white'>
            <div>
                <span>
                    hex code (#):
                </span>
                <input
                    type='text'
                    required
                    placeholder='000000'
                    value={color}
                    onChange={handleSetHexColor}
                    className='rounded !min-w-lg !w-56 !max-w-lg gradient-active-color__input !outline-none placeholder:dark:!text-gray-500 placeholder:!text-gray-300 !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
                />
            </div>
            <RGBInputs inputs={rgbInputs} color={rgbColor} setColor={handleSetColor} />
        </div>
    );
};

export default HexInput;


