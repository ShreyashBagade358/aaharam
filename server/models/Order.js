const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        name: { type: String, required: true },
        email: { type: String },
        phone: { type: String, required: true },
        address: { type: String, required: true }
    },
    products: [
        {
            product: {
                name: { type: String, required: true },
                image: { type: String }
            },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    subtotal: { type: Number, required: true },
    deliveryCharge: { type: Number, default: 0 },
    tax: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paymentMethod: { 
        type: String, 
        enum: ['online', 'cod', 'whatsapp'],
        default: 'online'
    },
    status: { 
        type: String, 
        enum: ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    orderNumber: { type: String, unique: true }
}, { timestamps: true });

orderSchema.pre('save', async function() {
    if (!this.orderNumber) {
        this.orderNumber = `AAH${Date.now().toString().slice(-8)}`;
    }
});

module.exports = mongoose.model('Order', orderSchema);
