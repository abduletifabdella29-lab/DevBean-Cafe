import { Link } from 'react-router-dom'
import shopImage from '../../assets/Images/shopimg.png'

// Temporary data so the design is visible. It will be replaced by data from the API.
const items = [
    { id: 1, productId: 1, name: 'Blueberry Cheesecake', price: 240, quantity: 1, image: shopImage },
    { id: 2, productId: 4, name: 'Butter Croissant', price: 120, quantity: 2, image: shopImage },
]

export default function Cart() {
    return (
        <main className="px-6 sm:px-12 py-8 mb-30">
            <h1 className="text-[#D7C6B9] text-[24px] font-['DM_Serif_Text'] mb-4">My Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
                {/* ---------- Items ---------- */}
                <div className="flex flex-col gap-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#3B2420] rounded-md p-2 flex items-center gap-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded object-cover shrink-0"
                            />

                            <div className="flex-1 min-w-0">
                                <h3 className="text-white text-[16px] font-['DM_Serif_Text'] truncate">
                                    {item.name}
                                </h3>
                                <p className="text-[#D7C6B9] text-[14px] font-['DM_Serif_Text']">
                                    ₹ {item.price}
                                </p>
                            </div>

                            {/* quantity */}
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    aria-label="Decrease quantity"
                                    className="w-7.5 h-7.5 rounded-full bg-[#2A2321] text-white text-[14px] cursor-pointer transition-all duration-300 hover:bg-[#4a3a36]"
                                >
                                    -
                                </button>
                                <span className="text-white text-[16px] font-['DM_Serif_Text'] w-4 text-center">
                                    {item.quantity}
                                </span>
                                <button
                                    type="button"
                                    aria-label="Increase quantity"
                                    className="w-7.5 h-7.5 rounded-full bg-[#FFB74D] text-white text-[14px] cursor-pointer transition-all duration-300 hover:bg-[#ffa726]"
                                >
                                    +
                                </button>
                            </div>

                            {/* line total */}
                            <p className="text-[#D7C6B9] text-[16px] font-['DM_Serif_Text'] w-16 text-right">
                                ₹ {item.price * item.quantity}
                            </p>

                            {/* remove */}
                            <button
                                type="button"
                                aria-label={`Remove ${item.name}`}
                                className="text-red-500 text-[20px] cursor-pointer px-2 transition-all duration-300 hover:text-red-400"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                {/* ---------- Order summary ---------- */}
                
            </div>
        </main>
    )
}