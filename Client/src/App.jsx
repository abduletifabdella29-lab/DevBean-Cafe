import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Componentes/Layout.jsx'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Menu from './Pages/Menu/Menu.jsx'
import Detail from './Pages/Detail/Detail.jsx'
import NotFound from './Pages/NotFound.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<Layout />}>
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/product/:id" element={<Detail />} />
                <Route path="/cart"  element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path='/register' element={<Register/>} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App