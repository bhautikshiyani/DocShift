import React, { useEffect, useRef, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { HexColorPicker } from 'react-colorful';
import { HiPlus } from 'react-icons/hi';
import CustomScrollbars from '../../shared/CustomScrollbars';
import { MdDeleteOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { RiDownloadLine } from 'react-icons/ri';
import { IoCodeSharp } from 'react-icons/io5';
import CodeBox from './CodeBox';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';

function MeshGradientGenerator() {
    const canvasRef = useRef(null);
    const componentRef = useRef()
    const { width, height } = useContainerDimensions(componentRef)
    let [isOpen, setIsOpen] = useState(false);
    const [colors, setColors] = useState([{ color: '#000', position: { x: 50, y: 50 }, id: uuidv4() }]);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [newColor, setNewColor] = useState('#FFFFFF');
    const [isDragging, setIsDragging] = useState(false);
    const [dragIndex, setDragIndex] = useState(null);

    useEffect(() => {
        setBackgroundColor(`#${Math.random().toString(16).substr(-6)}`);
        setNewColor(`#${Math.random().toString(16).substr(-6)}`);
        setColors([{ color: `#${Math.random().toString(16).substr(-6)}`, position: { x: 50, y: 50 }, id: uuidv4() }]);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        drawCanvas(ctx);
    }, [colors, backgroundColor, width, height]);

    const drawCanvas = (ctx) => {
        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Draw the background color
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);

        // Draw the gradients
        colors.forEach((c) => {
            const gradient = ctx.createRadialGradient(
                (c.position.x / 100) * width,
                (c.position.y / 100) * height,
                0,
                (c.position.x / 100) * width,
                (c.position.y / 100) * height,
                Math.max(width, height) / 2
            );
            gradient.addColorStop(0, c.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        });

        // Draw the draggable color points
        colors.forEach((c) => {
            ctx.beginPath();
            ctx.arc(
                (c.position.x / 100) * width,
                (c.position.y / 100) * height,
                10,
                0,
                Math.PI * 2,
                false
            );
            ctx.fillStyle = c.color;
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#000';
            ctx.stroke();
        });
    };

    const addColor = () => {
        const posX = randomInt(1, 100);
        const posY = randomInt(1, 100);
        setNewColor(`#${Math.random().toString(16).substr(-6)}`);
        setColors([...colors, { color: newColor, position: { x: posX, y: posY }, id: uuidv4() }]);
    };

    const updateColor = (index, color) => {
        const updatedColors = colors.map((c, i) => (i === index ? { ...c, color } : c));
        setColors(updatedColors);
    };

    const deleteColor = (index) => {
        if (colors.length > 1) {
            const filteredPalettes = colors.filter((palette) => palette.id !== index.id).sort((paletteA, paletteB) => paletteA.position - paletteB.position);
            setColors(filteredPalettes);
        }
    };

    const randomInt = (min, max) => Math.round(min + Math.random() * (max - min));

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const index = colors.findIndex(c => {
            const dx = c.position.x - x;
            const dy = c.position.y - y;
            return Math.sqrt(dx * dx + dy * dy) < 2; // Adjust for hitbox size
        });

        if (index !== -1) {
            setIsDragging(true);
            setDragIndex(index);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const updatedColors = colors.map((c, i) =>
            i === dragIndex ? { ...c, position: { x, y } } : c
        );
        setColors(updatedColors);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setDragIndex(null);
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'mesh-gradient.png';
        link.click();
    };

    function open() {
        setIsOpen(true);
    }

    return (
        <div className="flex h-[78vh] flex-grow min-h-[300px]">
            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Get .png"
                data-tooltip-place="bottom"
                className='w-[30px] h-[30px] hover:bg-[#f2f2f3] text-black dark:text-white rounded-md flex items-center justify-center transition-all duration-200 text-[16px]'
                onClick={downloadImage}>
                <RiDownloadLine />
            </button>
            <button
                onClick={open}
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Get css"
                data-tooltip-place="bottom"
                className='w-[30px] h-[30px] hover:bg-[#f2f2f3] text-black dark:text-white rounded-md flex items-center justify-center transition-all duration-200 text-[16px]'>
                <IoCodeSharp />
            </button>
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
                                        <button disabled={colors.length < 2} className='text-red-500 flex-none flex items-center justify-center transition-all duration-300 disabled:text-[#f2a9b0] disabled:bg-transparent  rounded-full w-[30px] h-[30px]  hover:bg-[#dd27391a]' onClick={() => deleteColor(c)}>
                                            <MdDeleteOutline />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CustomScrollbars>
            </div>
            <div ref={componentRef} className='flex-1 w-full'>
                <canvas
                    id="canvas"
                    ref={canvasRef}
                    className="crosshair  shadow thumb canvas-crosshair"
                    width={width}
                    height={height}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                ></canvas>
            </div>
            <CodeBox isOpen={isOpen} colors={colors} backgroundColor={backgroundColor} setIsOpen={setIsOpen} />
        </div>
    );
}

export default MeshGradientGenerator;