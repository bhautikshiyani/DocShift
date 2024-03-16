import React from "react";
import { motion as m } from "framer-motion";
import ThemeModeSwitcher from "@components/ThemeModeSwitcher";
import { SectionAppearAnimation } from "@shared/animation";
import Logo from "@assets/svg/logo.svg?react";
import "./Header.scss";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ activeThemeMode, toggleThemeMode }) => (
  // add wrapper div to prevent unwanted scrolling
  <div>
    <m.header
      initial={SectionAppearAnimation.initial}
      animate={SectionAppearAnimation.animate}
      transition={SectionAppearAnimation.transition(0)}
      className="header"
    >
      {/* <div className="logo">
        <Logo className="logo__icon" />
        <h1 className="logo__title">CSS Gradient</h1>
      </div> */}
 <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    >
                      CSS Gradient
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1  px-2 lg:ml-6 justify-end">
                <ThemeModeSwitcher
                  activeThemeMode={activeThemeMode}
                  toggleThemeMode={toggleThemeMode}
                />
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {/* {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )} */}
                </Disclosure.Button>
              </div>
           
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                CSS Gradient
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
     
    </m.header>

   
  </div>
);

export default Header;
