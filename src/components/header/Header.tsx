import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar,News } from '../../components';


const Header = () => {
  return (
    <div className="flex flex-col">
    <header className="fixed w-full bg-gradient-to-tl from-black via-gray-700 to-black px-4 py-6 shadow-lg flex items-center justify-between">
    <div className="items-center flex flex-col">
      <span className="text-white text-2xl font-bold">SPACE.COM</span>
      <span className="text-white text-sm animate-pulse">Simplifying Space</span>
    </div>   
    <Navbar/>
    <div>
      <span className="text-white cursor-pointer hover:text-gray-300">Logout</span>
    </div>
  </header>
  <Outlet/>
  <News/>
  </div>
  
  );
};

export default Header;
