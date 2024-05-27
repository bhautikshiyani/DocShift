import React, { useState, useEffect } from 'react';
import { colorShades, arrayToObject } from '@shared/utils';
import CustomScrollbars from '../../shared/CustomScrollbars';

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
        <div className="border-4 border-coolGray-300 rounded-full w-6 h-6 relative overflow-hidden">
            <input
                type="color"
                className="absolute top-[-10px] left-[-10px] w-10 h-10 p-0"
                {...props}
            />
        </div>
    );
};

const SectionBox = ({ name, children }) => {
    return (
        <div className="p-8 bg-white mt-8 rounded-lg md:w-full border border-coolGray-300 relative">
            <h2 className="absolute top-[-12px] left-10 px-2 text-sm bg-white">
                {name}
            </h2>
            {children}
        </div>
    );
};

const GenerateColorShadesJson = () => {
    const [configType, setConfigType] = useState('flattened');
    const [color, setColor] = useState('#06b6d4');
    const [amount, setAmount] = useState(10);
    const [shades, setShades] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowTooltip(true);
            setTimeout(() => {
                setShowTooltip(false);
            }, 8000);
        }, 10000);
    }, []);

    const getShades = (color, amount) => {
        setShades(colorShades(color, amount, pug));
    };

    const { onCopy } = useClipboard();
    const copyToClipboard = () => {
        let colorObj = {};
        if (configType === 'flattened') {
            colorObj = arrayToObject(shades, name);
        } else {
            colorObj[name] = arrayToObject(shades);
        }
        onCopy(JSON.stringify(colorObj, null, 2));
    };

    const [name, setName] = useState('New_Color');
    const [pug, setPug] = useState(60);

    useEffect(() => {
        getShades(color, amount);
    }, [color, pug, amount]);

    const [colorCopied, setColorCopied] = useState(false);
    const copyColor = (color) => () => {
        onCopy(color);
        setColorCopied(true);
        setTimeout(() => {
            setColorCopied(false);
        }, 500);
    };

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
                    <h1 className="my-8 text-xl md:text-5xl text-center">
                        JSON Color Palette Generator
                    </h1>
                    <SectionBox name="Settings">
                        <div className="flex flex-col md:flex-row justify-center gap-8">
                            <div>
                                <label className="block mb-2">Color Name</label>
                                <input
                                    type="text"
                                    className="border p-2 rounded w-56"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Palette Size</label>
                                <input
                                    type="number"
                                    className="border p-2 rounded w-56"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="w-80">
                                <h3 className="mb-2">Diffing Index</h3>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={pug}
                                    onChange={(e) => setPug(e.target.value)}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center space-x-4">
                                <h3>Base Color</h3>
                                <ColorInput
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>
                    </SectionBox>
                    <SectionBox name="Preview">
                        <h3 className="mb-4">{name}</h3>
                        <div className="flex  max-w-full">
                            <CustomScrollbars
                                autoHide={false}
                                style={{ height: 70 }}

                            >
                                <div className="flex">
                                    {shades.map((color, ind) => (
                                        <div
                                            key={`${ind}-color-shade`}
                                            className="min-w-16  min-h-16 flex items-center justify-center cursor-pointer"
                                            style={{ backgroundColor: color }}
                                            onClick={copyColor(color)}
                                        >
                                            {ind === 0 ? 50 : ind * 100}
                                        </div>
                                    ))}
                                </div>
                            </CustomScrollbars>
                        </div>
                    </SectionBox>
                    <SectionBox name="Actions">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div>
                                <label className="block mb-2">Config Type?</label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="configType"
                                            value="flattened"
                                            checked={configType === 'flattened'}
                                            onChange={() => setConfigType('flattened')}
                                            className="mr-2"
                                        />
                                        Flattened
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="configType"
                                            value="nested"
                                            checked={configType === 'nested'}
                                            onChange={() => setConfigType('nested')}
                                            className="mr-2"
                                        />
                                        Nested
                                    </label>
                                </div>
                            </div>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
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
