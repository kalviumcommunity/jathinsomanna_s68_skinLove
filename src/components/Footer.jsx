
import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-medium mb-4">CUSTOMER CARE</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-gray-600 hover:text-black">Shipping Policy &gt;</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-black">Returns Policy &gt;</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-black">Contact Us &gt;</Link></li>
            <li><Link to="/about-us" className="text-gray-600 hover:text-black">About Us &gt;</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">VISIT OUR STORE</h3>
          <p className="text-gray-600">500 Terry Francine Street</p>
          <p className="text-gray-600">San Francisco, CA 94158</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">STAY CONNECTED</h3>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-600 hover:text-black">
              <Instagram size={20} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              <Twitter size={20} />
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
