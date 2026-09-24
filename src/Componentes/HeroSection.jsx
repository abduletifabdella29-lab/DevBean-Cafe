import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import banner from "../assets/Images/banner.png";
import logo from "../assets/Icons/logo 1.png";

function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = ["SHOP", "MENU", "CART", "ORDERS", "PROFILE"];

    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            <div className="px-4 sm:px-8 lg:px-20 py-2 flex items-center justify-between relative">
                {/* Logo */}
                <div>
                    <img
                        src={logo}
                        style={{ width: "56px", height: "56px" }}
                        alt="Logo"
                    />
                </div>

                {/* Desktop nav */}
                <div className="hidden lg:flex md:flex space-x-4 ml-auto justify-between items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                        >
                            {link}
                        </a>
                    ))}

                    <button className="border border-red-600 rounded-full px-5 py-2 text-red-600 text-[13px] font-serif tracking-wide bg-transparent hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 ease-in-out">
                        LOGOUT
                    </button>
                </div>

                {/* Hamburger button (mobile) */}
                <button
                    className="lg:hidden md:hidden ml-auto"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <HiX className="" size={28} color="#C3C3C6" />
                    ) : (
                        <RiMenu3Fill size={28} color="#C3C3C6" />
                    )}
                </button>

                {/* Mobile dropdown menu */}
                <div
                    className={`lg:hidden md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out ${menuOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}

                    <button className="border border-red-600 rounded-full px-5 py-2 text-red-600 text-[13px] font-serif tracking-wide bg-transparent hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out">
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
