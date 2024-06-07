import React from 'react'
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { onCopy } from '@shared/utils';
const RGBPreview = (props) => {
    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`rgb(${props.RGBColor})`}</strong>
                <CustomTooltip
                    hexColor={`rgb(${props.RGBColor})`}
                    onCopy={onCopy}
                    contentClassName=" text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Red: <strong>{props.RGBColor[0]}</strong></div>
                <div className="color-converter__channel">Green: <strong>{props.RGBColor[1]}</strong></div>
                <div className="color-converter__channel">Blue: <strong>{props.RGBColor[2]}</strong></div>
            </div>
        </div>
    )
}

export default RGBPreview
