import React from 'react'
import { HiCode } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className=''>
            <section className='mt-[-72px] section-home p-[105px_0_80px] md:min-h-[75vh] bg-transparent relative flex flex-col justify-center'>
                <div className='container z-[1]'>
                    <div className='grid lg:grid-cols-2'>
                        <div>
                            <h1 className="text-hero font-[800] md:leading-[60px] dark:text-white text-fs-xl-100 mb-3">
                                The easiest CSS color
                                <br />
                                <span className="text-gradient indigo">gradient generators</span>
                                <span className="text-gradient orange">.</span>
                            </h1>
                            <p className="paragraph text-black dark:text-white  text-body mb-3">
                                The most intuitive tool to generate gradients, palettes, and color schemes!
                            </p>
                        </div>
                        <div className='lg:block hidden'>
                            <div>
                                <div>
                                    <div className="relative grid auto-cols-[1fr] hover:gap-8 group grid-cols-[repeat(5,_5em)]  grid-flow-col gap-[1rem] [transition:all_.3s_cubic-bezier(.25,.8,.25,1)] justify-center">
                                        <div className="lg:w-[10rem] lg:h-[10rem] lg:min-h-[10rem] xl:w-[12rem] xl:h-[12rem] xl:min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-0" role="button">
                                            <div id="gradient-item-0" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-100 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: ' linear-gradient(45deg, rgb(255, 209, 42), rgb(255, 181, 71), rgb(255, 152, 99), rgb(255, 123, 128), rgb(255, 94, 157))' }}>
                                            </div>
                                        </div>
                                        <div className="lg:w-[10rem] lg:h-[10rem] lg:min-h-[10rem] xl:w-[12rem] xl:h-[12rem] xl:min-h-[12rem]  transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-1" role="button">
                                            <div id="gradient-item-1" className="bg-[#f8f8f8] transition-all ease-in-out duration-300  delay-200 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: ' linear-gradient(45deg, rgb(100, 149, 237), rgb(70, 130, 180), rgb(34, 111, 162), rgb(30, 77, 146))' }}>
                                            </div>
                                        </div>
                                        <div className="lg:w-[10rem] lg:h-[10rem] lg:min-h-[10rem] xl:w-[12rem] xl:h-[12rem] xl:min-h-[12rem]  transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-2" role="button">
                                            <div id="gradient-item-2" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-300 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(247, 216, 209), rgb(209, 240, 247))' }}>
                                            </div>
                                        </div>
                                        <div className="lg:w-[10rem] lg:h-[10rem] lg:min-h-[10rem] xl:w-[12rem] xl:h-[12rem] xl:min-h-[12rem]  transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-3" role="button">
                                            <div id="gradient-item-3" className="bg-[#f8f8f8] transition-all ease-in-out duration-300  delay-[400ms] cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(147, 191, 159), rgb(85, 139, 121), rgb(57, 105, 94))' }}>
                                            </div>
                                        </div>
                                        <div className="lg:w-[10rem] lg:h-[10rem] lg:min-h-[10rem] xl:w-[12rem] xl:h-[12rem] xl:min-h-[12rem]  transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-4" role="button">
                                            <div id="gradient-item-4" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-500 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(51, 41, 47), rgb(71, 60, 58), rgb(91, 79, 75), rgb(111, 98, 96))' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mt-4 grid gap-6'>
                <div className='grid sm:grid-cols-2 gap-5 md:grid-cols-3'>
                    <div className='card p-0.5 card-home home-palette card-1-bg relative rounded-[12px] transition duration-300 '>
                        <div className='z-[2] relative flex flex-col items-center gap-3 rounded-[16px] hover:rounded-[12px] hover:shadow-none transition duration-300 bg-[var(--theme-surface-container)] p-4'>
                            <div class="rounded-[12px] bg-[linear-gradient(110deg,_color(display-p3_.25_.25_.25)_40%,_transparent_0),_radial-gradient(farthest-corner_at_0_0,_color(display-p3_1_.73_.05)_70%,_color(display-p3_.13_.5_.73)_0)] h-[35px] w-[35px]"></div>
                            <h2 className='font-bold text-black dark:text-white text-[20px]'>Palettes</h2>
                        </div>
                    </div>
                    <div onClick={() => navigate('gradient')} className='card p-0.5 cursor-pointer card-home home-palette card-2-bg relative rounded-[12px] transition duration-300 '>
                        <div className='z-[2] relative flex flex-col items-center gap-3 hover:rounded-[12px] hover:shadow-none transition duration-300 rounded-xl bg-[var(--theme-surface-container)] p-4'>
                            <div class="rounded-full bg-[linear-gradient(45deg,color(display-p3_.77_0_.89),color(display-p3_.34_0_1))] h-[35px] w-[35px]"></div>
                            <h2 className='font-bold text-black dark:text-white text-[20px]'>Gradients</h2>
                        </div>
                    </div>
                    <div className='card p-0.5 card-home home-palette card-3-bg relative rounded-[12px] transition duration-300 '>
                        <div className='z-[2] relative flex flex-col  items-center gap-3 hover:rounded-[12px] hover:shadow-none transition duration-300 rounded-xl bg-[var(--theme-surface-container)] p-4'>
                            <div class="rounded-[12px] rotate-45 bg-[radial-gradient(circle,color(display-p3_0_.78_1),color(display-p3_0_.37_1))] h-[35px] w-[35px]"></div>
                            <h2 className='font-bold text-black dark:text-white text-[20px]'>Discover</h2>
                        </div>
                    </div>
                </div>
                <div className=' p-4 rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '>
                    <h2 className='font-bold text-black dark:text-white text-[20px]'>Tools</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                        <div className='dark:bg-dark-primary-base flex items-start gap-4 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]'>
                            <div className='w-[45px] rounded text-[24px] flex items-center justify-center h-[45px] text-white bg-[linear-gradient(135deg,#4327f2,#2a11c5)]'>
                                <HiCode />
                            </div>
                            <div>
                                <p class="paragraph !leading-6 !text-black dark:!text-white">CSS variables generator</p>
                                <p class="text-[#c0c5c9]">
                                    CSS &amp; Variables
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home