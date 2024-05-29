import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, matchPath, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const isSwatchesDetail = matchPath("/swatches/:name", location.pathname) || matchPath("/gradient", location.pathname);

    return (
        <div className="min-h-screen transition duration-300 dark:bg-dark-primary-base dark:bg-mix-dark-surface-base dark:bg-mix-amount-[95] bg-light-primary-base bg-mix-light-surface-base bg-mix-amount-[95] flex flex-col">
            <Header />
            {
                isSwatchesDetail ?
                    <main className="flex-grow flex">
                        <Outlet />
                    </main>
                    :
                    <main className="flex-grow container mx-auto px-6 py-8">
                        <Outlet />
                    </main>
            }
           
            <Footer />
        </div>
    )
}

export default Layout
