
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';

const Address = () => {
  // In a real app, addresses would come from API/state
  const addresses = [
    {
      id: 1,
      title: 'Address 1',
      details: `Flat No. 302, Sai Residency,
Plot No. 45, Green Park Colony,
Miyapur, Hyderabad
Telangana - 500049`
    },
    {
      id: 2,
      title: 'Address 2',
      details: `Flat No. 302, Sai Residency,
Plot No. 45, Green Park Colony,
Miyapur, Hyderabad
Telangana - 500049`
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
          
          {/* Address Content */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-6">
              <h2 className="text-2xl font-semibold mb-4">MY<br/>Address</h2>
              <p className="text-sm text-gray-600 mb-4">Edit and Manage All your saved Address here</p>
              <hr className="mb-8" />
              
              {addresses.map((address) => (
                <div key={address.id} className="mb-8">
                  <h3 className="font-medium mb-2">{address.title}</h3>
                  <p className="text-sm whitespace-pre-line mb-4">{address.details}</p>
                  <hr className="mb-4" />
                  <div className="flex justify-end space-x-2">
                    <button className="bg-black text-white text-xs px-3 py-1">REMOVE</button>
                    <button className="bg-black text-white text-xs px-3 py-1">UPDATE ADDRESS</button>
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

export default Address;
