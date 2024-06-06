import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import * as Popover from '@radix-ui/react-popover';
import Values from 'values.js';

const GenerateCustomeColorPalettes = () => {
    const [colour, setColour] = useState("#ff0000");
    const [shades, setShades] = useState([]);
  
    const fetchShades = (color) => {
        try {
            const shades = new Values(color).all(10);
            setShades(shades);

        } catch (err) {
     
        }
    };
    useEffect(() => {
        fetchShades(colour);
    }, [colour]);

    const copyColor = (color) => () => {
        navigator.clipboard.writeText(`#${color.hex}`);
    };

    return (
        <div className='p-4 rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]'>
            <div className='max-w-full mb-8 md:max-w-[50%]'>
                <h1 className="text-fs-100 text-black font-bold dark:text-white mb-7.5 text-left"><span className="text-orange-600">Effortlessly</span> create beautiful color palettes for your projects</h1>

                <p className="subtitle-1 text-balance max-w-[50ch] text-muted mb-3">
                    TintTastic is a user-friendly tint and shade generator that will elevate your color game in no time.
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
          
        </div>
    );
};

export default GenerateCustomeColorPalettes;
