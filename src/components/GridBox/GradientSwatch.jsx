import React from 'react'

const GradientSwatch = ({ code, onCopy, handleClick, tooltip, status }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
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
                <h2 className="text-xl font-semibold text-gray-800">{code.name}</h2>
                <div className='flex items-center'>

                    <button className='px-3' onClick={() => onCopy(code.name)}>
                        <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#1F2667" strokeWidth="2" fill="none" fillRule="evenodd">
                                <path d="M5 5h7v11H5z"></path>
                                <path d="M1 15V1h10"></path>
                            </g>
                        </svg>
                    </button>
                    {
                        status &&
                        <button className='px-3' onClick={() => handleClick(code)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#1F2667" width="20px" height="20px" viewBox="0 0 24 24">
                                <path d="M14.707,20.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L13.293,4.707a1,1,0,0,1,1.414-1.414l8,8a1,1,0,0,1,.216.325.986.986,0,0,1,0,.764,1,1,0,0,1-.216.325Z" />
                            </svg>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default GradientSwatch
