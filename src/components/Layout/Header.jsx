import React, { useState, useLayoutEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import classNames from '@shared/classNames'
import { motion as m } from "framer-motion";
import ThemeModeSwitcher from "@components/ThemeModeSwitcher";
import { ThemeMode, themeModeLocalStorageKey } from "@shared/constants"
import { SectionAppearAnimation } from "@shared/animation";
const navigation = [
    { name: 'GRADIENT', href: 'gradient'},
    { name: 'COLOR SHADES', href: 'color-shades', href2: 'color-shades/:slug'},
    { name: 'SWATCHES', href: 'swatches', href2: 'swatches/:name' },

]

const Header = () => {

    const [activeThemeMode, setActiveThemeMode] = useState(null)
    const setThemeMode = modeName => {
        document.documentElement.setAttribute("data-theme", modeName)
        localStorage.setItem(themeModeLocalStorageKey, modeName)
        setActiveThemeMode(modeName)
    }
    useLayoutEffect(() => {
        const themeFromLocalStorage = localStorage.getItem(themeModeLocalStorageKey)
        const themeFromSystemPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
            ? ThemeMode.DARK
            : ThemeMode.LIGHT

        setThemeMode(themeFromLocalStorage || themeFromSystemPreference)
    }, [])
    const toggleThemeMode = () => {
        return setThemeMode(
            document.documentElement.getAttribute("data-theme") === ThemeMode.LIGHT
                ? ThemeMode.DARK
                : ThemeMode.LIGHT
        )
    }

    const location = useLocation();
    const isActive = (href, href2) => {
        const dynamicPattern = href2 ? href2.replace(':slug', '[^/]+').replace(':name', '[^/]+') : '';
        const dynamicRegex = new RegExp(`^/${dynamicPattern}$`);
        return location.pathname === `/${href}` || (dynamicPattern && dynamicRegex.test(location.pathname));
    };
    return (
        <m.header
            initial={SectionAppearAnimation.initial}
            animate={SectionAppearAnimation.animate}
            transition={SectionAppearAnimation.transition(0)}
            className="bg-white header shadow"
        >

            <div className="container flex mx-auto px-6 py-4">
                <h1 className="text-3xl font-bold text-gray-800">CSS Gradient Swatches</h1>
                <nav className="hidden lg:ml-6 lg:flex flex-1">
                    <ul className="list-none text-center lg:space-x-2">
                        {navigation.map((item, index) => {
                            const active = isActive(item.href, item.href2);
                            return (
                                <li key={index} className="inline-block">
                                    <Link
                                        to={item.href}
                                        className={classNames(
                                            active ? 'after:w-full text-[#555] font-bold' : 'hover:text-[#555] hover:after:w-full text-[#aaa]',
                                            'block relative py-2 px-2 text-[14px]  font-bold transition-all duration-500 uppercase after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:w-0 after:transition-all after:duration-500 after:bg-[#aaa] after:h-[1px]'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                {/* <ThemeModeSwitcher
                    activeThemeMode={activeThemeMode}
                    toggleThemeMode={toggleThemeMode}
                /> */}
            </div>
        </m.header>
    )
}

export default Header
