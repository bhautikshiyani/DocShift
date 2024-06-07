import React from 'react'
import convert from 'color-convert';
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { onCopy } from '@shared/utils';

const HexPreview = (props) => {
    const hextorgb = convert.hex.rgb(props.hexColor);

    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`#${props.hexColor}`}</strong>
                <CustomTooltip
                    hexColor={`#${props.hexColor}`}
                    onCopy={onCopy}
                    contentClassName=" text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Red: <strong>{hextorgb[0]}</strong></div>
                <div className="color-converter__channel">Green: <strong>{hextorgb[1]}</strong></div>
                <div className="color-converter__channel">Blue: <strong>{hextorgb[2]}</strong></div>
            </div>
        </div>
    )
}

export default HexPreview
