import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Pricing = () => {
    const { cartItems } = useContext(CartContext);

    const products = [
        {
            name: 'Groundnut',
            tag: 'Cold Pressed',
            image: '/groundnut.png',
            sizes: [
                { size: '1 Litre Bottle', price: 340 }
            ]
        },
        {
            name: 'Safflower',
            tag: 'Heart Health',
            image: '/safflower.png',
            sizes: [
                { size: '1 Litre Bottle', price: 400 }
            ]
        },
        {
            name: 'Sunflower',
            tag: 'Organic',
            image: '/sunflower.png',
            sizes: [
                { size: '1 Litre Bottle', price: 380 }
            ]
        },
        {
            name: 'Mustard',
            tag: 'Heritage',
            image: '/mustard.png',
            sizes: [
                { size: '1 Litre Bottle', price: 390 }
            ]
        },
        {
            name: 'Coconut',
            tag: 'Virgin',
            image: '/coconut.png',
            sizes: [
                { size: '1 Litre Bottle', price: 700 }
            ]
        },
        {
            name: 'Sesame',
            tag: 'Stone Pressed',
            image: '/sesame.png',
            sizes: [
                { size: '1 Litre Bottle', price: 600 }
            ]
        }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <main className="max-w-screen-2xl mx-auto px-8 lg:px-12 py-16">
                {/* Hero Section */}
                <header className="mb-20 text-center md:text-left max-w-3xl">
                    <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-6 leading-tight">
                        Pure liquid gold, <br/>priced for your pantry.
                    </h1>
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                        Experience the integrity of cold-pressed extraction from the heart of Nagpur. Transparent pricing for a healthier lifestyle.
                    </p>
                </header>

                {/* Pricing Grid */}
                <section className="pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {products.map((product, index) => (
                            <div key={index} className="group ambient-lift bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col">
                                <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                                        alt={product.name}
                                        src={product.image} 
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-tertiary border border-tertiary/10">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-headline text-2xl text-on-surface mb-2">{product.name}</h3>
                                    <div className="mt-auto space-y-4">
                                        {product.sizes.map((item, idx) => (
                                            <div key={idx} className={`flex justify-between items-center py-2 ${item.badge ? 'bg-secondary-fixed/30 px-4 rounded-lg' : 'border-b border-outline-variant/20'}`}>
                                                <div className="flex items-center">
                                                    <span className="font-label text-on-surface-variant">{item.size}</span>
                                                    {item.badge && (
                                                        <span className="bg-secondary-container text-on-secondary-container text-[10px] font-extrabold px-2 py-0.5 rounded-full inline-block ml-2 uppercase">{item.badge}</span>
                                                    )}
                                                </div>
                                                <span className={`font-headline ${item.badge ? 'text-2xl text-on-secondary-fixed' : 'text-xl text-on-surface'}`}>₹{item.price}</span>
                                            </div>
                                        ))}
                                        {product.note && (
                                            <p className="text-[10px] font-label text-on-surface-variant tracking-wider uppercase">{product.note}</p>
                                        )}
                                    </div>
                                    <Link 
                                        to="/shop" 
                                        className="w-full mt-8 saree-gradient text-on-primary py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
                                    >
                                        View in Shop
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bulk Deals Section */}
                <section className="bg-surface-container py-24">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative">
                                <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" 
                                        alt="Bulk oil supply"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGqDgTiTZ7U1ugcQZUSsPZHcif8ZerY4eejptITE5UZRgPa1_aHEd-pcmu6JxNLN_q7_k9vgqaBk-qWV5ycNYj6Dopi_R31b7oqRnNnGsYU-DQkMVKVjVepjV4gxj4YewfnaEfrz1EgTeBK9yzJFgk3bv3O9ugSh5ZtenhCCbS93Rbb1LaExczmtUP7ezJhmCR3w7fxlbBS-UzT1ekzp_7ARhdclz0A4a2x6e9VO7sWD_bUA2s6RoVXSNvZhoqCD6-7eL27NLNkzur"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -right-10 bg-secondary-fixed p-12 rounded-2xl shadow-xl hidden md:block">
                                    <p className="font-headline text-4xl text-on-secondary-fixed mb-2">Save More on Bulk</p>
                                    <p className="font-body text-on-secondary-fixed-variant">Special institutional & family pricing.</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">Wholesale & Institutional Orders</h2>
                                <p className="font-body text-lg text-on-surface-variant">
                                    Whether you are a health-conscious restaurant, a community kitchen, or a large family, our bulk supply program offers the best of Nagpur's agro-heritage with significant cost advantages.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-tertiary">check_circle</span>
                                        <span className="font-label text-on-surface font-medium">Orders starting from 15L and above</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-tertiary">check_circle</span>
                                        <span className="font-label text-on-surface font-medium">Direct logistics from extraction unit</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-tertiary">check_circle</span>
                                        <span className="font-label text-on-surface font-medium">Custom labeling for boutique retail</span>
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <a 
                                        href="https://wa.me/919130809064?text=Hi, I'm interested in bulk pricing for institutional/wholesale orders." 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="bg-on-surface text-surface px-10 py-5 rounded-full font-label font-bold tracking-widest uppercase hover:bg-primary transition-colors flex items-center gap-4 inline-flex"
                                    >
                                        Inquiry Bulk Rates
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lab Reports CTA */}
                <section className="px-8 py-32 max-w-screen-2xl mx-auto text-center">
                    <div className="max-w-3xl mx-auto border border-outline-variant/30 p-12 rounded-2xl">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">verified</span>
                        <h2 className="font-headline text-3xl text-on-surface mb-4">Certified Purity</h2>
                        <p className="font-body text-on-surface-variant mb-8">
                            Every batch of Aaharam oil undergoes rigorous lab testing for fatty acid profile and absence of mineral oils. We price our integrity as much as our products.
                        </p>
                        <a className="text-primary font-label font-bold tracking-wide underline hover:text-primary-container transition-colors" href="#">View Latest Lab Reports</a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Pricing;
