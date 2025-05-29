
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const PurchaseHistory = () => {
  // In a real app, purchase history would come from API/state
  const purchases = [];
  const isEmpty = purchases.length === 0;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          
          {/* Purchase History Content */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold mb-4">MY<br/>Purchase History</h2>
              <hr className="mb-8" />
              
              {isEmpty ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-2">You have no orders!</p>
                  <p className="text-gray-400">Expiration date: 11/7/27</p>
                  <p className="text-gray-400">Cardholder: Jane Smith</p>
                </div>
              ) : (
                <div>
                  {/* Purchase history items would go here */}
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

export default PurchaseHistory;
