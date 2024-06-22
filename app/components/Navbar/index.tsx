"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar h-24 fixed top-0 left-0 w-full z-20 transition-all duration-300 text-white ${
        isScrolled ? "bg-black" : "bg-base-100 bg-opacity-0"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Event</a>
              </li>
              <li>
                <a>Expo</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Dummy</a>
              </li>
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">
          <Image
            src="/Hannover.png"
            alt="Hannover Logo"
            width={65}
            height={65}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <a>Event</a>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <a>Expo</a>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <a>About Us</a>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <a>Dummy</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className={`btn ${
            isScrolled ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
