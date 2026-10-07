import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
    return (
        <div className="bg-[#121212] min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-1">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}