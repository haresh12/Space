import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/news" className="text-white mx-4 hover:text-gray-300">NEWS</Link>
        <Link to="/article" className="text-white mx-4 hover:text-gray-300">ARTICLE</Link>
        <Link to="/community" className="text-white mx-4 hover:text-gray-300">COMMUNITY</Link>
        <Link to="/videos" className="text-white mx-4 hover:text-gray-300">VIDEOS</Link>
        </nav>
    );
  };
  
  export default  Navbar;