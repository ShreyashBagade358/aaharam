const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    tag: { type: String },
    inStock: { type: Boolean, default: true },
    size: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const products = [
    {
        name: 'Groundnut Oil',
        description: 'Cold pressed groundnut oil - pure and natural',
        price: 340,
        image: 'GROUNDNUT_BASE64',
        category: 'nut',
        tag: 'Cold Pressed',
        inStock: true,
        size: '1 Litre Bottle'
    },
    {
        name: 'Safflower Oil',
        description: 'Heart healthy cold pressed safflower oil',
        price: 400,
        image: 'SAFFLOWER_BASE64',
        category: 'seed',
        tag: 'Heart Health',
        inStock: true,
        size: '1 Litre Bottle'
    },
    {
        name: 'Sunflower Oil',
        description: 'Organic cold pressed sunflower oil',
        price: 380,
        image: 'SUNFLOWER_BASE64',
        category: 'seed',
        tag: 'Organic',
        inStock: true,
        size: '1 Litre Bottle'
    },
    {
        name: 'Mustard Oil',
        description: 'Heritage cold pressed yellow mustard oil',
        price: 390,
        image: 'MUSTARD_BASE64',
        category: 'seed',
        tag: 'Heritage',
        inStock: true,
        size: '1 Litre Bottle'
    },
    {
        name: 'Coconut Oil',
        description: 'Virgin cold pressed coconut oil',
        price: 700,
        image: 'COCONUT_BASE64',
        category: 'nut',
        tag: 'Virgin',
        inStock: true,
        size: '1 Litre Bottle'
    },
    {
        name: 'Sesame Oil',
        description: 'Stone pressed sesame oil - aromatic and pure',
        price: 600,
        image: 'SESAME_BASE64',
        category: 'seed',
        tag: 'Stone Pressed',
        inStock: true,
        size: '1 Litre Bottle'
    }
];

function getBase64Image(imageName) {
    try {
        const imagePath = `../client/public/${imageName}.png`;
        const imageBuffer = fs.readFileSync(imagePath);
        return `data:image/png;base64,${imageBuffer.toString('base64')}`;
    } catch (error) {
        console.error(`Error reading ${imageName}.png:`, error);
        return '';
    }
}

const productsWithImages = products.map(p => ({
    ...p,
    image: getBase64Image(p.name.replace(' Oil', '').toLowerCase())
}));

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('MongoDB Connected');
        await Product.deleteMany();
        console.log('Products deleted');
        await Product.insertMany(productsWithImages);
        console.log('Database seeded with images!');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
