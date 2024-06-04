import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

const CustomTooltip = ({ hexColor, children, onCopy, contentClassName, arrowClassName }) => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [visibleTooltip, setVisibleTooltip] = useState(null);

    const handleMouseEnter = (color) => {
        setTooltipContent(color);
        setVisibleTooltip(color);
    };

    const handleMouseLeave = () => {
        setVisibleTooltip(null);
    };

    const handleClick = (color) => {
        onCopy(color);
        setTooltipContent('Copied!');
    };

    return (
        <Tooltip.Provider>
            <Tooltip.Root open={visibleTooltip === hexColor}>
                <Tooltip.Trigger asChild>
                    <div
                        onMouseEnter={() => handleMouseEnter(hexColor)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(hexColor)}
                    >
                        {children}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className={`z-[9999999999] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade  select-none rounded-[4px]  px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] ${contentClassName ? contentClassName : 'text-violet11 bg-white '}`}
                        sideOffset={5}
                    >
                        {tooltipContent}
                        <Tooltip.Arrow className={` ${arrowClassName ? arrowClassName : "fill-white"}`} />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
};

export default CustomTooltip;
