import React from 'react'
import banner from '../assets/Images/banner.png'
import logo from '../assets/Icons/logo 1.png'

function HeroSection() {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

                <div className='px-20 py-2 flex'>
                    <div><img src={logo} style={{ width: '56px', height: '56px' }} alt="Logo" /></div>

                    <div className='flex space-x-4 ml-auto justify-space-between items-center gap-4'>
                        <a href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block">
                            SHOP
                        </a>

                        <a href="#" 
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block">
                            MENU
                        </a>

                        <a
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block">
                            CART
                        </a>

                        <a href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block">
                            ORDERS
                        </a>

                        <a
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block">
                            PROFILE
                        </a>

                        <button className="border border-red-600 rounded-full px-5 py-2 text-red-600 text-[13px] font-serif tracking-wide bg-transparent">
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection