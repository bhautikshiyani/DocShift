import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, matchPath, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();
    const isSwatchesDetail = matchPath("/swatches/:name", location.pathname) || matchPath("/gradient", location.pathname);

    return (
        <div className="min-h-screen transition duration-300 bg-[var(--theme-background)] flex flex-col">
            <Header />
            {
                isSwatchesDetail ?
                    <main className="flex-grow flex min-h-[70vh]">
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
