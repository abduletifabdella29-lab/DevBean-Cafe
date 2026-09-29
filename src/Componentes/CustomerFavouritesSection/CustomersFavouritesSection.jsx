import React from "react";
import { CiStar } from "react-icons/ci";
import { CustomerFavouritesItems } from "./CustomerFavouritesData.js";

function CustomerFavouritesCard({ image, title, price, rating, description }) {
    return (
        <div className="transition duration-400 ease-in-out hover:-translate-y-2 hover:shadow-xl rounded-md overflow-hidden flex flex-col">

            <img src={image} alt={title} className="w-full h-auto object-cover" />

            <div className="h-36 rounded-b-md p-4" style={{ backgroundColor: "#3E2723" }}>
                <h3 className='text-[#D7C6B9] font-["DM_Serif_Text"] text-[20px] text-center'>
                    {title} <span className="text-[#E3983E] pl-1 lg:pl-3">{price}</span>
                </h3>

                <div className="flex items-center justify-left gap-1 pt-1 ">
                    <button>
                        <CiStar className="text-[#E7B504] w-[16.55px] h-[15.87px]" />
                    </button>

                    <span className="text-[#D7C6B9] text-[14px] font-semibold">
                        {rating}
                    </span>
                </div>

                <p
                    className="text-[#D7C6B9] text-[16px] font-['Averia_Serif_Libre'] leading-4.5 text-left  pt-1"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
            </div>
        </div>
    );
}

function CustomerFavouritesSection() {
    return (
        <div className="bg-[#121212] py-15 px-6">
            <h2 className='text-center text-[32px] font-["DM_Serif_Display"] text-[#D7C6B9]'>
                Customer Favourites
            </h2>
            <p className='text-center text-[16px] font-["DM_Serif_Display"] text-[#D7C6B9] pt-2 pb-13'>
                Most loved items this month
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-10 lg:gap-6">
                {CustomerFavouritesItems.map((item) => (
                    <CustomerFavouritesCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomerFavouritesSection;
