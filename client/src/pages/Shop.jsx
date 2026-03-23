import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const Shop = () => {
    const [products] = useState([
        { _id: '1', name: 'Groundnut Oil', description: 'Cold Pressed Groundnut Oil - pure and natural from Nagpur', price: 340, image: '/groundnut.png', category: 'nut', size: '1 Litre Bottle', tag: 'Cold Pressed' },
        { _id: '2', name: 'Safflower Oil', description: 'Heart Health Safflower Oil - rich in unsaturated fats', price: 400, image: '/safflower.png', category: 'seed', size: '1 Litre Bottle', tag: 'Heart Health' },
        { _id: '3', name: 'Sunflower Oil', description: 'Organic Sunflower Oil - cold pressed for maximum nutrition', price: 380, image: '/sunflower.png', category: 'seed', size: '1 Litre Bottle', tag: 'Organic' },
        { _id: '4', name: 'Mustard Oil', description: 'Heritage Mustard Oil - traditional stone pressed method', price: 390, image: '/mustard.png', category: 'seed', size: '1 Litre Bottle', tag: 'Heritage' },
        { _id: '5', name: 'Coconut Oil', description: 'Virgin Coconut Oil - pure and unrefined', price: 700, image: '/coconut.png', category: 'organic', size: '1 Litre Bottle', tag: 'Virgin' },
        { _id: '6', name: 'Sesame Oil', description: 'Stone Pressed Sesame Oil - rich in antioxidants', price: 600, image: '/sesame.png', category: 'seed', size: '1 Litre Bottle', tag: 'Stone Pressed' }
    ]);
    const [loading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const { cartItems } = useContext(CartContext);

    const getFilteredProducts = () => {
        if (activeCategory === 'all') return products;
        if (activeCategory === 'organic') return products.filter(p => p.category?.toLowerCase().includes('organic'));
        return products;
    };

    return (
        <div className="bg-surface min-h-screen">
            <main className="max-w-screen-2xl mx-auto px-8 lg:px-12 py-16">
                {/* Hero Title Section */}
                <header className="mb-20 text-center md:text-left max-w-3xl">
                    <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">
                        Our Collection
                    </span>
                    <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 leading-tight">
                        Pure Essence of <span className="italic text-primary">Tradition</span>
                    </h1>
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                        Hand-pressed in small batches using heritage techniques from Nagpur. No heat, no chemicals, just the pure, nutrient-rich oil as nature intended.
                    </p>
                </header>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-16">
                    <button 
                        onClick={() => setActiveCategory('all')}
                        className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all hover:opacity-90 active:scale-95 ${
                            activeCategory === 'all' 
                                ? 'bg-primary text-on-primary' 
                                : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant'
                        }`}
                    >
                        All Oils
                    </button>
                    <button 
                        onClick={() => setActiveCategory('nut')}
                        className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all active:scale-95 ${
                            activeCategory === 'nut'
                                ? 'bg-primary text-on-primary'
                                : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant'
                        }`}
                    >
                        Nut Oils
                    </button>
                    <button 
                        onClick={() => setActiveCategory('seed')}
                        className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all active:scale-95 ${
                            activeCategory === 'seed'
                                ? 'bg-primary text-on-primary'
                                : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant'
                        }`}
                    >
                        Seed Oils
                    </button>
                    <button className="px-6 py-2 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-sm font-medium cursor-pointer transition-all flex items-center gap-2 active:scale-95">
                        <span className="material-symbols-outlined text-xs">eco</span>
                        Organic Certified
                    </button>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <div className="w-full flex justify-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                            {getFilteredProducts().map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-24 text-center">
                            <button className="px-12 py-4 border-2 border-outline-variant text-on-surface font-label text-sm font-bold rounded-full hover:bg-surface-variant transition-all active:scale-95">
                                Discover More Heritage Blends
                            </button>
                        </div>
                    </>
                )}
            </main>

            {/* FAB Cart Button */}
            {cartItems.length > 0 && (
                <Link 
                    to="/cart" 
                    className="fixed bottom-8 right-8 bg-gradient-to-br from-primary to-primary-container text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 hover:-translate-y-2 active:scale-90 z-40"
                >
                    <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary-fixed text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface">
                        {cartItems.length}
                    </span>
                </Link>
            )}
        </div>
    );
};

export default Shop;
