
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShoppingCart, Menu } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Hydrating Serum',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      onSale: false
    },
    {
      id: 2,
      name: 'Brightening Cream',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      onSale: true
    },
    {
      id: 3,
      name: 'Moisturizing Lotion',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      onSale: false
    },
    {
      id: 4,
      name: 'Anti-aging Serum',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      onSale: false
    },
    {
      id: 5,
      name: 'Night Cream',
      price: 44.99,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      onSale: true
    },
    {
      id: 6,
      name: 'Eye Cream',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      onSale: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <button className="md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-serif font-bold text-center flex-grow">ALL PRODUCTS</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 relative">
              {product.onSale && (
                <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs">
                  Sale
                </span>
              )}
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <Link to={`/shop/${product.id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-20">
                  <span className="sr-only">View Product</span>
                </Link>
                <button className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
