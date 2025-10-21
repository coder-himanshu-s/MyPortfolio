import React from 'react';
import Header from './Header';
import Footer from './Footer';
import profileImage from '../assets/profile.jpg';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <Header />
      <main className="pt-16 relative z-10">
        {/* Profile Image Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src={profileImage} 
              alt="Himanshu Sharma" 
              className="w-48 h-48 rounded-full object-contain border-4 border-white shadow-xl bg-gray-100"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;