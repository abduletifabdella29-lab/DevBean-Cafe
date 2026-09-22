import React from 'react'
import banner from '../assets/Images/banner.png'
import logo from '../assets/Icons/logo 1.png'

function HeroSection() {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

                <div className='px-20 py-2'>
                    <div><img src={logo} style={{ width: '56px', height: '56px' }} alt="Logo" /></div>
                </div>
            </div>
        </>
    )
}

export default HeroSection