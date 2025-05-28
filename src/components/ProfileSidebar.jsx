import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const ProfileSidebar = ({ userName = "Jathin Somanna" }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active-sidebar-link' : '';
  };

  const profileImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";

  return (
    <div className={`border border-gray-200 p-6 flex flex-col ${collapsed ? 'items-center' : 'items-start'}`}>
      <div className="flex items-center w-full justify-between mb-4">
        <button onClick={() => setCollapsed(!collapsed)} className="text-black">
          <Menu size={24} />
        </button>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <img 
          src={profileImage} 
          alt="Profile" 
          className="rounded-full w-24 h-24 object-cover mb-2" 
        />
        {!collapsed && <p className="text-lg font-medium mt-2">{userName}</p>}
      </div>
      
      {!collapsed && (
        <div className="w-full flex flex-col space-y-3">
          <Link to="/profile" className={`sidebar-link ${isActive('/profile')}`}>My Profile</Link>
          <Link to="/wallet" className={`sidebar-link ${isActive('/wallet')}`}>My Wallet</Link>
          <Link to="/subscription" className={`sidebar-link ${isActive('/subscription')}`}>My Subscription</Link>
          <Link to="/purchase-history" className={`sidebar-link ${isActive('/purchase-history')}`}>My Purchase History</Link>
          <Link to="/cart" className={`sidebar-link ${isActive('/cart')}`}>My Cart</Link>
          <Link to="/wishlist" className={`sidebar-link ${isActive('/wishlist')}`}>My WishList</Link>
        </div>
      )}
    </div>
  );
};

export default ProfileSidebar;
