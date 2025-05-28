
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInfoForm from '../components/profile/PersonalInfoForm';
import LoginInfoForm from '../components/profile/LoginInfoForm';

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Jathin',
    lastName: 'Somanna',
    email: 'jathin.somanna@example.com',
    birthDay: '15',
    birthMonth: '08',
    birthYear: '1990',
    address1: 'Flat No. 302, Sai Residency, Plot No. 45, Green Park Colony, Miyapur, Hyderabad',
    address2: 'Telangana - 500049'
  });

  const [loginInfo, setLoginInfo] = useState({
    firstName: 'Jathin',
    lastName: 'Somanna',
    email: 'jathin.somanna@example.com',
    password: '********'
  });

  const [editing, setEditing] = useState({
    personal: false,
    login: false
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginInfoChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo(prev => ({ ...prev, [name]: value }));
  };

  const toggleEdit = (section) => {
    setEditing(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userLoggedIn={true} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <ProfileHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ProfileSidebar />
          </div>
          
          <div className="md:col-span-3">
            <PersonalInfoForm
              personalInfo={personalInfo}
              editing={editing}
              handlePersonalInfoChange={handlePersonalInfoChange}
              toggleEdit={toggleEdit}
            />
            
            <LoginInfoForm
              loginInfo={loginInfo}
              editing={editing}
              handleLoginInfoChange={handleLoginInfoChange}
              toggleEdit={toggleEdit}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
