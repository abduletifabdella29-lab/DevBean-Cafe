import React from 'react'
import HeroSection from './Componentes/HeroSection'
import MenuSection from './Componentes/Menu/MenuSection.jsx'
import CustomerFavouritesSection from "./Componentes/CustomerFavouritesSection/CustomersFavouritesSection.jsx";

function App() {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <CustomerFavouritesSection />
    </div>
  )
}

export default App