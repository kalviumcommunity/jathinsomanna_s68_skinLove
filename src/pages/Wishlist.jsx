
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const Wishlist = () => {
  // In a real app, wishlist items would come from API/state
  const wishlistItems = [];
  const isEmpty = wishlistItems.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          
          {/* Wishlist Content */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold mb-4">MY<br/>WishList</h2>
              <hr className="mb-8" />
              
              {isEmpty ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Your Wish list is empty</p>
                </div>
              ) : (
                <div>
                  {/* Wishlist items would go here */}
                </div>
              )}
              
              <hr className="mt-8" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
