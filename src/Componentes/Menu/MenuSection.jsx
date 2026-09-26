import React from 'react';
import { MenuItems } from './MenuData.js';


function MenuCard({ image, title, price, category, description }) {
    return (
        <div>
            <img src={image} alt={title} />
            <div className="h-32 rounded-b-md" style={{ backgroundColor: '#F5EBE0' }}>
                <h3 className='text-[#5A4D41] font-["DM_Serif_Text"] text-[24px] text-center py-3'>{title} <span className='text-[#A37B67] pl-1'>{price}</span></h3>
                <p className="text-[#A37B67] text-[12px] font-['DM_Serif_Text'] pl-6 ">{category}</p>
                <p className="text-[#A37B67] text-[14px] font-['DM_Serif_Text'] pl-6 pt-2">{description}</p>
            </div>
        </div>
    );
}

function MenuSection() {
    return (
        <section style={{ backgroundColor: '#3E2723' }}>
            <h2 className='text-center text-[32px] font-["DM_Serif_Display"] text-[#D7C6B9] pt-9'>Our Menu</h2>

            <div className="pt-6 flex h-91 gap-6 justify-center items-center mx-16">
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

            <div className="text-center w-full pt-7 pb-16">
                <button className="text-[#E3983E]  py-2.5 px-3 border-2 border-[#E3983E] rounded-full font-['Averia_Serif_Libre']">
                    Full Menu
                </button>
            </div>
        </section>
    );
}

export default MenuSection;