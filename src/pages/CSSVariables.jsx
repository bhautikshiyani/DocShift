import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import * as Popover from '@radix-ui/react-popover';
import Values from 'values.js';
import { FaMinus, FaPlus, FaSquare } from 'react-icons/fa6';
import * as Tooltip from '@radix-ui/react-tooltip';
import { FaRegClipboard } from "react-icons/fa";
import classNames from 'classnames';

const CSSVariables = () => {
    const [colour, setColour] = useState("#ff0000");
    const [shades, setShades] = useState([]);
    const [error, setError] = useState(false);
    const [colorCopied, setColorCopied] = useState(false);
    const [code, setCode] = useState('css');

    const [count, setCount] = useState(20);
    const handleIncrease = () => {
        if (count > 20) {
            const Increase = (count === 36 || count === 30 || count === 25) ? count - 5 : count - 1;
            setCount(Increase);
        }
    };

    const handleDecrease = () => {
        if (count < 36) {
            const Increase = (count === 21 || count === 26 || count === 31) ? count + 5 : count + 1;
            setCount(Increase);
        }
    };

    const fetchShades = (color, count) => {
        try {
            const shades = new Values(color).all(count);
            setShades(shades);
            setError(false);
        } catch (err) {
            setError(true);
        }
    };
    useEffect(() => {
        fetchShades(colour, count);
    }, [colour, count]);

    const copyColor = (color) => () => {
        navigator.clipboard.writeText(`#${color.hex}`);
        setColorCopied(true);
        setTimeout(() => {
            setColorCopied(false);
        }, 500);
    };

    return (
        <div className='p-4 rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]'>
            <div className='max-w-full mb-8 md:max-w-[50%]'>
                <h1 className="text-fs-100 text-black dark:text-white">CSS / SCSS <span className="text-gradient text-fs-100 orange">color variables</span> generator</h1>
                <p className="subtitle-1 text-balance max-w-[50ch] text-muted mb-3">
                    Generate your custom color variables with our easy-to-use CSS and SCSS
                    Variables Generator to easily create and manage your CSS and SCSS custom variables.
                </p>
            </div>
            <div className='mb-8'>
                <label className="dark:text-white mb-2 block text-fs-sm-400 font-bold text-black">Color primary</label>
                <div className='flex border p-2 rounded-md max-w-[350px]'>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="w-[2rem] flex-none h-[2rem] border rounded" style={{ backgroundColor: colour }} aria-label="Update dimensions"> </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content
                                className="rounded-[12px] shadow-xl bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                                sideOffset={5}
                            >
                                <div className='custom-layout'>
                                    <HexColorPicker color={colour} onChange={setColour} />
                                </div>
                                <Popover.Arrow className="fill-[var(--theme-surface-body-pane)] dark:fill-[var(--theme-surface-container)]" />
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                    <input
                        type='text'
                        required
                        value={colour}
                        onChange={(e) => setColour(e.target.value)}
                        className='dark:text-white w-full p-0 px-3 text-black bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] focus:shadow-none border-none focus:outline-none focus:ring-0 focus:border-none'
                    />
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <h1 className='text-fs-400 font-bold text-black dark:text-white mb-0'>Color Tone</h1>
                <div className='flex items-center gap-3'>
                    <button disabled={count === 36 ? true : false} className='w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] rounded-full text-[20px] transition-all duration-100 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white' onClick={handleDecrease}>
                        <FaMinus />
                    </button>
                    <button disabled={count === 20 ? true : false} className='w-[40px] outline-none ring-0 flex items-center justify-center text-[var(--theme-surface-a90)] rounded-full text-[20px] transition-all duration-200 active:bg-[var(--theme-surface-a50)] active:text-black bg-[var(--theme-surface-container-high)] disabled:opacity-60 h-[40px] text-white' onClick={handleIncrease}>
                        <FaPlus />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                {shades.map((color, ind) => (
                    <div key={ind}>
                        <div
                            className="h-[4.5rem]  sm:h-[6rem] hover:sm:rounded-[30px] rounded-xl border dark:border-[var(--theme-surface-container)] border-[var(--theme-surface-body-pane)]  hover:rounded-[20px] transition-all duration-500 flex items-center justify-center cursor-pointer"
                            style={{ backgroundColor: `#${color.hex}` }}
                            onClick={copyColor(color)}
                        ></div>
                        <p className="subtitle-1  text-black dark:text-white font-medium mt-1 mb-0.5">
                            Primary - {ind === 0 ? 50 : ind * 100}
                        </p>
                        <p className="subtitle-2 text-muted  mb-0">
                            {`#${color.hex}`}
                        </p>
                    </div>
                ))}
            </div>
            <h2 className="text-fs-400 text-black dark:text-white font-bold mb-3"><i className="material-icons-outlined text-primary me-1 mb-1"></i>
                Code
            </h2>
            <div>
                <div className="code-block">
                    <div className="bg-[var(--theme-surface-container-high)] flex items-center justify-between p-3 rounded-t-[8px] ">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setCode('css')}
                                className={
                                    classNames(
                                        "border transition-all duration-300 text-black dark:text-white text-xs font-bold rounded-[10px] after:w-full after:absolute relative after:-bottom-[6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#2965f1] p-[8px_1rem]",
                                        code === "css" ? " px-[1.5rem] bg-[var(--theme-surface-container-low)] border-[var(--theme-surface-container-high)]" : ' border-[var(--theme-outline-button)]'
                                    )}
                            >
                                CSS
                            </button>
                            <button
                                onClick={() => setCode('scss')}
                                className={classNames("border transition-all text-black dark:text-white duration-300 text-xs font-bold rounded-[10px] after:w-full after:absolute relative after:-bottom-[6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#cc6699] p-[8px_1rem]", code === "scss" ? "px-[1.5rem] bg-[var(--theme-surface-container-low)] border-[var(--theme-surface-container-high)]" : ' border-[var(--theme-outline-button)]')}  >
                                SCSS
                            </button>
                        </div>
                        <div>
                            <Tooltip.Provider>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        <button className="text-violet11 shadow-blackA4 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center focus:outline-none focus:shadow-none  focus:ring-0 justify-center rounded-md bg-white shadow-[0_2px_10px] outline-none  focus:shadow-black">
                                            {/* <PlusIcon /> */}
                                            <FaRegClipboard />
                                        </button>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                            sideOffset={5}
                                        >
                                            Copy css code
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </div>
                    </div>

                    <div className="code-block-content relative p-3 bg-[var(--theme-surface-container-low)] rounded-b-[8px]">
                        <div className='absolute top-[10px] right-[10px]'>

                            <div className={classNames("transition-all text-black dark:text-white duration-300 text-sm font-bold rounded-[10px] after:w-full after:absolute relative after:-bottom-[6px] after:right-0 after:h-0.5", code === "scss" ? "after:bg-[#cc6699]" : 'after:bg-[#2965f1]')} >
                                {code === "scss" ? 'scss' : 'css'}
                            </div>
                        </div>
                        {
                            code === "scss" ?
                                <pre>
                                    <code className='flex flex-col'>
                                        <div className="inline-table">
                                            <span className="text-[var(--theme-code-comment)] italic  text-xs">/** SCSS PRIMARY COLORS */</span>
                                        </div>
                                        {shades.map((color, ind) => (

                                            <div className="inline-table min-h-[1rem]" key={ind}>
                                                <span style={{ color: `#${color.hex}` }} className=''>
                                                    <FaSquare className='inline-flex border rounded-[3px] align-middle mr-1' />
                                                </span>
                                                <span className="text-[var(--theme-code-scss-property)] text-xs">$primary-{ind === 0 ? 50 : ind * 100}: </span>
                                                <span className="token number text-[var(--theme-code-number)] text-xs">{`#${color.hex}`}</span>;
                                            </div>

                                        ))}

                                        <div className="text-black dark:text-white">
                                        </div>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-comment)] text-xs italic">/** EXAMPLES */</span>
                                        </div>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-property)] text-xs">color: </span>
                                            <span className="text-[var(--theme-code-scss-property)] text-xs">$primary-a50</span>
                                            ;
                                        </div>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-property)] text-xs">background-color: </span>
                                            <span className="text-[var(--theme-code-scss-property)] text-xs">$primary-a90</span>
                                            ;
                                        </div>
                                    </code>
                                </pre>
                                :
                                <pre>
                                    <code>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-comment)] text-xs italic">/** CSS PRIMARY COLORS */</span>
                                        </div>
                                        {shades.map((color, ind) => (
                                            <div className="text-black dark:text-white" key={ind}>
                                                <span className="text-[var(--theme-code-scss-property)] text-xs">--color-primary-{ind === 0 ? 50 : ind * 100}: </span>
                                                <span className="text-[var(--theme-code-number)] text-xs">{`#${color.hex}`}</span>;
                                            </div>
                                        ))}
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-comment)] text-xs italic">/** EXAMPLES */</span>
                                        </div>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-property)] text-xs">color: </span>
                                            <span className="text-[var(--theme-code-scss-property)] text-xs">var(--color-primary-50)</span>
                                            ;
                                        </div>
                                        <div className="text-black dark:text-white">
                                            <span className="text-[var(--theme-code-property)] text-xs">background-color: </span>
                                            <span className="text-[var(--theme-code-scss-property)] text-xs">var(--color-primary-900)</span>
                                            ;
                                        </div>
                                    </code>
                                </pre>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CSSVariables;
