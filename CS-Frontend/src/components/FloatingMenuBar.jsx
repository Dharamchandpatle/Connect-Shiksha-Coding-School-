import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  FaGraduationCap,
  FaHome,
  FaImages,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const FloatingMenuBar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const getNavLinkClass = (path) =>
    path === activePath
      ? "text-blue-500"
      : "text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600";

  return (
    <div className="bg-white pt-12 sm:pt-16 lg:pt-24">
      <nav className="fixed bottom-0 left-0 z-50 right-0 mx-auto flex justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
        <NavLink
          to="/"
          className={`flex flex-col items-center gap-1 ${getNavLinkClass("/")}`}
        >
          <FaHome className="h-6 w-6" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={`flex flex-col items-center gap-1 ${getNavLinkClass(
            "/about"
          )}`}
        >
          <FaUser className="h-6 w-6" />
          <span>About</span>
        </NavLink>

        <NavLink
          to="/courses"
          className={`flex flex-col items-center gap-1 ${getNavLinkClass(
            "/courses"
          )}`}
        >
          <FaGraduationCap className="h-6 w-6" />
          <span>Course</span>
        </NavLink>

        <NavLink
          to="/gallery"
          className={`flex flex-col items-center gap-1 ${getNavLinkClass(
            "/gallery"
          )}`}
        >
          <FaImages className="h-6 w-6" />
          <span>Gallery</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={`flex flex-col items-center gap-1 ${getNavLinkClass(
            "/contact"
          )}`}
        >
          <FaSearch className="h-6 w-6" />
          <span>Search</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default FloatingMenuBar;
