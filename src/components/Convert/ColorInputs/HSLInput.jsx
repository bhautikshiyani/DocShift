import React from 'react'
import { formatNumber, hslInput } from '@shared/utils';
import RGBInputs from '../RGBInputs';
const HSLInput = (props) => {
    const updateRGB = (index, value) => {
        setColor(prevColor => {
            const newColor = [...prevColor];
            newColor[index] = value;
            return newColor;
        });
    };
    return (
        <div className='text-white'>
            <div>
                <span>hsl{"("}</span>
                {props.color.map((col, index) => (
                    <span key={index}>
                        <input
                            required
                            value={formatNumber(col)}
                            step="1"
                            max={index === 0 ? "360" : "100"}
                            min='0'
                            type="number"
                            autoComplete="off"
                            tabIndex="0"
                            onChange={(e) => updateRGB(index, Math.min(Math.max(parseInt(e.target.value), 0), index === 0 ? 360 : 100))}
                            className='py-0 px-1 text-center !outline-none w-[40px] !shadow-none !ring-0 border-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]'
                        />
                        <span>{index === 0 ? '' : '%'}, </span>
                    </span>
                ))}
                <span>{")"}</span>
            </div>
            <RGBInputs inputs={hslInput} color={props.color} setColor={props.setColor} />
        </div>
    )
}

export default HSLInput
