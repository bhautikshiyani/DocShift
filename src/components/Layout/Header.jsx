import React, { useState, useLayoutEffect, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import classNames from '@shared/classNames'
import { motion as m } from "framer-motion";
import ThemeModeSwitcher from "@components/ThemeModeSwitcher";
import { ThemeMode, themeModeLocalStorageKey } from "@shared/constants"
import { SectionAppearAnimation } from "@shared/animation";
const navigation = [
    { name: 'Home', href: '' },
    { name: 'GRADIENT', href: 'gradient' },
    { name: 'COLOR SHADES', href: 'color-shades', href2: 'color-shades/:slug' },
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


    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? header.classList.remove('is-sticky') : header.classList.add('is-sticky');
    };
    return (
        <m.header
            initial={SectionAppearAnimation.initial}
            animate={SectionAppearAnimation.animate}
            transition={SectionAppearAnimation.transition(0)}
            className="sticky header-section z-[9999] top-0 transition duration-300 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] header shadow"
        >
            <div className="container justify-between flex mx-auto px-6 py-4">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1c1c1c] to-[#2b040e] dark:from-[#ffd12a] dark:to-[#ff5e9d]">DocShift</h1>
                <nav className="hidden lg:ml-6 lg:flex flex-1">
                    <ul className="list-none text-center lg:space-x-2">
                        {navigation.map((item, index) => {
                            const active = isActive(item.href, item.href2);
                            return (
                                <li key={index} className="inline-block">
                                    <Link
                                        to={item.href}
                                        className={classNames(
                                            active ? 'after:w-full dark:text-dark-primary-base text-light-primary-base font-bold' : 'text-dark-surface-base dark:text-light-surface-base  hover:dark:text-dark-primary-base hover:text-light-primary-base hover:after:w-full ',
                                            'block relative py-2 px-2 text-[14px] transition-all duration-500 uppercase after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:w-0 after:transition-all after:duration-500 after:dark:bg-dark-primary-base after:bg-light-primary-base after:h-[1px]'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <ThemeModeSwitcher
                    activeThemeMode={activeThemeMode}
                    toggleThemeMode={toggleThemeMode}
                />
            </div>
        </m.header>
    )
}

export default Header
