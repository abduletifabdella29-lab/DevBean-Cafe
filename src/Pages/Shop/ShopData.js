import shopImage from '../../assets/Images/shopimg.png';

export const categories = [
    'All',
    'Packed Items',
    'Baked Goods',
    'Savory',
    'Desserts',
    'Healthy',
]

export const products = [
    // ---------- Desserts ----------
    {
        id: 1,
        name: 'Blueberry Cheesecake',
        description: 'Creamy cheesecake topped with blueberry compote.',
        price: 240,
        image: 'shopImage',
        category: 'Desserts',
    },
    {
        id: 2,
        name: 'Chocolate Brownie',
        description: 'Fudgy brownie with rich dark chocolate chunks.',
        price: 150,
        image: 'shopImage',
        category: 'Desserts',
    },
    {
        id: 3,
        name: 'Tiramisu Cup',
        description: 'Coffee-soaked layers with mascarpone cream.',
        price: 220,
        image: 'shopImage',
        category: 'Desserts',
    },

    // ---------- Baked Goods ----------
    {
        id: 4,
        name: 'Butter Croissant',
        description: 'Buttery, flaky and freshly baked every morning.',
        price: 120,
        image: 'shopImage',
        category: 'Baked Goods',
    },
    {
        id: 5,
        name: 'Cinnamon Roll',
        description: 'Soft roll swirled with cinnamon and sweet glaze.',
        price: 140,
        image: 'shopImage',
        category: 'Baked Goods',
    },

    // ---------- Savory ----------
    {
        id: 6,
        name: 'Cheese Puff',
        description: 'Crispy pastry filled with melted cheese.',
        price: 110,
        image: 'shopImage',
        category: 'Savory',
    },
    {
        id: 7,
        name: 'Veggie Sandwich',
        description: 'Fresh vegetables, cheese and herb spread on toasted bread.',
        price: 180,
        image: 'shopImage',
        category: 'Savory',
    },

    // ---------- Packed Items ----------
    {
        id: 8,
        name: 'Butter Cookies Box',
        description: 'A box of crunchy homemade butter cookies.',
        price: 300,
        image: 'shopImage',
        category: 'Packed Items',
    },
    {
        id: 9,
        name: 'Granola Jar',
        description: 'Crunchy oats, honey and roasted nuts in a jar.',
        price: 350,
        image: 'shopImage',
        category: 'Packed Items',
    },

    // ---------- Healthy ----------
    {
        id: 10,
        name: 'Fruit Salad Bowl',
        description: 'Seasonal fresh fruits with a touch of honey.',
        price: 160,
        image: 'shopImage',
        category: 'Healthy',
    },
    {
        id: 11,
        name: 'Oat Energy Bar',
        description: 'Oats, dates and seeds with no added sugar.',
        price: 90,
        image: 'shopImage   ',
        category: 'Healthy',
    },
    {
        id: 12,
        name: 'Greek Yogurt Parfait',
        description: 'Yogurt layered with berries and crunchy granola.',
        price: 190,
        image: 'shopImage',
        category: 'Healthy',
    },
];