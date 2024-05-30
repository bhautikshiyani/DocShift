import React, { useEffect, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import * as Popover from '@radix-ui/react-popover';
import { colorShades, arrayToObject } from '@shared/utils';
const useClipboard = () => {
    const onCopy = (text) => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(text);
        }
    };
    return { onCopy };
};

const CSSVariables = () => {
    const [color, setColor] = useState('#06b6d4');
    const [amount, setAmount] = useState(10);
    const [shades, setShades] = useState([]);


    const getShades = (color, amount) => {
        setShades(colorShades(color, amount, 80));
    };

    const { onCopy } = useClipboard();




    useEffect(() => {
        getShades(color, amount);
    }, [color, amount]);

    const [colorCopied, setColorCopied] = useState(false);
    const copyColor = (color) => () => {
        onCopy(color);
        setColorCopied(true);
        setTimeout(() => {
            setColorCopied(false);
        }, 500);
    };
    return (
        <div className=''>
            <h1 className="text-fs-200">CSS / SCSS <span className="text-gradient orange">color variables</span> generator</h1>
            <p className="subtitle-1 text-muted mb-3">
                Generate your custom color variables with our easy-to-use CSS and SCSS
                Variables Generator to easily create and manage your CSS and SCSS custom variables.
            </p>
            <div>
                <lable>Color primary</lable>
                <div className='flex bprder'>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="w-[50px] h-[50px]" style={{ backgroundColor: color }} aria-label="Update dimensions"> </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content className="PopoverContent " sideOffset={5}>
                                <div className='custom-layout '>
                                    <HexColorPicker color={color} onChange={setColor} />
                                </div>
                                <Popover.Arrow className="PopoverArrow" />
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                    <input type='text' value={color} onChange={(e) => setColor(e.target.value)} className='' />
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <button>-</button>
                    <button>+</button>

                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {shades.map((color, ind) => (
                    <div>
                        <div
                            key={`${ind}-color-shade`}
                            className="h-[6rem] flex items-center  justify-center cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={copyColor(color)}
                        ></div>

                        <p className="subtitle-1 font-meidum mt-2 mb-1">
                            Primary - {ind === 0 ? 50 : ind * 100}
                        </p>

                        <p className="subtitle-2 text-muted mb-0">
                            #293237
                        </p>
                    </div>
                ))}
            </div>
            <h2 className="text-fs-400 font-bold mb-3"><i className="material-icons-outlined text-primary me-1 mb-1"></i>
                Code
            </h2>
            <div>
                <div className="code-block-content">
                    <div className="code-lang" >css
                    </div>
                    <pre>
                        <code>
                            <div className="code-line">
                                <span className="token comment">/** CSS PRIMARY COLORS */</span>
                            </div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a0: </span>
                                <span className="token number">#ffffff</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a10: </span>
                                <span className="token number">#dee4e7</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a20: </span>
                                <span className="token number">#bdc9cf</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a30: </span>
                                <span className="token number">#9eafb8</span>
                                ;
                            </div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a40: </span>
                                <span className="token number">#7f96a1</span>
                                ;
                            </div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a50: </span>
                                <span className="token number">#607d8b</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a60: </span>
                                <span className="token number">#4d636e</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a70: </span>
                                <span className="token number">#3a4a52</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a80: </span>
                                <span className="token number">#293237</span>;</div>
                            <div className="code-line">
                                <span className="token property">--color-primary-a90: </span>
                                <span className="token number">#181c1f</span>;</div>
                            <div className="code-line"></div>
                            <div className="code-line">
                                <span className="token comment">/** EXAMPLES */</span>
                            </div>
                            <div className="code-line">
                                <span className="token property">color: </span>
                                <span className="token attribute">var(--color-primary-a50)</span>;</div>
                            <div className="code-line"><span className="token property">background-color: </span>
                                <span className="token attribute">var(--color-primary-a90)</span>;</div>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default CSSVariables
