import React from 'react'
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { formatNumber } from '@shared/utils';
import { onCopy } from '@shared/utils';

const HSVPreview = (props) => {
 
    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`hsv(${formatNumber(props.hsvColor[0])}, ${formatNumber(props.hsvColor[1])}%, ${formatNumber(props.hsvColor[2])}%)`}</strong>
                <CustomTooltip
                    hexColor={`hsv(${formatNumber(props.hsvColor[0])}, ${formatNumber(props.hsvColor[1])}%, ${formatNumber(props.hsvColor[2])}%)`}
                    onCopy={onCopy}
                    contentClassName="text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Hue: <strong>{formatNumber(props.hsvColor[0])} °</strong></div>
                <div className="color-converter__channel">Saturation: <strong>{formatNumber(props.hsvColor[1])} %</strong></div>
                <div className="color-converter__channel">Value: <strong>{formatNumber(props.hsvColor[2])} %</strong></div>
            </div>
        </div>
    )
}

export default HSVPreview
