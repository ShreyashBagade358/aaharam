const mongoose = require('mongoose');

/**
 * Validates MongoDB ObjectId parameter
 */
const validateObjectId = (paramName = 'id') => {
    return (req, res, next) => {
        const id = req.params[paramName];
        
        if (!id) {
            return res.status(400).json({
                success: false,
                message: `${paramName} parameter is required`
            });
        }
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: `Invalid ${paramName} format`
            });
        }
        
        next();
    };
};

/**
 * Validates required fields in request body
 */
const validateRequiredFields = (fields = []) => {
    return (req, res, next) => {
        const missingFields = [];
        
        fields.forEach(field => {
            if (!req.body[field]) {
                missingFields.push(field);
            }
        });
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
                missingFields: missingFields
            });
        }
        
        next();
    };
};

/**
 * Validates product data
 */
const validateProductData = (req, res, next) => {
    const { name, description, price, image, category, size } = req.body;
    const errors = [];
    
    // Name validation
    if (name && (typeof name !== 'string' || name.trim().length < 3)) {
        errors.push('Product name must be at least 3 characters long');
    }
    
    // Description validation
    if (description && (typeof description !== 'string' || description.trim().length < 10)) {
        errors.push('Product description must be at least 10 characters long');
    }
    
    // Price validation
    if (price !== undefined) {
        const priceNum = Number(price);
        if (isNaN(priceNum) || priceNum <= 0) {
            errors.push('Price must be a positive number');
        }
    }
    
    // Image validation (basic URL check)
    if (image && typeof image === 'string') {
        try {
            new URL(image);
        } catch (e) {
            errors.push('Image must be a valid URL');
        }
    }
    
    // Category validation
    if (category && typeof category !== 'string') {
        errors.push('Category must be a string');
    }
    
    // Size validation
    if (size && typeof size !== 'string') {
        errors.push('Size must be a string');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors
        });
    }
    
    next();
};

/**
 * Sanitizes input to prevent injection
 */
const sanitizeInput = (req, res, next) => {
    // Sanitize query parameters
    if (req.query) {
        Object.keys(req.query).forEach(key => {
            if (typeof req.query[key] === 'string') {
                req.query[key] = req.query[key].trim();
            }
        });
    }
    
    // Sanitize body
    if (req.body) {
        Object.keys(req.body).forEach(key => {
            if (typeof req.body[key] === 'string') {
                req.body[key] = req.body[key].trim();
            }
        });
    }
    
    next();
};

module.exports = {
    validateObjectId,
    validateRequiredFields,
    validateProductData,
    sanitizeInput
};
