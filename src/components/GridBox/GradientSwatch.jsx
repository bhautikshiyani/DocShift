import React from 'react'
import { LuCopy } from 'react-icons/lu'
import { RiArrowRightLine } from 'react-icons/ri'

const GradientSwatch = ({ code, onCopy, handleClick, tooltip, status }) => {
    return (
        <div className="dark:bg-dark-primary-base dark:bg-mix-dark-surface-base dark-primary-base dark:bg-mix-amount-[90] bg-light-surface-base bg-mix-light-surface-base bg-mix-amount-[90] rounded-lg shadow-lg overflow-hidden cursor-pointer">
            <div className="h-[150px] relative">
                {
                    status ?
                        <div className="h-full" style={{ background: `linear-gradient(to right, ${code.colors.join(', ')})` }}></div>
                        :
                        <div className="h-full" style={{ backgroundColor: code.colors }}></div>
                }
                {tooltip.show && tooltip.name === code.name && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
                        Copied!
                    </div>
                )}
            </div>
            <div className="p-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold dark:text-white text-gray-800">{code.name}</h2>
                <div className='flex items-center'>
                    <button className='px-3' onClick={() => onCopy(code.name)}>
                        <LuCopy className='dark:text-white text-xl hover:dark:text-dark-primary-base text-gray-800' />
                    </button>
                    {
                        status &&
                        <button className='px-3' onClick={() => handleClick(code)}>
                            <RiArrowRightLine className='dark:text-white text-[24px] hover:dark:text-dark-primary-base text-gray-800' />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default GradientSwatch
