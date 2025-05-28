
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  // In a real app, this would be fetched from API based on ID
  const product = {
    id: id,
    name: 'SERUM',
    price: 19.99,
    image: '/lovable-uploads/a58518e2-918e-4fa6-8aa3-231e9f860d6b.png',
    description: "Elevate your skin's natural luminosity with Radiant Glow Serum - a lightweight, fast-absorbing formula designed to brighten, hydrate, and smooth skin with a powerful blend of Vitamin C, hyaluronic acid, and botanical extracts. This daily-use serum fights signs of aging, reduces the appearance of fine lines, and visibly improves texture for a more youthful complexion. Suitable for all skin types, non-comedogenic, and free from parabens and sulfates.",
    onSale: true,
    benefits: [
      'Deep Hydration: Powered by triple molecular hyaluronic acid, this serum penetrates multiple layers of the skin, delivering long-lasting hydration for up to 24 hours',
      'Brightening Benefits: A special blend of vitamin C and niacinamide works together to even out skin tone, fade dark spots, and restore natural radiance',
    ],
    directions: [
      '1. Cleanse skin thoroughly and pat dry.',
      '2. Apply 2-3 drops to your fingertips, allowing for equal distribution.',
      '3. Gently massage into face and neck using upward, circular motions.',
      '4. Let serum absorb for 30-60 seconds before applying moisturizer.',
      '5. Apply morning and night for best results. Safe to use under makeup or layered with other skincare.',
      '6. For optimal results, use twice daily as part of your regular skincare routine.',
    ]
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, quantity, size });
    // In a real app, you would add to cart here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/shop" className="hover:underline">SHOP</Link>
          <span className="mx-2">/</span>
          <span>SERUM</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            {product.onSale && (
              <span className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs">
                Sale
              </span>
            )}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
              <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                <ChevronLeft size={20} />
              </button>
              <button className="bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            <p className="text-xl mb-6">${product.price}</p>
            
            <div className="mb-6">
              <label className="block mb-2">Quantity</label>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="input-field"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">Size</label>
              <input 
                type="text" 
                value={size}
                onChange={handleSizeChange}
                className="input-field"
              />
            </div>
            
            <p className="text-sm text-gray-600 mb-8">{product.description}</p>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-white border border-gray-300 py-3 font-medium flex items-center justify-center"
              >
                ADD TO CART <ShoppingCart size={18} className="ml-2" />
              </button>
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-skincare-pink text-center py-3 font-medium">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-xl font-medium mb-4">Product Benefits</h2>
            <ul className="text-sm space-y-4">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">Directions</h2>
            <ol className="text-sm space-y-2">
              {product.directions.map((direction, index) => (
                <li key={index}>{direction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
