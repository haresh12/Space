import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute left-1/2 transform -translate-x-1/2">
      <Link
        to="/news"
        className="group text-white mx-4 transition-colors hover:text-gray-300 focus:text-gray-300 relative inline-block focus:after:content-[''] focus:after:w-full focus:after:h-[3px] focus:after:absolute focus:after:top-[24px] focus:after:left-0 focus:after:bg-white"
      >
        NEWS
      </Link>
      <Link
        to="/article"
        className="group text-white mx-4 transition-colors hover:text-gray-300 focus:text-gray-300 relative inline-block focus:after:content-[''] focus:after:w-full focus:after:h-[3px] focus:after:absolute focus:after:top-[24px] focus:after:left-0 focus:after:bg-white"
      >
        ARTICLE
      </Link>
      <Link
        to="/community"
        className="group text-white mx-4 transition-colors hover:text-gray-300 focus:text-gray-300 relative inline-block focus:after:content-[''] focus:after:w-full focus:after:h-[3px] focus:after:absolute focus:after:top-[24px] focus:after:left-0 focus:after:bg-white"
      >
        COMMUNITY
      </Link>
      <Link
        to="/videos"
        className="group text-white mx-4 transition-colors hover:text-gray-300 focus:text-gray-300 relative inline-block focus:after:content-[''] focus:after:w-full focus:after:h-[3px] focus:after:absolute focus:after:top-[24px] focus:after:left-0 focus:after:bg-white"
      >
        VIDEOS
      </Link>
      <Link
        to="/launches"
        className="group text-white mx-4 transition-colors hover:text-gray-300 focus:text-gray-300 relative inline-block focus:after:content-[''] focus:after:w-full focus:after:h-[3px] focus:after:absolute focus:after:top-[24px] focus:after:left-0 focus:after:bg-white"
      >
        LAUNCHES
      </Link>
    </nav>
  );
};

export default Navbar;
