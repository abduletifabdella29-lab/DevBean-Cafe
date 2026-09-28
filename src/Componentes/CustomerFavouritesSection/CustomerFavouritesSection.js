import featuredImg1 from '../../assets/Images/featured-img-1.png';
import featuredImg2 from '../../assets/Images/featured-img-2.png';
import featuredImg3 from '../../assets/Images/featured-img-3.png';
import featuredImg4 from '../../assets/Images/featured-img-4.png';
import { CiStar } from "react-icons/ci";

export const CustomerFavouritesItems = [
    {
        id: 1,
        image: featuredImg1,
        title: 'Caramel Latte',
        price: "₹190",
        star: <CiStar className='text-[#E7B504] w-[16.55px] h-[15.87px]' />,
        rating: 4.9,
        description: "Espresso with steamed milk <br /> and caramel syrup"
    },

    {
        id: 2,
        image: featuredImg2,
        title: 'Blueberry Muffin',
        price: "₹150",
        star: <CiStar className='text-[#E7B504] w-[16.55px] h-[15.87px]' />,
        rating: 4.8,
        description: "Freshly baked with juicy <br /> blueberries"
    },

    {
        id: 3,
        image: featuredImg3,
        title: 'Avacado Toast',
        price: "₹200",
        star: <CiStar className='text-[#E7B504] w-[16.55px] h-[15.87px]' />,
        rating: 4.6,
        description: "Sourdough with smashed avacado <br /> and spices"
    },

    {
        id: 4,
        image: featuredImg4,
        title: 'Iced Matcha',
        price: "₹270",
        star: <CiStar className='text-[#E7B504] w-[16.55px] h-[15.87px]' />,
        rating: 4.4,
        description: "Refreshing green tea with milk <br /> and ice"
    }
];