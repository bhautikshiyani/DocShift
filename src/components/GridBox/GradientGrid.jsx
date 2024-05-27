import React, { useState } from 'react'
import GradientSwatch from './GradientSwatch';
import { useNavigate } from 'react-router-dom';

const GradientGrid = (props) => {
    const [tooltip, setTooltip] = useState({ name: '', show: false, message: '' });
    const handleCopy = (name) => {
        if (props.status) {
            const gradient = props?.colors?.find(g => g.name === name);
            if (gradient) {
                const gradientCss = `background: linear-gradient(to right, ${gradient.colors.join(', ')});`;
                navigator.clipboard.writeText(gradientCss).then(() => {
                    setTooltip({ name, show: true });
                    setTimeout(() => setTooltip({ name: '', show: false }), 2000);
                });
            }
        }
        else {
            navigator.clipboard.writeText(name).then(() => {
                setTooltip({ name, message: 'Copied!', show: true });
                setTimeout(() => setTooltip({ name: '', message: '', show: false }), 2000);
            });
        }
    };
    const navigate = useNavigate();
    const handleClick = (code) => {
        if(props?.status){
            navigate(`/swatches/${code?.name}`, { state: { data: code?.colors } })
        }
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
            {props?.colors?.map((gradient, index) => (
                <div key={index} className="relative">
                    <GradientSwatch handleClick={handleClick} status={props?.status} code={gradient} tooltip={tooltip} onCopy={handleCopy} />
                </div>
            ))}
        </div>
    );
}

export default GradientGrid
