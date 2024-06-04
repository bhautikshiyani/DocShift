import React, { useState, useEffect } from 'react';
import { colorShades, arrayToObject } from '@shared/utils';
import CustomScrollbars from '@shared/CustomScrollbars';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Slider from '@radix-ui/react-slider';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useToast } from '@hooks/useToast';
import CustomTooltip from '../../components/CustomTooltip';

const useClipboard = () => {
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };
    return { onCopy };
};

const ColorInput = (props) => {
    return (
        <div className="border-4 border-coolGray-300 rounded-full cursor-pointer w-6 h-6 relative overflow-hidden">
            <input
                type="color"
                className="absolute top-[-10px] left-[-10px] cursor-pointer w-10 h-10 p-0"
                {...props}
            />
        </div>
    );
};

const SectionBox = ({ name, children }) => {
    return (
        <div className="p-4 container  rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] ">
            <h2 className="font-bold mb-4 text-black dark:text-white text-[20px]">{name}</h2>
            {children}
        </div>
    );
};

const GenerateColorShadesJson = () => {
    const [configType, setConfigType] = useState('flattened');
    const [color, setColor] = useState('#06b6d4');
    const [amount, setAmount] = useState(10);
    const [shades, setShades] = useState([]);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const [name, setName] = useState('New_Color');
    const [pug, setPug] = useState(60);

    const getShades = (color, amount) => {
        setShades(colorShades(color, amount, pug));
    };
    const toast = useToast();
    const { onCopy } = useClipboard();
    const copyToClipboard = () => {
        let colorObj = {};
        if (configType === 'flattened') {
            colorObj = arrayToObject(shades, name);
            toast.success("Flattened json copied");
        } else {
            colorObj[name] = arrayToObject(shades);
            toast.success("Nested json copied");

        }
        onCopy(JSON.stringify(colorObj, null, 2));
    };


    useEffect(() => {
        getShades(color, amount);
    }, [color, pug, amount]);

  
    return (
        <div>
            {/* <Head>
          <title>JSON Color Palette Generator</title>
          <meta name="keywords" content="JSON Color Palette Generator" />
          <meta property="og:title" content="JSON Color Palette Generator" />
          <meta
            property="og:description"
            content="Generate a color palette from a hex color, also set the amount of shades"
          />
          <meta property="og:url" content="https://json-color-palette-generator.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="JSON Color Palette Generator" />
          <meta name="twitter:image:alt" content="Generate a color palette from a hex color, also set the amount of shades" />
          <meta property="og:image" content="/OGImage.png" />
          <meta name="twitter:image" content="https://json-color-palette-generator.vercel.app/OGImage.png" />
          <meta name="twitter:site" content="@rohitistweet" />
          <meta name="description" content="Generate a color palette from a hex color, also set the amount of shades" />
        </Head> */}
            <div className="container w-full mx-auto">
                <div className="flex flex-col items-center gap-2 ">
                    <h1 className="mb-8 text-xl md:text-5xl dark:text-white text-black text-center">
                        JSON Color Palette Generator
                    </h1>
                    <SectionBox name="Settings">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className='flex flex-col items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                                <label className="block text-black dark:text-white">Color Name</label>
                                <input
                                    type="text"
                                    className="rounded min-w-full gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] "
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                                <label className="block text-black dark:text-white">Palette Size</label>
                                <input
                                    type="number"
                                    className="rounded min-w-full gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] "
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                                <h3 className=" text-black dark:text-white">Diffing Index</h3>

                                <Tooltip.Provider>
                                    <Slider.Root
                                        className="relative flex items-center select-none touch-none w-full h-5"
                                        onMouseDown={() => setIsTooltipVisible(true)}
                                        onMouseUp={() => setIsTooltipVisible(false)}
                                        max={100}
                                        min={0}
                                        defaultValue={[pug]}
                                        onValueChange={(e) => setPug(e[0])}
                                        step={1}
                                    >
                                        <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
                                            <Slider.Range className="absolute bg-light-primary-base dark:bg-dark-primary-base rounded-full h-full" />
                                        </Slider.Track>
                                        <Tooltip.Root open={isTooltipVisible}>
                                            <Tooltip.Trigger asChild>
                                                <Slider.Thumb
                                                    className="block w-5 h-5 cursor-pointer bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
                                                    aria-label="Volume"
                                                    onFocus={() => setIsTooltipVisible(true)}
                                                    onBlur={() => setIsTooltipVisible(false)}
                                                    onMouseEnter={() => setIsTooltipVisible(true)}
                                                    onMouseLeave={() => setIsTooltipVisible(false)}
                                                />
                                            </Tooltip.Trigger>
                                            <Tooltip.Portal>
                                                <Tooltip.Content
                                                    className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                    sideOffset={5}
                                                >
                                                    {pug}%
                                                    <Tooltip.Arrow className="fill-white" />
                                                </Tooltip.Content>
                                            </Tooltip.Portal>
                                        </Tooltip.Root>
                                    </Slider.Root>
                                </Tooltip.Provider>
                            </div>
                            <div className='flex flex-col items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                                <h3 className="text-black dark:text-white">Base Color</h3>
                                <ColorInput
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>
                    </SectionBox>
                    <SectionBox name="Preview">
                        <div className='flex flex-col items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                            <h3 className=" text-black dark:text-white">{name}</h3>
                            <div className="min-w-full">
                                <CustomScrollbars
                                    autoHide={false}
                                    style={{ height: 70 }}
                                >
                                    <div className="flex">
                                        {shades.map((color, ind) => (
                                            <>

                                                <CustomTooltip
                                                    key={`${ind}-color-shade`}
                                                    hexColor={color}
                                                    onCopy={onCopy}
                                                    contentClassName=" text-violet11 bg-white"
                                                    arrowClassName="fill-white"
                                                >
                                                    <div
                                                        className="min-w-16 min-h-16 flex items-center justify-center cursor-pointer"
                                                        style={{ backgroundColor: color }}
                                                    >
                                                        {ind === 0 ? 50 : ind * 100}
                                                    </div>
                                                </CustomTooltip>
                                            </>
                                        ))}
                                    </div>
                                </CustomScrollbars>
                            </div>
                        </div>
                    </SectionBox>
                    <SectionBox name="Actions">
                        <div className='flex justify-between items-center flex-col md:flex-row gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                            <form className='flex flex-col items-start gap-4'>
                                <label className="block text-black dark:text-white">Config Type?</label>
                                <RadioGroup.Root
                                    onValueChange={(e) => setConfigType(e)}
                                    className="flex gap-6"
                                    defaultValue="flattened"
                                    aria-label="View density"
                                >
                                    <div className="flex items-center">
                                        <RadioGroup.Item
                                            className="bg-white cursor-pointer dark:bg-[var(--theme-surface-container)] w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 outline-none"
                                            value="flattened"
                                            id="r1"
                                        >
                                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11 after:dark:bg-dark-primary-base " />
                                        </RadioGroup.Item>
                                        <label className="text-black dark:text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">
                                            Flattened
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <RadioGroup.Item
                                            className="bg-white cursor-pointer dark:bg-[var(--theme-surface-container)] w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 ring-0 outline-none"
                                            value="nested"
                                            id="r2"
                                        >
                                            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11 after:dark:bg-dark-primary-base " />
                                        </RadioGroup.Item>
                                        <label className="text-black dark:text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">
                                            Nested
                                        </label>
                                    </div>
                                </RadioGroup.Root>
                            </form>
                            <button
                                type="button"
                                className="gradient-type__btn active !w-[250px]"
                                onClick={copyToClipboard}
                            >
                                Copy Color Palette JSON
                            </button>

                        </div>
                    </SectionBox>
                </div>
            </div>
        </div>
    );
};

export default GenerateColorShadesJson
