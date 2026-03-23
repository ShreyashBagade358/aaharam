import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [added, setAdded] = useState(false);

    const getBaseName = (name) => {
        return name.replace(' Oil', '').replace(' oil', '');
    };

    const getProductIcon = (name) => {
        const baseName = getBaseName(name);
        const iconMap = {
            'Groundnut': 'favorite',
            'Coconut': 'bolt',
            'Safflower': 'biotech',
            'Sunflower': 'sunny',
            'Mustard': 'thermostat',
            'Sesame': 'fitness_center',
            'Almond': 'psychology',
            'Flaxseed': 'waves',
            'Castor': 'spa'
        };
        return iconMap[baseName] || 'eco';
    };

    const getProductBenefit = (name) => {
        const baseName = getBaseName(name);
        const benefitMap = {
            'Groundnut': 'Heart Healthy & High Smoke Point',
            'Coconut': 'Immunity Boost & Metabolism',
            'Safflower': 'Rich in Omega-6 & Vitamin E',
            'Sunflower': 'Vitamin E Rich & Skin Health',
            'Mustard': 'Anti-microbial & Warming',
            'Sesame': 'Bone Health & Antioxidants',
            'Almond': 'Brain Tonic & Skin Radiance',
            'Flaxseed': 'Omega-3 Rich & Heart Health',
            'Castor': 'Detoxification & Hair Growth'
        };
        return benefitMap[baseName] || 'Pure & Natural';
    };

    const handleBuyNow = () => {
        addToCart(product);
        navigate('/checkout');
    };

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="group ambient-lift bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-tertiary border border-tertiary/10">
                        Cold Pressed
                    </span>
                </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-headline text-2xl text-on-surface mb-2">{product.name}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">{getProductIcon(product.name)}</span>
                    {getProductBenefit(product.name)}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4">
                    <div>
                        <span className="font-headline text-xl text-primary">
                            ₹{product.price.toFixed(2)}
                        </span>
                        {product.size && <span className="text-sm text-on-surface-variant ml-1">/ {product.size}</span>}
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={handleAddToCart}
                            className={`px-4 py-3 rounded-full font-label text-sm font-bold tracking-wide transition-all active:scale-95 flex items-center gap-2 ${
                                added 
                                    ? 'bg-tertiary text-white' 
                                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">{added ? 'check' : 'add_shopping_cart'}</span>
                            {added ? 'Added' : 'Add to Cart'}
                        </button>
                        <button 
                            onClick={handleBuyNow}
                            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-label text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
