const express = require('express');
const router = express.Router();
const { getProducts, getProductById, deleteProduct, updateProduct } = require('../controllers/productController');

router.route('/').get(getProducts);

router.route('/:id').get(getProductById)
    .delete(deleteProduct)
    .put(updateProduct);

module.exports = router;
