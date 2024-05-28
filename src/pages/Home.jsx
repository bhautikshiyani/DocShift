import React from 'react'

const Home = () => {
    return (
        <>
            <section className='mt-[-72px] section-home p-[105px_0_80px] min-h-[75px] bg-transparent relative flex flex-col justify-center'>

                <div className='container z-[1]'>
                    <div className='grid grid-cols-2'>
                        <div>

                            <h1 className="text-hero font-[800] leading-[60px] dark:text-white text-fs-xl-100 mb-3">
                                The easiest CSS color
                                <br />
                                <span className="text-gradient indigo">gradient generators</span>
                                <span className="text-gradient orange">.</span>
                            </h1>
                            <p className="paragraph !text-black  text-body mb-3">
                                The most intuitive tool to generate gradients, palettes, and color schemes!
                                {/* <span className="block">
                                    Use our color tools to make
                                    beautiful designs, and get inspiration from many colors.
                                </span> */}
                            </p>
                        </div>
                        <div className=''>
                            <div>
                                <div>
                                    <div className="relative grid auto-cols-[1fr] hover:gap-8 group grid-cols-[repeat(5,_5em)]  grid-flow-col gap-[1rem] [transition:all_.3s_cubic-bezier(.25,.8,.25,1)] justify-center">
                                        <div className="w-[12rem] h-[12rem] min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-0" role="button">
                                            <div id="gradient-item-0" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-100 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: ' linear-gradient(45deg, rgb(255, 209, 42), rgb(255, 181, 71), rgb(255, 152, 99), rgb(255, 123, 128), rgb(255, 94, 157))' }}>
                                                <i className="material-icons-outlined"></i>
                                            </div>
                                        </div>
                                        <div className="w-[12rem] h-[12rem] min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-1" role="button">
                                            <div id="gradient-item-1" className="bg-[#f8f8f8] transition-all ease-in-out duration-300  delay-200 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: ' linear-gradient(45deg, rgb(100, 149, 237), rgb(70, 130, 180), rgb(34, 111, 162), rgb(30, 77, 146))' }}>
                                                <i className="material-icons-outlined"></i>
                                            </div>
                                        </div>
                                        <div className="w-[12rem] h-[12rem] min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-2" role="button">
                                            <div id="gradient-item-2" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-300 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(247, 216, 209), rgb(209, 240, 247))' }}>
                                                <i className="material-icons-outlined"></i>
                                            </div>
                                        </div>
                                        <div className="w-[12rem] h-[12rem] min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-3" role="button">
                                            <div id="gradient-item-3" className="bg-[#f8f8f8] transition-all ease-in-out duration-300  delay-[400ms] cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(147, 191, 159), rgb(85, 139, 121), rgb(57, 105, 94))' }}>
                                                <i className="material-icons-outlined"></i>
                                            </div>
                                        </div>
                                        <div className="w-[12rem] h-[12rem] min-h-[12rem] transition-all ease-in-out duration-300 [aspect-ratio:1]" id="gradient-grid-4" role="button">
                                            <div id="gradient-item-4" className="bg-[#f8f8f8] transition-all ease-in-out duration-300 delay-500 cursor-pointer h-[100%] group-hover:rounded-[25px] group-hover:rotate-45 [clip-path:circle(calc(12rem_/_1_+_0.4em_*_2))] text-center rounded-[50%] relative" style={{ background: 'linear-gradient(45deg, rgb(51, 41, 47), rgb(71, 60, 58), rgb(91, 79, 75), rgb(111, 98, 96))' }}>
                                                <i className="material-icons-outlined"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mt-4 mb-3'>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                    <div className='card card-home home-palette  relative hover:rounded-[12px] hover:shadow-none   transition duration-300 rounded-xl dark:bg-dark-primary-base my-2 p-4 dark:bg-mix-dark-surface-base dark:bg-mix-amount-[90] bg-light-primary-base bg-mix-light-surface-base bg-mix-amount-[90] '>
                        <h2 className='font-bold text-black dark:text-white text-[20px]'>Palettes</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
