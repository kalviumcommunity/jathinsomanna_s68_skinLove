
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  // In a real app, cart items would come from state or context
  const cartItems = [];
  const isEmpty = cartItems.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-center mb-8">MY CART</h1>
        
        <hr className="border-t border-gray-300 mb-12" />
        
        {isEmpty ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-8">Your Cart is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart items would go here */}
          </div>
        )}
        
        <hr className="border-t border-gray-300 my-12" />
        
        <div className="text-center">
          <Link to="/shop" className="text-lg hover:underline">Continue Shopping</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
