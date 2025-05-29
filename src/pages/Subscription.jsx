
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import { ChevronDown } from 'lucide-react';

const Subscription = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          
          {/* Subscription Content */}
          <div className="md:col-span-3">
            <div className="border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">My Subscriptions</h2>
                <button className="text-black">
                  <ChevronDown size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-6">View and Manage All your subscriptions</p>
              <hr className="mb-6" />
              
              {/* Beginner Plan */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Beginner</h3>
                  <span className="bg-skincare-peach text-xs px-3 py-1 rounded">ACTIVE</span>
                </div>
                <div className="text-sm space-y-1">
                  <p>Free Plan</p>
                  <p>Payments Completed: 3 out of 6</p>
                  <p>Last Payments Made : 23rd April 2023</p>
                  <p>Next Payment Due : 14th June 2023</p>
                  <p>Payment Method : Visa</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Expires at : 14th June 2025</p>
                  <p className="text-sm">Started At : 23rd April 2023</p>
                </div>
              </div>
              
              <hr className="mb-6" />
              
              {/* Pro Plan */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Pro</h3>
                  <span className="bg-skincare-peach text-xs px-3 py-1 rounded">ACTIVE</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Expires at : 14th June 2025</p>
                  <p className="text-sm">Started At : 23rd April 2025</p>
                </div>
              </div>
              
              <hr className="mb-6" />
              
              {/* VIP Plan */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">VIP</h3>
                  <span className="bg-gray-200 text-xs px-3 py-1 rounded">EXPIRED</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Expired on : 14th June 2024</p>
                  <p className="text-sm">Started At : 23rd April 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Subscription;
