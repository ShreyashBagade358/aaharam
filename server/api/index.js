const { createServer } = require('http');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const productRoutes = require('../routes/productRoutes');
const orderRoutes = require('../routes/orderRoutes');

const app = express();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://shreyashbagade358:shreyashbagade358@aaharam.lhg8d1m.mongodb.net/aaharam_agro?retryWrites=true&w=majority';
const CLIENT_URL = process.env.CLIENT_URL || 'https://client-six-blush-44.vercel.app';
const NODE_ENV = process.env.NODE_ENV || 'production';

const corsOptions = {
    origin: '*',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const dbOptions = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
};

let isConnected = false;

async function connectDB() {
    if (!isConnected) {
        try {
            await mongoose.connect(MONGO_URI, dbOptions);
            isConnected = true;
            console.log('✓ Connected to MongoDB Atlas');
        } catch (err) {
            console.error('✗ Database connection error:', err.message);
            throw err;
        }
    }
}

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error('DB Error:', err);
        res.status(500).json({
            success: false,
            message: 'Database connection error'
        });
    }
});

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: NODE_ENV,
    });
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use((req, res) => {
    res.status(404).json({ 
        success: false,
        message: `Cannot ${req.method} ${req.path}` 
    });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message: message,
    });
});

module.exports = app;
