
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    password: '',
    addressLine1: '',
    addressLine2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle registration here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl text-center font-bold mb-10">WELCOME</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-1">First Name:</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="input-field"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-1">Last Name:</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="input-field"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email Id:</label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">Date Of Birth:</label>
              <div className="grid grid-cols-3 gap-3">
                <input
                  name="birthDay"
                  type="text"
                  placeholder="DD"
                  maxLength="2"
                  className="input-field"
                  value={formData.birthDay}
                  onChange={handleChange}
                  required
                />
                <input
                  name="birthMonth"
                  type="text"
                  placeholder="MM"
                  maxLength="2"
                  className="input-field"
                  value={formData.birthMonth}
                  onChange={handleChange}
                  required
                />
                <input
                  name="birthYear"
                  type="text"
                  placeholder="YYYY"
                  maxLength="4"
                  className="input-field"
                  value={formData.birthYear}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-1">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="address1" className="block mb-1">Address:</label>
              <input
                id="address1"
                name="addressLine1"
                type="text"
                className="input-field mb-3"
                value={formData.addressLine1}
                onChange={handleChange}
                required
              />
              <input
                id="address2"
                name="addressLine2"
                type="text"
                className="input-field"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="btn-primary">SIGN UP</button>
            </div>
            
            <div className="text-center">
              <p>Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in here</Link></p>
            </div>
          </form>
        </div>
        
        {/* Circle decoration */}
        <div className="hidden md:block absolute bottom-0 right-0 w-64 h-64 bg-skincare-pink rounded-full -mb-20 -mr-20 z-0"></div>
        <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-skincare-peach rounded-full -mb-48 -mr-48 z-0"></div>
      </div>
    </div>
  );
};

export default Register;
