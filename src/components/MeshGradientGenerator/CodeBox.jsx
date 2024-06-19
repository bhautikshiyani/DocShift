import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import CustomScrollbars from '@shared/CustomScrollbars';
import { FiCopy } from "react-icons/fi";
import { onCopy } from '../../shared/utils';

const CodeBox = (props) => {
    const fallbackColor = props.backgroundColor; // Fallback to the last color
    const webkitGradient = `${props.colors.map((c) => `-webkit-radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`).join(', ')}, ${props.backgroundColor}`;
    const mozGradient = `${props.colors.map((c) => `-moz-radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`).join(', ')}, ${props.backgroundColor}`;
    const oGradient = `${props.colors.map((c) => `-o-radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`).join(', ')}, ${props.backgroundColor}`;
    const msGradient = `${props.colors.map((c) => `-ms-radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`).join(', ')}, ${props.backgroundColor}`;
    const standardGradient = `${props.colors.map((c) => `radial-gradient(at ${c.position.x}% ${c.position.y}%, ${c.color} 0px, transparent 50%)`).join(', ')}, ${props.backgroundColor}`;
    
    const cssCode = `
      background: ${fallbackColor}; /* fallback for old browsers */
      background: ${webkitGradient}; /* Chrome 10-25, Safari 5.1-6 */
      background: ${mozGradient}; /* Firefox 3.6-15 */
      background: ${oGradient}; /* Opera 11.1-12 */
      background: ${msGradient}; /* IE 10+ */
      background: ${standardGradient}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `;
    
    const formattedCssCode = (
      <code>
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{fallbackColor}</span>; <span className="text-[13px] text-gray-600">/* fallback for old browsers */</span><br />
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{webkitGradient}</span>; <span className="text-[13px] text-gray-600">/* Chrome 10-25, Safari 5.1-6 */</span><br />
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{mozGradient}</span>; <span className="text-[13px] text-gray-600">/* Firefox 3.6-15 */</span><br />
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{oGradient}</span>; <span className="text-[13px] text-gray-600">/* Opera 11.1-12 */</span><br />
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{msGradient}</span>; <span className="text-[13px] text-gray-600">/* IE 10+ */</span><br />
        <span className="text-[#2aa198] text-[12px]">background</span>: <span className="text-[13px] text-[#d33682]">{standardGradient}</span>; <span className="text-[13px] text-gray-600">/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */</span><br />
      </code>
    );
    

    function close() {
        props.setIsOpen(false)
    }
    return (
        <Transition appear show={props.isOpen}>
            <Dialog as="div" className="relative z-[99999] focus:outline-none" onClose={close}>
                <div className='fixed inset-0 bg-black/[50%]'></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full max-w-lg rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                    Copy CSS code
                                </DialogTitle>
                                <div className="bg-gray-800 text-white p-4 rounded-lg">
                                    <div className='w-full h-[160px]'>
                                        <CustomScrollbars>
                                            <pre className="">
                                                {formattedCssCode}
                                            </pre>
                                        </CustomScrollbars>
                                    </div>
                                    <button
                                        onClick={()=> onCopy(cssCode)}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={'Copy CSS'}
                                        data-tooltip-place="top"
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 outline-none  px-4 rounded transition duration-200 ease-in-out focus:outline-none border-2 border-transparent border-gray-800 focus:ring-2 focus:ring-green-700 focus:ring-offset-0 "
                                    >
                                        <FiCopy />
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CodeBox
