import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Componentes/Layout.jsx'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<Layout />}>
                <Route path="/Shop" element={<Shop />} />
            </Route>
        </Routes>
    )
}

export default App