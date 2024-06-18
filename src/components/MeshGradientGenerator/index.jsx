import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import * as Popover from '@radix-ui/react-popover';
import { HexColorPicker } from 'react-colorful';
import { HiPlus } from 'react-icons/hi';
import CustomScrollbars from '../../shared/CustomScrollbars';
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
function MeshGradientGenerator() {

    const [colors, setColors] = useState([{ color: '#000', position: { x: 50, y: 50 }, id: uuidv4() }]);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [newColor, setNewColor] = useState('#FFFFFF');
    useEffect(()=>{
        setBackgroundColor(`#${Math.random().toString(16).substr(-6)}`);
        setNewColor(`#${Math.random().toString(16).substr(-6)}`);

    },[])
    const addColor = () => {
        setColors([...colors, { color: newColor, position: { x: 50, y: 50 }, id: uuidv4() }]);
    };

    const updateColor = (index, color) => {
        const updatedColors = colors.map((c, i) => (i === index ? { ...c, color } : c));
        setColors(updatedColors);
    };
    const deleteColor = (index) => {
        if (colors.length > 1) {
            const filteredPalettes = colors
                .filter((palette) => palette.id !== index.id)
                .sort((paletteA, paletteB) => paletteA.position - paletteB.position);
            setColors(filteredPalettes);
        }
    };

    const handleDrag = (e, data, index) => {
        const updatedColors = colors.map((c, i) =>
            i === index ? { ...c, position: { x: (data.x / window.innerWidth) * 100, y: (data.y / 400) * 100 } } : c
        );
        setColors(updatedColors);
    };

    const gradientStyle = {
        background: `${colors.map(
            (c) => `radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`
        ).join(', ')}, ${backgroundColor}`,
        position: 'relative',
    };

    return (
        <div className=" flex h-[78vh]  flex-grow min-h-[300px]">
            <div className='max-w-[290px]  w-full'>
                <CustomScrollbars
                    autoHide={false}
                    style={{ height: '100%' }}
                >
                    <div className='pr-3'>
                        <div className="mb-4">
                            <div className='mb-8'>
                                <label className="dark:text-white mb-2 block text-fs-sm-400 font-bold text-black">Background Color</label>
                                <div className='flex border p-2 rounded-md'>
                                    <Popover.Root>
                                        <Popover.Trigger asChild>
                                            <button className="w-[2rem] flex-none h-[2rem] border rounded" style={{ backgroundColor: backgroundColor }} aria-label="Update dimensions"> </button>
                                        </Popover.Trigger>
                                        <Popover.Portal>
                                            <Popover.Content
                                                className="rounded-[12px] shadow-xl bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                                                sideOffset={5}
                                            >
                                                <div className='custom-layout'>
                                                    <HexColorPicker color={backgroundColor} onChange={(color) => setBackgroundColor(color)} />
                                                </div>
                                                <Popover.Arrow className="fill-[var(--theme-surface-body-pane)] dark:fill-[var(--theme-surface-container)]" />
                                            </Popover.Content>
                                        </Popover.Portal>
                                    </Popover.Root>
                                    <input
                                        type='text'
                                        required
                                        value={backgroundColor}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                        className='dark:text-white w-full p-0 px-3 text-black bg-transparent focus:shadow-none border-none focus:outline-none focus:ring-0 focus:border-none'
                                    />
                                </div>
                            </div>
                            <div className='mb-8'>
                                <label className="dark:text-white mb-2 block text-fs-sm-400 font-bold text-black">Background Color</label>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex border p-2 rounded-md'>
                                        <Popover.Root>
                                            <Popover.Trigger asChild>
                                                <button className="w-[1.5rem] flex-none h-[1.5rem] border rounded-[3px]" style={{ backgroundColor: newColor }} aria-label="Update dimensions"> </button>
                                            </Popover.Trigger>
                                            <Popover.Portal>
                                                <Popover.Content
                                                    className="rounded-[12px] shadow-xl bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                                                    sideOffset={5}
                                                >
                                                    <div className='custom-layout'>
                                                        <HexColorPicker color={newColor} onChange={(color) => setNewColor(color)} />
                                                    </div>
                                                    <Popover.Arrow className="fill-[var(--theme-surface-body-pane)] dark:fill-[var(--theme-surface-container)]" />
                                                </Popover.Content>
                                            </Popover.Portal>
                                        </Popover.Root>
                                        <input
                                            type='text'
                                            required
                                            value={newColor}
                                            onChange={(e) => setNewColor(e.target.value)}
                                            className='dark:text-white w-full p-0 px-3 text-black bg-transparent focus:shadow-none border-none focus:outline-none focus:ring-0 focus:border-none'
                                        />
                                    </div>
                                    <button className="bg-blue-500 w-[41px] h-[41px] flex items-center justify-center text-white text-[20px] flex-none rounded" onClick={addColor}>
                                        <HiPlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 mb-4">
                            {colors.map((c, index) => (
                                <div key={c.id} className=''>
                                    <label className="dark:text-white mb-2 block text-fs-sm-400 font-bold text-black">Color {index + 1}</label>
                                    <div className='flex items-center border p-2 rounded-md'>
                                        <Popover.Root>
                                            <Popover.Trigger asChild>
                                                <button className="w-[2rem] flex-none h-[2rem] border rounded" style={{ backgroundColor: c.color }} aria-label="Update dimensions"> </button>
                                            </Popover.Trigger>
                                            <Popover.Portal>
                                                <Popover.Content
                                                    className="rounded-[12px] shadow-xl bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                                                    sideOffset={5}
                                                >
                                                    <div className='custom-layout'>
                                                        <HexColorPicker color={c.color} onChange={(color) => updateColor(index, color)} />
                                                    </div>
                                                    <Popover.Arrow className="fill-[var(--theme-surface-body-pane)] dark:fill-[var(--theme-surface-container)]" />
                                                </Popover.Content>
                                            </Popover.Portal>
                                        </Popover.Root>
                                        <input
                                            type='text'
                                            required
                                            value={c.color}
                                            onChange={(e) => updateColor(index, e.target.value)}
                                            className='dark:text-white w-full p-0 px-3 text-black bg-transparent focus:shadow-none border-none focus:outline-none focus:ring-0 focus:border-none'
                                        />
                                        <button className='text-[#f2a9b0] flex-none flex items-center justify-center transition-all duration-300 hover:text-red-500 rounded-full w-[30px] h-[30px]  hover:bg-[#dd27391a]' onClick={() => deleteColor(c)}>
                                            <MdDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CustomScrollbars>
            </div>
            <div className="border flex-1 w-full border-black rounded" style={gradientStyle}>
                {colors.map((c, index) => (
                    <Draggable
                        key={c.id}
                        bounds="parent"
                        position={{
                            x: (c.position.x / 100) * window.innerWidth,
                            y: (c.position.y / 100) * 400
                        }}
                        onStop={(e, data) => handleDrag(e, data, index)}
                    >
                        <div
                            style={{ backgroundColor: c.color, cursor: 'pointer', position: 'absolute' }}
                            className="w-6 h-6 focus:outline-none ring-2 ring-black ring-offset-2 rounded-full"
                        />
                    </Draggable>
                ))}
            </div>
        </div>
    );
}

export default MeshGradientGenerator;