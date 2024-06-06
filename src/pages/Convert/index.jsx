import React from 'react'
import { Link } from 'react-router-dom'
import convert from 'color-convert';
import { color } from '@uiw/color-convert'

const Convert = () => {

    const { rgb, rgba, hsl, hsv, hsla, hsva ,  } = color('#d1021a');
    console.log("🚀 ~ Convert ~ rgba:",rgb, rgba, hsl, hsv, hsla, hsva)
   

    const rgbtohex = convert.rgb.hex(123, 45, 67);
    const rgbtohsl = convert.rgb.hsl(123, 45, 67);
    const rgbtocmyk = convert.rgb.cmyk(123, 45, 67);
    const rgbtohsv = convert.rgb.hsv(123, 45, 67);
    const rgbtolab = convert.rgb.lab(123, 45, 67);

    console.log("🚀 ~ Convert ~ rgbtohex:", rgbtohex, rgbtohsl, rgbtocmyk, rgbtohsv, rgbtolab)




    const hextorgb = convert.hex.rgb(123, 45, 67);
    const hextohsl = convert.hex.hsl(123, 45, 67);
    const hextocmyk = convert.hex.cmyk(123, 45, 67);
    const hextohsv = convert.hex.hsv(123, 45, 67);
    const hextolab = convert.hex.lab(123, 45, 67);

    console.log("🚀 ~ Convert ~ hextorgb:", hextorgb, hextohsl, hextocmyk, hextohsv, hextolab)



    const hsltorgb = convert.hsl.rgb(123, 45, 67);
    const hsltohex = convert.hsl.hex(123, 45, 67);
    const hsltocmyk = convert.hsl.cmyk(123, 45, 67);
    const hsltohsv = convert.hsl.hsv(123, 45, 67);
    const hsltolab = convert.hsl.lab(123, 45, 67);

    console.log("🚀 ~ Convert ~ hsltorgb:", hsltorgb, hsltohex, hsltocmyk, hsltohsv, hsltolab)




    const cmyktorgb = convert.cmyk.rgb([0, 63, 46, 52]);
    const cmyktohex = convert.cmyk.hex([0, 63, 46, 52]);
    const cmyktohsl = convert.cmyk.hsl([0, 63, 46, 52]);
    const cmyktohsv = convert.cmyk.hsv([0, 63, 46, 52]);
    const cmyktolab = convert.cmyk.lab([0, 63, 46, 52]);

    console.log("🚀 ~ Convert ~ cmyktorgb:", cmyktorgb, cmyktohex, cmyktohsl, cmyktohsv, cmyktolab)


    const hsvtorgb = convert.hsv.rgb([0, 63, 46, 52]);
    const hsvtohex = convert.hsv.hex([0, 63, 46, 52]);
    const hsvtohsl = convert.hsv.hsl([0, 63, 46, 52]);
    const hsvtocmyk = convert.hsv.cmyk([0, 63, 46, 52]);
    const hsvtolab = convert.hsv.lab([0, 63, 46, 52]);

    console.log("🚀 ~ Convert ~ hsvtorgb:", hsvtorgb, hsvtohex, hsvtohsl, hsvtocmyk, hsvtolab)
    


    const labtorgb = convert.lab.rgb([0, 63, 46, 52]);
    const labtohex = convert.lab.hex([0, 63, 46, 52]);
    const labtohsl = convert.lab.hsl([0, 63, 46, 52]);
    const labtocmyk = convert.lab.cmyk([0, 63, 46, 52]);
    const labtohsv = convert.lab.hsv([0, 63, 46, 52]);

    console.log("🚀 ~ Convert ~ labtorgb:", labtorgb, labtohex, labtohsl, labtocmyk, labtohsv)

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
