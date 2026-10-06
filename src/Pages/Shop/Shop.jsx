import React from 'react'
import { useState } from 'react'
import { categories, products } from './ShopData.js'
import Navbar from '../../Componentes/Navbar.jsx';

export default function Shop() {

    const [active, setActive] = useState('🍽️ All');

    const filtered =
        active === '🍽️ All' ? products : products.filter((p) => p.category === active)

    return (
        <div className="bg-[#121212] min-h-screen">
            <Navbar />
            <main className="bg-[#121212] min-h-screen px-12 py-8">
                {/* ---------- Category pills ---------- */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 rounded-full text-center font-['DM_Serif_Text'] transition ${active === cat
                                    ? 'bg-[#FFB74D] text-black'
                                    : 'bg-[#E8DDD3] text-black hover:bg-[#FFB74D] duration-300'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ---------- Product grid ---------- */}
                <div className="grid grid-cols-4 gap-6">
                    {filtered.map((p) => (
                        <div
                            key={p.id}
                            className="bg-[#3B2420] p-2 rounded-md flex flex-col"
                        >
                            {/* image */}
                            <div className="w-full h-32.5 bg-[#5a3a34] rounded overflow-hidden flex items-center justify-center text-[#C3C3C6] text-xs">
                                {p.image ? (
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    'image'
                                )}
                            </div>

                            <h3 className="text-white text-[20px] font-['DM_Serif_Text'] font-bold mt-3">
                                {p.name}
                            </h3>
                            <p className="text-[#D7C6B9] text-xs font-['DM_Serif_Text'] mt-1">
                                {p.description}
                            </p>
                            <p className="text-[#D7C6B9] text-[14px] font-['Averia_Serif_Libre'] mt-2">
                                ₹ {p.price}
                            </p>

                            <button className="w-full mt-3 py-1.5 bg-[#FFB74D] text-black text-[13px] font-['Averia_Serif_Libre'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726]">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}