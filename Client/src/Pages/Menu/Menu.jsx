import React from 'react'
import { useState } from 'react'
import { categories, menuItems } from './MenuData.js'

export default function Menu() {
    const [active, setActive] = useState('All');

    const filtered = 
    active === "All" ? menuItems : menuItems.filter((item) => item.category === active );

    return (
            <main className="px-12 py-4">
                {/* ---------- Category pills ---------- */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActive(cat.name)}
                            className={`px-4 py-2 rounded-full text-center text-[18px] font-semibold font-['DM_Serif_Text'] transition ${active === cat.name
                                        ? 'bg-[#FFB74D] text-black'
                                        : 'bg-[#E8DDD3] text-black hover:bg-[#FFB74D] duration-300'
                                    }`}
                        >
                            <span className="mr-1">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* ---------- Menu grid ---------- */}
                <div className="grid grid-cols-4 gap-6">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#F5EBE0] rounded-md overflow-hidden flex flex-col"
                        >
                            {/* image */}
                            <div className="w-full h-48 bg-[#5a3a34] flex items-center justify-center text-[#C3C3C6] text-xs">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    'image'
                                )}
                            </div>

                            {/* details */}
                            <div className="p-4 flex flex-col gap-2">
                                <div className="flex items-center justify-center gap-3">
                                    <h3 className="text-black text-[20px] font-['DM_Serif_Text']">
                                        {item.name}
                                    </h3>
                                    <span className="text-[#6F4E37] text-[20px] font-['DM_Serif_Text']">
                                        ₹ {item.price}
                                    </span>
                                </div>

                                <p className="text-[#3B2420] text-[10px] font-['DM_Serif_Text']">
                                    {item.type}
                                </p>

                                <p className="text-[#6F4E37] text-[14px] font-['DM_Serif_Text']">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
    )
}