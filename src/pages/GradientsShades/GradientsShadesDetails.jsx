import React, { Fragment, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRotateRight } from "react-icons/md";
import { RiDownloadLine } from 'react-icons/ri';
import html2canvas from 'html2canvas';
import gradientsData from "@assets/gradients.json";
import classNames from '@shared/classNames';
import { IoCodeSharp } from 'react-icons/io5';
import ModalBox from '@components/Modal/ModalBox';
import CustomScrollbars from '@shared/CustomScrollbars';

const GradientsShadesDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    let [isOpen, setIsOpen] = useState(false)
    const { data } = location.state || {};
    const [angle, setAngle] = useState('to right');
    const angles = [null, 'to left', 'to top', 'to right'];
    const { name } = useParams();
   
    const setRotate = () => {
        const currentIndex = angles.indexOf(angle);
        const nextIndex = (currentIndex + 1) % angles.length;
        setAngle(angles[nextIndex]);
    };
    const downloadImage = () => {
        const element = document.getElementById('gradientDiv');
        html2canvas(element).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = name;
            link.click();
        });
    };

    function handleClick(item) {
        navigate(`/swatches/${item?.name}`, { state: { data: item?.colors } })
    }
    function open() {
        setIsOpen(true)
    }
    return (
        <>
            <section className=" flex-grow flex flex-col ">
                <div className='px-4 flex items-center py-2 border-t border-gray-200 dark:border-gray-700 transition duration-300 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] header shadow is-sticky'>
                    <div className='divide-x divide-gray-200 dark:divide-gray-700 flex gap-2 items-center '>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className={classNames(
                                sidebarOpen ? 'rotate-0' : 'rotate-90',
                                'w-[36px] h-[36px] text-black dark:text-white hover:bg-[#f2f2f3] rounded-md flex items-center justify-center transition-all duration-100 text-[24px]'
                            )}
                        >
                            <HiOutlineMenu />
                        </button>
                        <span className='pl-2 text-black dark:text-white hidden sm:block'>
                            Show all gradients
                        </span>
                    </div>
                    <div className='flex-1 flex justify-center '>
                        <div className="list-none flex items-center gap-2">
                            {data.map((items, index) => {
                                return (
                                    <Fragment key={index}>
                                        <button className="flex px-1.5 rounded py-1.5  bg-gray-200 items-center gap-1">
                                            <span className="w-3 border border-black h-3 block" style={{ background: items }}></span>
                                            <span className="text-sm hidden sm:block">{items}</span>
                                        </button>
                                        {
                                            index !== data.length - 1 && <FaArrowRightLong className='text-[10px] text-black dark:text-white' />
                                        }
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex divide-x divide-gray-200 dark:divide-gray-700 '>
                        <div className='px-2'>
                            <button
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Rotate Gradient"
                                data-tooltip-place="bottom"
                                onClick={setRotate}
                                className='w-[30px] active:rotate-90 h-[30px] text-black dark:text-white hover:bg-[#f2f2f3] rounded-md flex items-center justify-center transition-all duration-200 text-[16px]'>
                                <MdOutlineRotateRight />
                            </button>
                        </div>
                        <div className='px-2'>
                            <button
                                onClick={open}
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Get css"
                                data-tooltip-place="bottom"
                                className='w-[30px] h-[30px] hover:bg-[#f2f2f3] text-black dark:text-white rounded-md flex items-center justify-center transition-all duration-200 text-[16px]'>
                                <IoCodeSharp />
                            </button>
                        </div>
                        <div className='px-2'>
                            <button
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Get .png"
                                data-tooltip-place="bottom"
                                className='w-[30px] h-[30px] hover:bg-[#f2f2f3] text-black dark:text-white rounded-md flex items-center justify-center transition-all duration-200 text-[16px]'
                                onClick={downloadImage}>
                                <RiDownloadLine />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 relative flex'>
                    <div
                        className={classNames(
                            sidebarOpen ? '-translate-x-full ' : 'translate-x-0',
                            'flex w-full transition ease-in-out z-[2] duration-300 absolute h-full transform sm:min-w-xs max-w-xs flex-1'
                        )}
                    >
                        <div className="flex grow flex-col gap-y-5 bg-gray-900 ring-1 ring-white/10">
                            <CustomScrollbars>
                                <div className='flex  flex-col gap-y-5 p-4'>
                                    {gradientsData.gradients.map((item, index) => (
                                        <button
                                            onClick={() => handleClick(item)}
                                            key={index}
                                            className={classNames(
                                                name === item.name ? 'ring-2 ring-white ring-offset-1 ' : 'hover:ring-2 hover:ring-white hover:ring-offset-1',
                                                'min-h-[130px] cursor-pointer relative transition duration-200 ease-in-out hover:outline-none border-4 border-gray-900  max-h-[130px] rounded-lg'
                                            )}
                                            style={{ background: `linear-gradient(to right, ${item.colors.join(', ')})` }}>
                                            <span className=' text-[12px] text-white rounded-[2px] px-1 absolute left-2 bg-black/[50%] top-2'>{item.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </CustomScrollbars>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            sidebarOpen ? 'sm:ml-0' : 'sm:ml-[20rem]',
                            'h-full transition-all ease-in-out duration-300 transform flex-grow'
                        )}
                        id="gradientDiv"
                        style={{ background: `linear-gradient(${angle || 'to bottom'}, ${data.join(', ')})` }}>
                    </div>
                </div>
            </section>
            <ModalBox isOpen={isOpen} angle={angle} colors={data} setIsOpen={setIsOpen} />
        </>
    )
}

export default GradientsShadesDetails
