import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, News } from "../../components";
import { useCurrentPath } from "../../hooks";
import { ROUTES } from "../../utils";
const Header = () => {
  const path = useCurrentPath();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <header className="fixed z-10 w-full bg-gradient-to-tl from-black via-gray-700 to-black px-4 py-6 shadow-lg flex items-center justify-between">
        <div
          className="items-center flex flex-col cursor-pointer"
          onClick={() => navigate(ROUTES.MAIN)}
        >
          <span className="text-white text-2xl font-bold">SPACE.COM</span>
          <span className="text-white text-sm animate-pulse">
            Simplifying Space
          </span>
        </div>
        <Navbar />
      </header>
      <Outlet />
      {path === ROUTES.MAIN && <News />}
    </div>
  );
};

export default Header;
