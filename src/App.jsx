import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Componentes/Layout.jsx'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Detail from './Pages/Detail/Detail.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<Layout />}>
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/product/:id" element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default App