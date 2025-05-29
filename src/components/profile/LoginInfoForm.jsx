
import React from 'react';

const LoginInfoForm = ({ loginInfo, editing, handleLoginInfoChange, toggleEdit }) => {
  return (
    <div className="border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">LOGIN INFORMATION</h2>
      <hr className="mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-1">First Name:</label>
          <input 
            type="text"
            name="firstName"
            className={`input-field ${!editing.login && 'bg-gray-100'}`}
            value={loginInfo.firstName}
            onChange={handleLoginInfoChange}
            readOnly={!editing.login}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name:</label>
          <input 
            type="text"
            name="lastName"
            className={`input-field ${!editing.login && 'bg-gray-100'}`}
            value={loginInfo.lastName}
            onChange={handleLoginInfoChange}
            readOnly={!editing.login}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm mb-1">Email Id:</label>
        <input 
          type="email"
          name="email"
          className={`input-field ${!editing.login && 'bg-gray-100'}`}
          value={loginInfo.email}
          onChange={handleLoginInfoChange}
          readOnly={!editing.login}
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm mb-1">Password:</label>
        <input 
          type="password"
          name="password"
          className={`input-field ${!editing.login && 'bg-gray-100'}`}
          value={loginInfo.password}
          onChange={handleLoginInfoChange}
          readOnly={!editing.login}
        />
      </div>
      
      <div className="flex justify-end mt-6">
        <button 
          onClick={() => toggleEdit('login')}
          className="px-6 py-1 bg-black text-white"
        >
          EDIT INFO
        </button>
      </div>
    </div>
  );
};

export default LoginInfoForm;
