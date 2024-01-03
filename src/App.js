import React from 'react';

const App = () => {
  return (
    <div className="bg-gradient-to-tl from-black via-gray-500 to-black h-screen">
    <header className=" bg-gradient-to-tl from-black via-gray-700 to-black px-4 py-6 shadow-lg flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="items-center flex flex-col">
        <span className="text-white text-2xl font-bold">SPACE.COM</span>
        <span className="text-white text-sm animate-pulse">Simplifying Space</span>
      </div>

      {/* Center Section - Navigation Options */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <a href="#" className="text-white mx-4 hover:text-gray-300">NEWS</a>
        <a href="#" className="text-white mx-4 hover:text-gray-300">ARTICLE</a>
        <a href="#" className="text-white mx-4 hover:text-gray-300">COMMUNITY</a>
      </nav>

      {/* Right Section - Logout */}
      <div>
        <span className="text-white cursor-pointer hover:text-gray-300">Logout</span>
      </div>
    </header>
    </div>
  );
};

export default App;
