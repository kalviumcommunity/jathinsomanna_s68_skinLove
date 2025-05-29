
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, User } from 'lucide-react';

const Navbar = ({ userLoggedIn = false }) => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const userImg = userLoggedIn ? "/lovable-uploads/24776abc-5245-4178-91ed-297a730153e4.png" : null;

  const isActive = (path) => {
    return location.pathname === path ? 'active-nav-link' : '';
  };

  return (
    <nav className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          className="md:hidden text-white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/shop" className={`nav-link ${isActive('/shop')}`}>Shop</Link>
          <Link to="/profile" className={`nav-link ${isActive('/profile')}`}>Profile</Link>
          <Link to="/cart" className={`nav-link ${isActive('/cart')}`}>Cart</Link>
          <Link to="/about-us" className={`nav-link ${isActive('/about-us')}`}>About us</Link>
          <Link to="/register" className={`nav-link ${isActive('/register')}`}>Register</Link>
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-12 left-0 w-full bg-black z-50 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/shop" className="nav-link">Shop</Link>
              <Link to="/profile" className="nav-link">Profile</Link>
              <Link to="/cart" className="nav-link">Cart</Link>
              <Link to="/about-us" className="nav-link">About us</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </div>
          </div>
        )}
        
        {/* User Profile or Icons */}
        <div className="flex items-center space-x-4">
          {userLoggedIn ? (
            <Link to="/profile" className="rounded-full overflow-hidden h-8 w-8 border border-white">
              <img src={userImg} alt="Profile" className="h-full w-full object-cover" />
            </Link>
          ) : (
            <Link to="/profile" className="nav-link">
              <User size={20} />
            </Link>
          )}
          <Link to="/cart" className="nav-link">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
