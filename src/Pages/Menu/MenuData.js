import menuImage from '../../assets/Images/menuimg.png';

export const categories = [
    { name: 'All', icon: '🍽️' },
    { name: 'Coffee', icon: '☕' },
    { name: 'Tea', icon: '🍵' },
    { name: 'Baked Goods', icon: '🍰' },
    { name: 'Savory', icon: '🥪' },
    { name: 'Desserts', icon: '🧁' },
    { name: 'Healthy', icon: '🥗' },
]

export const menuItems = [
    // ---------- Coffee ----------
    {
        id: 1,
        name: 'Cappuccino',
        price: 240,
        type: 'Hot Coffee',
        description: 'Espresso with steamed milk and foam',
        image: menuImage,
        category: 'Coffee',
    },
    {
        id: 2,
        name: 'Espresso',
        price: 150,
        type: 'Hot Coffee',
        description: 'Strong and rich single shot of coffee',
        image: menuImage,
        category: 'Coffee',
    },
    {
        id: 3,
        name: 'Iced Latte',
        price: 260,
        type: 'Cold Coffee',
        description: 'Espresso with cold milk over ice',
        image: menuImage,
        category: 'Coffee',
    },

    // ---------- Tea ----------
    {
        id: 4,
        name: 'Masala Chai',
        price: 120,
        type: 'Hot Tea',
        description: 'Spiced milk tea brewed with ginger and cardamom',
        image: menuImage,
        category: 'Tea',
    },
    {
        id: 5,
        name: 'Green Tea',
        price: 110,
        type: 'Hot Tea',
        description: 'Light and refreshing brewed green tea',
        image: menuImage,
        category: 'Tea',
    },

    // ---------- Baked Goods ----------
    {
        id: 6,
        name: 'Butter Croissant',
        price: 120,
        type: 'Fresh Bakery',
        description: 'Buttery, flaky and baked every morning',
        image: menuImage,
        category: 'Baked Goods',
    },
    {
        id: 7,
        name: 'Cinnamon Roll',
        price: 140,
        type: 'Fresh Bakery',
        description: 'Soft roll swirled with cinnamon glaze',
        image: menuImage,
        category: 'Baked Goods',
    },

    // ---------- Savory ----------
    {
        id: 8,
        name: 'Cheese Puff',
        price: 110,
        type: 'Snack',
        description: 'Crispy pastry filled with melted cheese',
        image: menuImage,
        category: 'Savory',
    },
    {
        id: 9,
        name: 'Veggie Sandwich',
        price: 180,
        type: 'Sandwich',
        description: 'Fresh vegetables and herb spread on toast',
        image: menuImage,
        category: 'Savory',
    },

    // ---------- Desserts ----------
    {
        id: 10,
        name: 'Chocolate Brownie',
        price: 150,
        type: 'Sweet Treat',
        description: 'Fudgy brownie with dark chocolate chunks',
        image: menuImage,
        category: 'Desserts',
    },
    {
        id: 11,
        name: 'Tiramisu Cup',
        price: 220,
        type: 'Sweet Treat',
        description: 'Coffee-soaked layers with mascarpone cream',
        image: menuImage,
        category: 'Desserts',
    },

    // ---------- Healthy ----------
    {
        id: 12,
        name: 'Fruit Salad Bowl',
        price: 160,
        type: 'Fresh & Light',
        description: 'Seasonal fruits with a touch of honey',
        image: menuImage,
        category: 'Healthy',
    },
];