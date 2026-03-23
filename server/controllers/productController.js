const Product = require('../models/Product');
const mongoose = require('mongoose');

// Get all products
const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        next({
            statusCode: 500,
            message: 'Failed to fetch products. Please try again later.'
        });
    }
};

// Get single product
const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }
        
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        next({
            statusCode: 500,
            message: 'Failed to fetch product. Please try again later.'
        });
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }
        
        const product = await Product.findByIdAndDelete(id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        next({
            statusCode: 500,
            message: 'Failed to delete product'
        });
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }
        
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error updating product:', error);
        next({
            statusCode: 500,
            message: 'Failed to update product'
        });
    }
};

module.exports = { getProducts, getProductById, deleteProduct, updateProduct };
