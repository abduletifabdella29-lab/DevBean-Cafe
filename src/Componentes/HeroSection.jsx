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
            {/* nav section */}
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

            {/* hero content */}
            <div className="pt-25.75 ml-20">
                <h2 className="text-white text-[54px] font-['DM_Serif_Display']">Dev<span className="text-[#8B6B5E]">Bean</span></h2>
                
                <p className="text-[#D7C6B9] text-[20px] font-['Averia_Serif_Libre']">Every Bean, Every Bite, Made to Delight.</p>

                <p className="text-[#D7C6B9] text-[24px] font-['Averia_Serif_Libre'] mt-4 leading-[1.2]">Discover the taste of home with our handcrafted pastries, <br /> artisan breads, and freshly brewed coffee. Order online or <br /> visit us to experience the magic.</p>

                <div>
                    <button className="bg-[#FFB74D] text-black rounded-full text-[16px] font-['Averia_Serif_Libre'] mt-8 hover:bg-[#6F4E37]  hover:text-white transition-all duration-300 ease-in-out w-27.25 h-12.75">
                        Order Now
                    </button>

                    <button className="bg-transparent border-2 border-[#E3983E] text-[#E3983E] rounded-full text-[16px] font-['Averia_Serif_Libre'] mt-8 ml-4 hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all duration-300 ease-in-out w-33.75 h-12.75 ">
                        Explore Menu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
