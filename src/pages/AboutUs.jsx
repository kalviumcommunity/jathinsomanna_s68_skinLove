import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              alt="Our Story" 
              className="w-full h-auto object-cover mb-6"
            />
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Glow Garden was founded in 2020 with a simple mission: to create effective, 
              clean skincare products that deliver real results. Our founder, Jane Smith, 
              struggled to find products that worked for her sensitive skin without harsh 
              chemicals or unnecessary additives.
            </p>
            <p className="text-gray-700">
              After years of research and collaboration with dermatologists and cosmetic 
              chemists, we launched our first collection of gentle yet powerful serums. 
              Today, we continue to innovate and expand our product line, always staying 
              true to our core principles of purity, efficacy, and sustainability.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Philosophy</h2>
            <p className="text-gray-700 mb-6">
              At Glow Garden, we believe skincare should be simple, effective, and enjoyable. 
              Our products are formulated with carefully selected ingredients that are both 
              gentle on your skin and the environment.
            </p>
            
            <h3 className="text-xl font-medium mb-2">Our Promises:</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Clean, transparent formulations</li>
              <li>Cruelty-free and vegan</li>
              <li>Sustainable packaging</li>
              <li>Science-backed ingredients</li>
              <li>Suitable for sensitive skin</li>
            </ul>
            
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Our Products" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt={`Team Member ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">
                  {index === 1 ? 'Jane Smith' : index === 2 ? 'John Doe' : 'Sarah Johnson'}
                </h3>
                <p className="text-gray-600">
                  {index === 1 ? 'Founder & CEO' : index === 2 ? 'Head of Product Development' : 'Skincare Specialist'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
