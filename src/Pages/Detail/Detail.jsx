import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../Shop/ShopData.js'
import { reviews } from './DetailData.js'

export default function Detail() {

    const { id } = useParams()

    const product = products.find((p) => p.id === Number(id))

    
    if (!product) {
    return <Navigate to="*" replace />
    }

    return (
        <main className="px-12 py-6">
            {/* ---------- Back ---------- */}
            <Link
                to="/Shop"
                className="inline-block mb-6 px-5 py-1 rounded bg-[#FFB74D] text-black text-[13px] font-['DM_Serif_Text'] font-bold transition-all duration-300 hover:bg-[#ffa726]"
            >
                Back
            </Link>

            {/* ---------- Product ---------- */}
            <section className="bg-[#1E1B1A] rounded-md p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-72 h-48 bg-[#5a3a34] rounded overflow-hidden flex items-center justify-center text-[#C3C3C6] text-xs shrink-0">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        'image'
                    )}
                </div>

                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-white text-[32px] font-['DM_Serif_Text'] font-bold">
                        {product.name}
                    </h1>
                    <p className="text-[#D7C6B9] text-[16px] font-['DM_Serif_Text']">
                        {product.description}
                    </p>
                    <p className="text-[#FFB74D] text-[24px] font-['DM_Serif_Text'] font-bold">
                        ₹ {product.price}
                    </p>
                    <span className="px-3 py-1 rounded bg-[#3B2420] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text']">
                        {product.category}
                    </span>

                    <button className="px-9 py-2 bg-[#FFB74D] text-black text-[16px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726]">
                        Add to Cart
                    </button>
                </div>
            </section>
        </main>
    )
}