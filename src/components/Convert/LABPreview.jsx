import React from 'react'
import convert from 'color-convert';
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
import { formatNumber } from '@shared/utils';
import { onCopy } from '@shared/utils';

const LABPreview = (props) => {
 
  return (
    <div className="text-black dark:text-white">
    <div className='flex items-center gap-3'>
        <strong>{`lab(${formatNumber(props.labColor[0])}, ${formatNumber(props.labColor[1])}, ${formatNumber(props.labColor[2])})`}</strong>
        <CustomTooltip
            hexColor={`lab(${formatNumber(props.labColor[0])}, ${formatNumber(props.labColor[1])}, ${formatNumber(props.labColor[2])})`}
            onCopy={onCopy}
            contentClassName="text-violet11 bg-white"
            arrowClassName="fill-white"
        >
            <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
        </CustomTooltip>
    </div>
    <div className="color-converter__channels">
        <div className="color-converter__channel">Lightness: <strong>{formatNumber(props.labColor[0])}</strong></div>
        <div className="color-converter__channel">a: <strong>{formatNumber(props.labColor[1])} </strong></div>
        <div className="color-converter__channel">b: <strong>{formatNumber(props.labColor[2])} </strong></div>
    </div>
</div>
  )
}

export default LABPreview
