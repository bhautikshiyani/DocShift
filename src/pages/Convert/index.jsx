import React from 'react'
import { Link } from 'react-router-dom'

const Convert = () => {
    return (
        <div>
            <h2 className="text-hero font-[800] md:leading-[60px] dark:text-white text-fs-xl-100 mb-3">
                Color Converter
            </h2>
            <span className="paragraph text-black dark:text-white  text-body mb-3">This tool allows you to convert colors between 4 different formats: RGB, HEX, HSL, CMYK, HSV</span>

            <div className='p-4 rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '>

                <div>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)] ">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">rgb</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/rgbtohex" class="">RGB To HEX</Link></li>
                                <li><Link to="/convert/rgbtohsl" class="">RGB To HSL</Link></li>
                                <li><Link to="/convert/rgbtocmyk" class="">RGB To CMYK</Link></li>
                                <li><Link to="/convert/rgbtohsv" class="">RGB To HSV</Link></li>
                                <li><Link to="/convert/rgbtolab" class="">RGB To LAB</Link></li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">hex</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/hextorgb" class="">HEX To RGB</Link></li>
                                <li><Link to="/convert/hextohsl" class="">HEX To HSL</Link></li>
                                <li><Link to="/convert/hextocmyk" class="">HEX To CMYK</Link></li>
                                <li><Link to="/convert/hextohsv" class="">HEX To HSV</Link></li>
                                <li><Link to="/convert/hextolab" class="">HEX To LAB</Link></li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">hsl</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/hsltorgb" class="">HSL To RGB</Link></li>
                                <li><Link to="/convert/hsltohex" class="">HSL To HEX</Link></li>
                                <li><Link to="/convert/hsltocmyk" class="">HSL To CMYK</Link></li>
                                <li><Link to="/convert/hsltohsv" class="">HSL To HSV</Link></li>
                                <li><Link to="/convert/hsltolab" class="">HSL To LAB</Link></li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">cmyk</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/cmyktorgb" class="">CMYK To RGB</Link></li>
                                <li><Link to="/convert/cmyktohex" class="">CMYK To HEX</Link></li>
                                <li><Link to="/convert/cmyktohsl" class="">CMYK To HSL</Link></li>
                                <li><Link to="/convert/cmyktohsv" class="">CMYK To HSV</Link></li>
                                <li><Link to="/convert/cmyktolab" class="">CMYK To LAB</Link></li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">hsv</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/hsvtorgb" class="">HSV To RGB</Link></li>
                                <li><Link to="/convert/hsvtohex" class="">HSV To HEX</Link></li>
                                <li><Link to="/convert/hsvtohsl" class="">HSV To HSL</Link></li>
                                <li><Link to="/convert/hsvtocmyk" class="">HSV To CMYK</Link></li>
                                <li><Link to="/convert/hsvtolab" class="">HSV To LAB</Link></li>
                            </ul>
                        </div>
                        <div class="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)]">
                            <h2 class="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">lab</h2>
                            <ul class="list list--icon text-center">
                                <li><Link to="/convert/labtorgb" class="">LAB To RGB</Link></li>
                                <li><Link to="/convert/labtohex" class="">LAB To HEX</Link></li>
                                <li><Link to="/convert/labtohsl" class="">LAB To HSL</Link></li>
                                <li><Link to="/convert/labtocmyk" class="">LAB To CMYK</Link></li>
                                <li><Link to="/convert/labtohsv" class="">LAB To HSV</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Convert
