import React from 'react'
import HeroSection from '../Componentes/HeroSection'
import MenuSection from '../Componentes/Menu/MenuSection.jsx'
import CustomerFavouritesSection from '../Componentes/CustomerFavouritesSection/CustomersFavouritesSection.jsx'
import AboutUsSection from '../Componentes/AboutUsSection.jsx'
import VisitUsSection from '../Componentes/VisitUsSection.jsx'
import FollowUsSection from '../Componentes/FollowUs/FollowUsSection.jsx'
import Footer from '../Componentes/Footer.jsx'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <MenuSection />
            <CustomerFavouritesSection />
            <AboutUsSection />
            <VisitUsSection />
            <FollowUsSection />
            <Footer />
        </div>
    )
}