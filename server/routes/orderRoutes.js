const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

const createOrder = async (req, res) => {
    try {
        const { user, products, subtotal, deliveryCharge, tax, totalAmount, paymentMethod } = req.body;

        if (!user || !user.name || !user.phone || !user.address) {
            return res.status(400).json({
                success: false,
                message: 'User details (name, phone, address) are required'
            });
        }

        if (!products || products.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one product is required'
            });
        }

        const order = new Order({
            user,
            products,
            subtotal,
            deliveryCharge,
            tax,
            totalAmount,
            paymentMethod
        });

        await order.save();

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: order
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to create order'
        });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: orders.length,
            total: orders.length,
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders'
        });
    }
};

router.post('/', createOrder);
router.get('/', getOrders);

module.exports = router;
