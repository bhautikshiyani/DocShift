import React from 'react'
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { formatNumber } from '@shared/utils';
import { onCopy } from '@shared/utils';

const HSLPreview = (props) => {
    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`hsl(${formatNumber(props.hslColor[0])}deg ${formatNumber(props.hslColor[1])}% ${formatNumber(props.hslColor[2])}%)`}</strong>
                <CustomTooltip
                    hexColor={`hsl(${formatNumber(props.hslColor[0])}deg ${formatNumber(props.hslColor[1])}% ${formatNumber(props.hslColor[2])}%)`}
                    onCopy={onCopy}
                    contentClassName="text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Hue: <strong>{formatNumber(props.hslColor[0])} °</strong></div>
                <div className="color-converter__channel">Saturation: <strong>{formatNumber(props.hslColor[1])} %</strong></div>
                <div className="color-converter__channel">Lightness: <strong>{formatNumber(props.hslColor[2])} %</strong></div>
            </div>
        </div>
    )
}

export default HSLPreview
