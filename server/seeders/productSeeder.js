const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/aaharam_agro')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const products = [
    {
        name: 'Groundnut Oil',
        description: '100% pure cold-pressed groundnut oil extracted using traditional wooden ghani. Rich in flavor and nutrients.',
        price: 349,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80',
        category: 'Cooking Oil',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Coconut Oil',
        description: 'Virgin cold-pressed coconut oil, perfect for cooking, skin and hair care.',
        price: 499,
        image: 'https://images.unsplash.com/photo-1611078516091-bb969ce8dd18?w=500&q=80',
        category: 'Cooking & Wellness',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Safflower Oil',
        description: 'Premium cold-pressed safflower oil. Excellent for heart health with high smoking point.',
        price: 399,
        image: 'https://images.unsplash.com/photo-1541535496841-3829ad327778?w=500&q=80',
        category: 'Cooking Oil',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Sunflower Oil',
        description: 'Light and healthy cold-pressed sunflower oil, great for daily cooking.',
        price: 299,
        image: 'https://images.unsplash.com/photo-1598466635955-46fde3d31eed?w=500&q=80',
        category: 'Cooking Oil',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Mustard Oil',
        description: 'Strong, pungent and pure cold-pressed yellow mustard oil. A staple for Indian households.',
        price: 249,
        image: 'https://images.unsplash.com/photo-1591147551066-cd92e00e4701?w=500&q=80',
        category: 'Cooking Oil',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Sesame Oil',
        description: 'Aromatic cold-pressed sesame oil. Perfect for marinades and traditional recipes.',
        price: 549,
        image: 'https://images.unsplash.com/photo-1620021666085-f2d4e782d8da?w=500&q=80',
        category: 'Cooking Oil',
        inStock: true,
        size: '1 Litre'
    },
    {
        name: 'Almond Oil',
        description: 'Sweet cold-pressed almond oil for skin, hair, and delicate culinary use.',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',
        category: 'Wellness & Beauty',
        inStock: true,
        size: '250 ml'
    },
    {
        name: 'Flaxseed Oil',
        description: 'Rich in Omega-3 cold-pressed flaxseed oil. Ideal for salads and health supplements.',
        price: 699,
        image: 'https://images.unsplash.com/photo-1589148564070-5696d747a1c7?w=500&q=80',
        category: 'Wellness',
        inStock: true,
        size: '250 ml'
    },
    {
        name: 'Castor Oil',
        description: 'Thick, pure cold-pressed castor oil for therapeutic and cosmetic uses.',
        price: 299,
        image: 'https://images.unsplash.com/photo-1615485906877-33ee66b0a0db?w=500&q=80',
        category: 'Wellness & Beauty',
        inStock: true,
        size: '250 ml'
    }
];

const seedDB = async () => {
    try {
        await Product.deleteMany();
        console.log('Products deleted');
        await Product.insertMany(products);
        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();
