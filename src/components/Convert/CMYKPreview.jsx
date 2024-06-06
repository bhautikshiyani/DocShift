import React from 'react'
import { formatNumber } from '../../shared/utils'
import CustomTooltip from '@components/CustomTooltip';
import { LuCopy } from 'react-icons/lu';
const CMYKPreview = (props) => {
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };
    return (
        <div className="text-black dark:text-white">
            <div className='flex items-center gap-3'>
                <strong>{`cmyk(${formatNumber(props.cmykColor[0])}%, ${formatNumber(props.cmykColor[1])}%, ${formatNumber(props.cmykColor[2])}%, ${formatNumber(props.cmykColor[3])}%)`}</strong>
                <CustomTooltip
                    hexColor={`cmyk(${formatNumber(props.cmykColor[0])}% ${formatNumber(props.cmykColor[1])}%, ${formatNumber(props.cmykColor[2])}%, ${formatNumber(props.cmykColor[3])}%)`}
                    onCopy={onCopy}
                    contentClassName="text-violet11 bg-white"
                    arrowClassName="fill-white"
                >
                    <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                </CustomTooltip>
            </div>
            <div className="color-converter__channels">
                <div className="color-converter__channel">Cyan: <strong>{formatNumber(props.cmykColor[0])} %</strong></div>
                <div className="color-converter__channel">Magenta: <strong>{formatNumber(props.cmykColor[1])} %</strong></div>
                <div className="color-converter__channel">Yellow: <strong>{formatNumber(props.cmykColor[2])} %</strong></div>
                <div className="color-converter__channel">Black: <strong>{formatNumber(props.cmykColor[3])} %</strong></div>
            </div>
        </div>
    )
}

export default CMYKPreview
