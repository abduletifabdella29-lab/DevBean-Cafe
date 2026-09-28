import React from 'react';
import { MenuItems } from './MenuData.js';


function MenuCard({ image, title, price, category, description }) {
    return (
        <div className="w-full max-w-155 overflow-hidden rounded-md transition duration-400 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
            />

            <div className="w-full min-h-32 bg-[#F5EBE0]">
                <h3 className='text-[#5A4D41] font-["DM_Serif_Text"] text-[24px] text-center py-3'>{title} <span className='text-[#A37B67] pl-1'>{price}</span></h3>
                <p className="text-[#A37B67] text-[12px] font-['DM_Serif_Text'] pl-6 ">{category}</p>
                <p className="text-[#A37B67] text-[14px] font-['DM_Serif_Text'] pl-6 pt-2">{description}</p>
            </div>
        </div>
    );
}

function MenuSection() {
    return (
        <section className="bg-[#3E2723] px-4 sm:px-8 md:px-16 py-10">
            <h2 className='text-center text-3xl sm:text-[32px] font-["DM_Serif_Display"] text-[#D7C6B9] mb-10'>Our Menu</h2>

            {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-0 lg:gap-6">
                {MenuItems.map((item) => (
                    <MenuCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                    />
                ))}
            </div>

            <div className="text-center w-full pt-10 pb-6">
                <button className="text-[#E3983E]  py-2.5 px-3 border-2 border-[#E3983E] rounded-full font-['Averia_Serif_Libre']  hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37] transition-all duration-300 ease-in-out">
                    Full Menu
                </button>
            </div>
        </section>
    );
}

export default MenuSection;