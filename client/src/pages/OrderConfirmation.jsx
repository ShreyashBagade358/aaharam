import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails, finalTotal, clearCartFn } = location.state || {};

    if (!orderDetails) {
        navigate('/');
        return null;
    }

    // Clear cart when reaching confirmation page
    if (clearCartFn) {
        clearCartFn();
    }

    const orderNumber = `AAH${Date.now().toString().slice(-8)}`;
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const getPaymentMethodName = (method) => {
        const methods = {
            'online': 'UPI / Card',
            'cod': 'Cash on Delivery',
            'whatsapp': 'WhatsApp Order'
        };
        return methods[method] || method;
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#fbf9f5]">
            <style>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 8mm;
                    }
                    html, body {
                        width: 210mm;
                        height: 297mm;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        background: #ffffff !important;
                    }
                    body * {
                        visibility: hidden;
                    }
                    #invoice-print, #invoice-print * {
                        visibility: visible;
                    }
                    #invoice-print {
                        position: absolute;
                        left: 8mm;
                        top: 8mm;
                        width: 194mm;
                        padding: 12px !important;
                        background: white;
                        box-shadow: none !important;
                        border-radius: 0 !important;
                    }
                    #invoice-print .p-6 {
                        padding: 8px !important;
                    }
                    #invoice-print .p-5 {
                        padding: 6px !important;
                    }
                    #invoice-print .p-4 {
                        padding: 6px !important;
                    }
                    #invoice-print .mb-6 {
                        margin-bottom: 6px !important;
                    }
                    #invoice-print .mb-4 {
                        margin-bottom: 4px !important;
                    }
                    #invoice-print .gap-6 {
                        gap: 8px !important;
                    }
                    #invoice-print h1 {
                        font-size: 18px !important;
                    }
                    #invoice-print h2 {
                        font-size: 9px !important;
                        margin-bottom: 2px !important;
                    }
                    #invoice-print p, #invoice-print span {
                        font-size: 10px !important;
                    }
                    #invoice-print .text-sm {
                        font-size: 10px !important;
                    }
                    #invoice-print .text-xs {
                        font-size: 9px !important;
                    }
                    #invoice-print table th,
                    #invoice-print table td {
                        padding: 4px 6px !important;
                        font-size: 10px !important;
                    }
                    #invoice-print .space-y-1 > * + * {
                        margin-top: 2px !important;
                    }
                    #invoice-print .space-y-3 > * + * {
                        margin-top: 4px !important;
                    }
                }
            `}</style>

            <main className="flex-1 py-8 px-4">
                {/* Progress Steps */}
                <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#00341c] text-white flex items-center justify-center font-bold text-sm">✓</div>
                        <span className="text-[#00341c] font-medium text-sm hidden sm:inline">Cart</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-[#00341c]"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#00341c] text-white flex items-center justify-center font-bold text-sm">✓</div>
                        <span className="text-[#00341c] font-medium text-sm hidden sm:inline">Shipping</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-[#00341c]"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#00341c] text-white flex items-center justify-center font-bold text-sm">✓</div>
                        <span className="text-[#00341c] font-medium text-sm hidden sm:inline">Payment</span>
                    </div>
                    <div className="w-8 sm:w-12 h-0.5 bg-[#610000]"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#610000] text-white flex items-center justify-center font-bold text-sm">4</div>
                        <span className="text-[#610000] font-bold text-sm hidden sm:inline">Confirmation</span>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div id="invoice-print" className="bg-white rounded-xl shadow-[0_20px_40px_rgba(139,0,0,0.06)] overflow-hidden">
                        {/* Branding Stripe */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#610000] to-[#8b0000]"></div>
                        
                        <div className="p-6 md:p-10">
                            {/* Header */}
                            <div className="flex justify-between items-start gap-4 mb-6 pb-4 border-b border-[#e4e2de]">
                                <div>
                                    <p className="text-[#5a403c] text-sm italic">Traditional cold-pressed oils from the heart of India.</p>
                                </div>
                                <div className="text-right flex flex-col items-end gap-1">
                                    <h1 className="text-3xl font-bold text-[#1b1c1a] uppercase tracking-tight" style={{ fontFamily: 'Noto Serif, serif' }}>Invoice</h1>
                                    <span className="text-[#5a403c] font-mono">#{orderNumber}</span>
                                    <span className="px-3 py-1 bg-[#9ef5bc] text-[#00522f] rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00522f]"></span>
                                        PAID
                                    </span>
                                    <p className="text-sm text-[#5a403c] mt-1">Date: {today}</p>
                                </div>
                            </div>

                            {/* Customer & Payment Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="p-5 bg-[#f5f3ef] rounded-xl">
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#5a403c] mb-3">Billed To</h2>
                                    <div className="space-y-1">
                                        <p className="font-bold text-lg text-[#1b1c1a]" style={{ fontFamily: 'Noto Serif, serif' }}>{orderDetails.user.name}</p>
                                        <p className="text-sm text-[#5a403c]">{orderDetails.user.phone}</p>
                                        {orderDetails.user.email && (
                                            <p className="text-sm text-[#5a403c]">{orderDetails.user.email}</p>
                                        )}
                                        <p className="text-sm text-[#5a403c] leading-relaxed pt-1">
                                            {orderDetails.user.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 bg-[#f5f3ef] rounded-xl">
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#5a403c] mb-3">Payment Details</h2>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs text-[#5a403c]">Method</p>
                                            <p className="font-bold text-sm text-[#1b1c1a]">{getPaymentMethodName(orderDetails.paymentMethod)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#5a403c]">Transaction ID</p>
                                            <p className="font-mono text-sm">txn_{Date.now().toString().slice(-12)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#5a403c]">Status</p>
                                            <p className="text-[#00341c] font-bold text-sm">Successfully Paid</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Table */}
                            <div className="mb-6 overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#610000] text-white">
                                            <th className="p-4 rounded-tl-xl" style={{ fontFamily: 'Noto Serif, serif' }}>Product</th>
                                            <th className="p-4 text-center" style={{ fontFamily: 'Noto Serif, serif' }}>Qty</th>
                                            <th className="p-4 text-right" style={{ fontFamily: 'Noto Serif, serif' }}>Price</th>
                                            <th className="p-4 text-right rounded-tr-xl" style={{ fontFamily: 'Noto Serif, serif' }}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#e4e2de]">
                                        {orderDetails.products.map((item, index) => (
                                            <tr key={index} className="hover:bg-[#efeeea] transition-colors">
                                                <td className="p-4">
                                                    <p className="font-bold text-[#1b1c1a]">{item.product?.name || `Product ${index + 1}`}</p>
                                                    <p className="text-xs text-[#5a403c]">Cold Pressed</p>
                                                </td>
                                                <td className="p-4 text-center">{item.quantity}</td>
                                                <td className="p-4 text-right">₹{item.price}</td>
                                                <td className="p-4 text-right font-bold">₹{item.price * item.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Summary Section */}
                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                <div className="flex-1 bg-[#f5f3ef] rounded-xl p-5 flex flex-col justify-center border-l-4 border-[#775a00]">
                                    <p className="text-sm font-medium text-[#1b1c1a] mb-1 italic">Aaharam Quality Seal</p>
                                    <p className="text-xs text-[#5a403c] leading-relaxed">This invoice confirms the purchase of 100% natural, unrefined oils.</p>
                                </div>
                                <div className="w-full md:w-64 space-y-2">
                                    <div className="flex justify-between text-[#5a403c] px-2">
                                        <span>Subtotal</span>
                                        <span>₹{orderDetails.subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-[#5a403c] px-2">
                                        <span>GST (5%)</span>
                                        <span>₹{orderDetails.tax}</span>
                                    </div>
                                    <div className="flex justify-between text-[#00341c] px-2">
                                        <span>Delivery</span>
                                        <span className="font-bold">{orderDetails.deliveryCharge === 0 ? 'FREE' : `₹${orderDetails.deliveryCharge}`}</span>
                                    </div>
                                    <div className="h-px bg-[#e4e2de] mx-2"></div>
                                    <div className="flex justify-between items-center bg-[#ffdf99] text-[#251a00] p-4 rounded-xl shadow-sm">
                                        <span className="font-bold uppercase tracking-widest text-xs">Total</span>
                                        <span className="text-xl font-bold" style={{ fontFamily: 'Noto Serif, serif' }}>₹{finalTotal}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <button 
                            onClick={() => window.print()} 
                            className="flex-1 flex items-center justify-center gap-2 bg-[#610000] text-white py-3 rounded-full hover:shadow-lg transition-all active:scale-95 text-sm font-bold uppercase tracking-wider"
                        >
                            <span className="material-symbols-outlined text-xl">download</span>
                            Download PDF
                        </button>
                        <button 
                            onClick={() => window.print()} 
                            className="flex-1 flex items-center justify-center gap-2 bg-[#eae8e4] text-[#1b1c1a] py-3 rounded-full hover:bg-[#e4e2de] transition-all active:scale-95 text-sm font-bold uppercase tracking-wider"
                        >
                            <span className="material-symbols-outlined text-xl">print</span>
                            Print
                        </button>
                        <a 
                            href="https://wa.me/919130809064" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-[#00341c] text-white py-3 rounded-full hover:opacity-90 transition-all active:scale-95 text-sm font-bold uppercase tracking-wider"
                        >
                            <span className="material-symbols-outlined text-xl">chat</span>
                            WhatsApp
                        </a>
                    </div>

                    {/* Back to Shop */}
                    <div className="mt-6 text-center">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-[#5a403c] hover:text-[#610000] transition-colors font-medium">
                            <span className="material-symbols-outlined">arrow_back</span>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderConfirmation;