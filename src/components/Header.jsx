import React from "react";

const Header = () => (
  <header className="bg-white shadow p-4 fixed top-0 w-full z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900">Himanshu Sharma</h1>
      <nav className="space-x-4">
        <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
        <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
        <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;