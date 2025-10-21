import React from 'react';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`
        py-16 
        relative 
        overflow-hidden 
        backdrop-blur-sm
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70"></div>
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;