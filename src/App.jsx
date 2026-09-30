import React from 'react'
import HeroSection from './Componentes/HeroSection'
import MenuSection from './Componentes/Menu/MenuSection.jsx'
import CustomerFavouritesSection from "./Componentes/CustomerFavouritesSection/CustomersFavouritesSection.jsx";
import AboutUsSection from './Componentes/AboutUsSection.jsx';

function App() {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <CustomerFavouritesSection />
      <AboutUsSection />
    </div>
  )
}

export default App