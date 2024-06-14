import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { onCopy } from '../../shared/utils';
import convert from 'color-convert';

const ColorPickerCanvas = () => {
    const canvasRef = useRef(null);
    const outputRef = useRef(null);
    const recentColorsRef = useRef(null);
    const notiRef = useRef(null);
    const [recentColors, setRecentColors] = useState([]);
    const [canvasImage, setCanvasImage] = useState(null);
    const toast = useToast();

    const drawImageOnCanvas = (img) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const hRatio = canvas?.width / img.width;
        const vRatio = canvas?.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        setCanvasImage(img);
    };

    const extractColor = (evt) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const { data } = ctx.getImageData(evt.offsetX, evt.offsetY, 1, 1);
        const rgb = convert.rgb.hex(data[0], data[1], data[2]);
        return `#${rgb}`;
    };

    const showRecentColors = () => {
        const recentColorsDiv = recentColorsRef.current;
        recentColorsDiv.innerHTML = '';
        if (recentColors.length <= 0) return;
        recentColors.slice(0, 18).forEach(color => {
            const span = document.createElement('span');
            span.classList.add('color');
            span.style.backgroundColor = color;
            recentColorsDiv.appendChild(span);
        });
    };

    const handleMouseMove = (evt) => {
        const hex = extractColor(evt);
        const output = outputRef.current;
        output.style.background = hex;
        output.nextElementSibling.innerText = hex;
    };

    const handleMouseClick = (evt) => {
        const hex = extractColor(evt);
        outputRef.current.nextElementSibling.innerText = hex;
        onCopy(hex);
        setRecentColors([hex, ...recentColors.slice(0, 17)]);
        toast.success(`Copied the Color Code: ${hex}`);
        showRecentColors();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('dblclick', handleMouseClick);
        }

        return () => {
            if (canvas) {
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('dblclick', handleMouseClick);
            }
        };
    }, [recentColors, canvasImage]);

    useEffect(() => {
        const image = new Image();
        image.crossOrigin = "Anonymous";
        image.src = 'https://ziadevcom.github.io/colorz-picker/demo.jpg';
        image.onload = () => drawImageOnCanvas(image);
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = URL.createObjectURL(file);
            image.onload = () => drawImageOnCanvas(image);
        }
    };

    return (
        <div>
            <div className="title">
                <h1>Worst Color Picker Ever</h1>
                <p>Use Mouse to drag and zoom in or out. Double Click to select and copy the color.<br />
                    You can see the recently selected colors too and click them to copy their code.</p>
            </div>
            <canvas
                id="canvas"
                ref={canvasRef}
                className="crosshair shadow thumb canvas-crosshair"
                width={800}
                height={400}
            ></canvas>
            <div id="upload" className="shadow">
                <label htmlFor="file" style={{ cursor: "pointer" }}>Upload Image</label>
                <div>
                    <span className="color w-[100px] block h-[100px]" ref={outputRef}></span><p>Color Will Display Here</p>
                </div>
            </div>
            <div className="recent-colors" ref={recentColorsRef}></div>
            <input
                type="file"
                accept="image/*"
                id="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div className="notify shadow" ref={notiRef}>Copied the Color Code: rgba(255, 255, 255,)</div>
        </div>
    );
};

export default ColorPickerCanvas;
