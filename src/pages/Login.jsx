
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // In a real app, you would handle login here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl text-center font-bold mb-10">WELCOME BACK !</h1>
          
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
              <label htmlFor="confirmPassword" className="block mb-1">Re-Enter Password:</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="input-field"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div className="flex justify-end mt-1">
                <Link to="#" className="text-sm text-gray-500 hover:underline">Forgot Password?</Link>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button type="submit" className="btn-primary">LOGIN</button>
            </div>
            
            <div className="text-center">
              <p>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up here</Link></p>
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

export default Login;
