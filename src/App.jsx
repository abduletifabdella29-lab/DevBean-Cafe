import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  )
}

export default App