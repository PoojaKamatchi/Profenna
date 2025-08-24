import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 shadow-md bg-white">
      <div className="text-2xl font-bold">LOGO</div>
      <nav className="space-x-6 text-gray-700 font-medium">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Policy</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
