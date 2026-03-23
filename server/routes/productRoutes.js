const express = require('express');
const router = express.Router();
const { getProducts, getProductById, deleteProduct, updateProduct } = require('../controllers/productController');
const { validateObjectId, sanitizeInput } = require('../middleware/validation');

// Apply sanitization to all routes
router.use(sanitizeInput);

// Get all products
router.route('/').get(getProducts);

// Get single product (with ID validation)
router.route('/:id').get(validateObjectId('id'), getProductById)
    .delete(validateObjectId('id'), deleteProduct)
    .put(validateObjectId('id'), updateProduct);

module.exports = router;
