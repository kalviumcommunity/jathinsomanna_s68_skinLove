
import React from 'react';

const PersonalInfoForm = ({ personalInfo, editing, handlePersonalInfoChange, toggleEdit }) => {
  return (
    <div className="border border-gray-200 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">PERSONAL INFORMATION</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6">View and Edit Your personal info here</p>
      <hr className="mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-1">First Name:</label>
          <input 
            type="text"
            name="firstName"
            className={`input-field ${!editing.personal && 'bg-gray-100'}`}
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
            readOnly={!editing.personal}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name:</label>
          <input 
            type="text"
            name="lastName"
            className={`input-field ${!editing.personal && 'bg-gray-100'}`}
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
            readOnly={!editing.personal}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm mb-1">Email Id:</label>
        <input 
          type="email"
          name="email"
          className={`input-field ${!editing.personal && 'bg-gray-100'}`}
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          readOnly={!editing.personal}
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm mb-1">Date of Birth:</label>
        <div className="grid grid-cols-3 gap-3">
          <input 
            type="text"
            name="birthDay"
            placeholder="DD"
            className={`input-field ${!editing.personal && 'bg-gray-100'}`}
            value={personalInfo.birthDay}
            onChange={handlePersonalInfoChange}
            readOnly={!editing.personal}
          />
          <input 
            type="text"
            name="birthMonth"
            placeholder="MM"
            className={`input-field ${!editing.personal && 'bg-gray-100'}`}
            value={personalInfo.birthMonth}
            onChange={handlePersonalInfoChange}
            readOnly={!editing.personal}
          />
          <input 
            type="text"
            name="birthYear"
            placeholder="YYYY"
            className={`input-field ${!editing.personal && 'bg-gray-100'}`}
            value={personalInfo.birthYear}
            onChange={handlePersonalInfoChange}
            readOnly={!editing.personal}
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm mb-1">ADDRESS:</label>
        <input 
          type="text"
          name="address1"
          className={`input-field mb-2 ${!editing.personal && 'bg-gray-100'}`}
          value={personalInfo.address1}
          onChange={handlePersonalInfoChange}
          readOnly={!editing.personal}
        />
        <input 
          type="text"
          name="address2"
          className={`input-field ${!editing.personal && 'bg-gray-100'}`}
          value={personalInfo.address2}
          onChange={handlePersonalInfoChange}
          readOnly={!editing.personal}
        />
      </div>
      
      <div className="flex justify-end mt-6 space-x-4">
        <button 
          onClick={() => toggleEdit('personal')}
          className={`px-6 py-1 border ${editing.personal ? 'border-gray-400 bg-gray-200' : 'border-black bg-white'}`}
        >
          {editing.personal ? 'DISCARD' : 'EDIT INFO'}
        </button>
        {editing.personal && (
          <button className="px-6 py-1 bg-black text-white">
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoForm;
