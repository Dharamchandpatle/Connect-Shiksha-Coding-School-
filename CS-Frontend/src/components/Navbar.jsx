import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/mainlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  const closeModel = (e) => {
    if (e.target.classList.contains("model_main")) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Topbar */}
      <section className="bg-blue-600 text-white p-2 text-2xl">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-sm font-medium">
                Call us: 9131782103, 7748893097
              </p>
            </div>
            <div className="flex items-center text-2xl">
              <a
                href="https://www.youtube.com/@ConnectShiksha"
                className="mr-4"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/connect-shiksha/"
                className="mr-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/connectshiksha/"
                className="mr-4"
              >
                <FaInstagram />
              </a>
              <a href="https://chat.whatsapp.com/J25mwTHQvKIAWHgSieXMRA">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <section className="relative bg-white-100 border-b font-poppin shadow">
        <div className="container mx-auto">
          <nav className="flex justify-between">
            <div className="flex items-center justify-between w-full px-2 py-2 lg:px-2">
              <div className="flex items-center gap-5">
                <a href="/" className="text-2xl text-gray-700">
                  <img src={logo} alt="logo" className="w-full h-14" />
                </a>
              </div>
              <div className="flex items-center lg:hidden">
                <div className="uppercase px-2 text-2xl text-blue-800 relative cursor-pointer lg:mt-0">
                  {/* {isLoggedIn ? (
                    <Link
                      to="/student"
                      className="text-white text-[16px] px-3 py-1 rounded-md font-medium bg-red-500"
                    >
                      Profile
                    </Link>
                  ) : ( */}
                  <Link
                    to="https://forms.gle/W4Yobiizf5Hw8rcQ8"
                    className="text-white text-[16px] px-3 py-1 rounded-md font-medium bg-red-500"
                  >
                    Register Now
                  </Link>
                </div>
                <button
                  className="flex items-center px-2 py-2 text-2xl text-gray-800 rounded hover:text-teal-800 hover:border-teal-300 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <RiMenu3Fill />
                </button>
              </div>
              <ul className="hidden font-medium lg:flex">
                <li className="mr-12">
                  <a href="/" className="text-gray-700 hover:text-gray-600">
                    Home
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/about"
                    className="text-gray-700 hover:text-gray-600"
                  >
                    About Us
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/courses"
                    className="text-gray-700 hover:text-gray-600"
                  >
                    Our Courses
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/gallery"
                    className="text-gray-700 hover:text-gray-600"
                  >
                    Our Gallery
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    href="/contact"
                    className="text-gray-700 hover:text-gray-600"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="items-center justify-end hidden lg:flex">
                <div className="uppercase px-2 text-2xl text-blue-800 relative cursor-pointer lg:mt-0 mt-4">
                  <Link
                    to="https://forms.gle/W4Yobiizf5Hw8rcQ8"
                    className="text-white text-[16px] px-3 py-1 rounded-md font-medium bg-red-500"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-0 w-full opacity-25 lg:hidden ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          ></div>
          <div
            onClick={closeModel}
            className={`model_main absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
              open
                ? "translate-x-0 ease-in-opacity-100"
                : "-translate-x-full ease-out opacity-0"
            }`}
          >
            <div className="flex justify-between">
              <a className="p-2 text-2xl font-bold" href="#">
                <img src={logo} alt="logo" className="w-full h-16" />
              </a>
              <button
                className="p-2 rounded-md hover:text-blue-300 lg:hidden"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center max-w-xs py-2 pl-4 bg-white rounded-lg mt-7">
              <input
                type="text"
                className="w-full py-2 pl-3 border-0"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="mr-2 bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <ul className="mt-7">
              <li className="py-2 border-b">
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </a>
              </li>
              <li className="py-2 border-b">
                <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </a>
              </li>
              <li className="py-2 border-b">
                <a
                  href="/courses"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Courses
                </a>
              </li>
              <li className="py-2 border-b">
                <a
                  href="/gallery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Gallery
                </a>
              </li>
              <li className="py-2 border-b">
                <a
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center text-2xl px-5 mt-7">
              <a
                href="https://www.youtube.com/@ConnectShiksha"
                className="mr-4"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/connect-shiksha/"
                className="mr-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/connectshiksha/"
                className="mr-4"
              >
                <FaInstagram />
              </a>
              <a href="https://chat.whatsapp.com/J25mwTHQvKIAWHgSieXMRA">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
