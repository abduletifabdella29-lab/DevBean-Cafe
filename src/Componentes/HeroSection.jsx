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
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:h-px after:w-0 after:bg-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                            SHOP
                        </a>

                        <a href="#" 
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                            MENU
                        </a>

                        <a
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px  after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                            CART
                        </a>

                        <a href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                            ORDERS
                        </a>

                        <a
                            href="#"
                            className="text-[16px] text-[#C3C3C6] font-['Averia_Serif_Libre'] relative inline-block transition-all duration-300 ease-in-out hover:text-[#FFB74D] after:absolute after:left-0 after:-bottom-1 after:h-px  after:w-0 after:bg-[#FFB74D] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                            PROFILE
                        </a>

                        <button className="border border-red-600 rounded-full px-5 py-2 text-red-600 text-[13px] font-serif tracking-wide bg-transparent hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 ease-in-out">
                            LOGOUT
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection