
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const Wallet = () => {
  // In a real app, payment methods would come from API/state
  const paymentMethods = [
    {
      id: 1,
      type: 'MasterCard',
      number: '8234',
      expiry: '11/27',
      cardHolder: 'Jane Smith',
      logo: 'mastercard',
      active: true
    },
    {
      id: 2,
      type: 'Visa',
      number: '1996',
      expiry: '11/25',
      cardHolder: 'Jane Smith',
      logo: 'visa',
      active: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          
          {/* Wallet Content */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold mb-1">My<br/>Wallet</h2>
              <p className="text-sm text-gray-600 mb-6">Save Your payment details for a faster checkout during your shopping</p>
              <hr className="mb-8" />
              
              {paymentMethods.map((method) => (
                <div key={method.id} className="mb-8">
                  <div className="flex items-center mb-2">
                    <span className="font-medium mr-2">{method.type === 'MasterCard' ? '🟠' : '🔵'}</span>
                    <span className="font-medium">{method.type} ({method.number})</span>
                    <span className="ml-4 bg-gray-200 text-xs px-2 py-0.5 rounded">DEFAULT</span>
                  </div>
                  <p className="text-sm mb-1">Expiration date: {method.expiry}</p>
                  <p className="text-sm mb-4">Cardholder: {method.cardHolder}</p>
                  <hr className="mb-4" />
                  <div className="flex justify-end space-x-2">
                    <button className="bg-black text-white text-xs px-3 py-1">REMOVE</button>
                    <button className="border border-gray-300 text-xs px-3 py-1">REPLACE</button>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center mt-12">
                <button className="text-4xl">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Wallet;
