// import React, { useEffect, useState } from 'react'
// import { FaMinus, FaPlus } from 'react-icons/fa6';
// import { parseRGB } from '../../shared/utils';

// const RGBInputs = (props) => {

//     const [rgb, setRGB] = useState(parseRGB(props.color));

//     useEffect(() => {
//         setRGB(parseRGB(props.color));
//     }, [props.color]);

//     const updateRGB = (key, value) => {
//         if (rgb) {
//             const newRGB = { ...rgb, [key]: value };
//             setRGB(newRGB);
//             props.setColor([newRGB.r, newRGB.g, newRGB.b]);
//         }
//     };

//     return (
//         <>
//             <div>
//                 <label className='text-[12px]'>Red (min: 0, max: 255):</label>
//                 <div className='flex items-center'>
//                     <button onClick={() => updateRGB('r', Math.max(rgb?.r - 1, 0))} className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaMinus />
//                     </button>
//                     <input
//                         className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]'
//                         value={rgb?.r}
//                         onChange={(e) => updateRGB('r', Math.min(Math.max(parseInt(e.target.value), 0), 255))}
//                         step="1"
//                         max="255"
//                         min="0"
//                         type="number"
//                         autoComplete="off"
//                         tabIndex="0"
//                     />
//                     <button
//                         onClick={() => updateRGB('r', Math.min(rgb?.r + 1, 255))}
//                         className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaPlus />
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <label
//                     className='text-[12px]'>
//                     Green (min: 0, max: 255):
//                 </label>
//                 <div className='flex items-center'>
//                     <button
//                         onClick={() => updateRGB('g', Math.max(rgb?.g - 1, 0))}
//                         className=' dark:text-white   w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)]  text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaMinus />
//                     </button>
//                     <input
//                         className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
//                         value={rgb?.g}
//                         onChange={(e) => updateRGB('g', Math.min(Math.max(parseInt(e.target.value), 0), 255))}
//                         step="1"
//                         max="255"
//                         min="0"
//                         type="number"
//                         autoComplete="off"
//                         tabIndex="0" />
//                     <button
//                         onClick={() => updateRGB('g', Math.min(rgb?.g + 1, 255))}
//                         className=' dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaPlus />
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <label className='text-[12px]'>Blue (min: 0, max: 255):</label>
//                 <div className='flex items-center'>
//                     <button
//                         onClick={() => updateRGB('b', Math.max(rgb?.b - 1, 0))}
//                         className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaMinus />
//                     </button>
//                     <input className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '
//                         value={rgb?.b}
//                         onChange={(e) => updateRGB('b', Math.min(Math.max(parseInt(e.target.value), 0), 255))}
//                         step="1"
//                         max="255"
//                         min="0"
//                         type="number"
//                         autoComplete="off"
//                         tabIndex="0" />
//                     <button
//                         onClick={() => updateRGB('b', Math.min(rgb?.b + 1, 255))}
//                         className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
//                         <FaPlus />
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RGBInputs




import React, { useEffect, useState, useMemo } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const parseColor = (color, keys) => {
    if (Array.isArray(color)) {
        return keys.reduce((acc, key, index) => ({ ...acc, [key]: color[index] }), {});
    } else if (typeof color === 'string') {
        const regex = new RegExp(`^${keys.join('\\((\\d+),\\s*')}\\)$`);
        const result = regex.exec(color);
        if (result) {
            return keys.reduce((acc, key, index) => ({ ...acc, [key]: parseInt(result[index + 1], 10) }), {});
        }
    }
    return null;
};

const RGBInputs = (props) => {
    const keys = useMemo(() => props.inputs.map(input => input.label.toLowerCase()), [props.inputs]);
    const [color, setColor] = useState(parseColor(props.color, keys));

    useEffect(() => {
        setColor(parseColor(props.color, keys));
    }, [props.color, keys]);

    const updateColor = (key, value) => {
        if (color) {
            const newColor = { ...color, [key]: value };
            setColor(newColor);
            props.setColor(keys.map(k => newColor[k]));
        }
    };

    const renderInput = (input) => {
        const { label, max, symbol , min } = input;
        const key = label.toLowerCase();
        const minValue = min ? min : 0;
        return (
            <div key={key}>
                <label className='text-[12px]'>{label} (min: {minValue}, max: {max}){symbol ? ` (${symbol})` : ''}:</label>
                <div className='flex items-center'>
                    <button
                        onClick={() => updateColor(key, Math.max(color?.[key] - 1, 0))}
                        className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
                        <FaMinus />
                    </button>
                    <input
                        className='rounded min-w-sm max-w-sm gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]'
                        value={color?.[key]}
                        onChange={(e) => updateColor(key, Math.min(Math.max(parseInt(e.target.value), minValue), max))}
                        step="1"
                        max={max}
                        min={minValue}
                        type="number"
                        autoComplete="off"
                        tabIndex="0"
                    />
                    <button
                        onClick={() => updateColor(key, Math.min(color?.[key] + 1, max))}
                        className='dark:text-white w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white'>
                        <FaPlus />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            {props.inputs.map(input => renderInput(input))}
        </>
    );
}

export default RGBInputs;

