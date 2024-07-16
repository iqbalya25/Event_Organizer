"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RedButton from "./Button/redButton";
import SignOutButton from "./Button/signOutButton";
import { useSession } from "next-auth/react";
import React from "react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();

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
      className={`navbar h-24 fixed top-0 left-0 w-full z-30 transition-all duration-100 text-white items-center justify-start md:justify-center ${
        isScrolled ? "bg-black" : "bg-base-100 bg-opacity-0"
      }`}>
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          {isDrawerOpen && (
            <div className="drawer" style={{ zIndex: 30 }}>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary drawer-button"
                  style={{ background: "transparent", border: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl">
                  <li>
                    <Link href="/expo">Expo</Link>
                  </li>
                  <li>
                    <Link href="/partner">Partner</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/dummy">Dummy</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="btn btn-ghost text-xl">
          <Link href="/">
            <Image
              src="/kukivent.png"
              alt="Hannover Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-bold">
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/expo">Expo</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/partner">Partner</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/dummy">Dummy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session && session.user ? (
          <SignOutButton />
        ) : (
          <RedButton title="Login" href="/login" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
