"use client";
import { background } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import regularButton from "./Button/regularButton";
import SmallButton from "./Button/smallButton";
import CustomButton from "./Button/customButton";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const loginPopUp = () => {
    setIsLoginOpen(!isLoginOpen);
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
      className={`navbar h-24 fixed top-0 left-0 w-full z-20 transition-all duration-300 text-white items-center ${
        isScrolled ? "bg-black" : "bg-base-100 bg-opacity-0"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          {isDrawerOpen && (
            <div className="drawer" style={{ zIndex: 30 }}>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-primary drawer-button"
                  style={{ background: "transparent", border: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 bg-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
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
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-xl">
                  <li>
                    <Link href="/Expo">Expo</Link>
                  </li>
                  <li>
                    <Link href="/Partner">Partner</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Dummy</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="btn btn-ghost text-xl">
          <Link href="/">
            <Image
              src="/Hannover.png"
              alt="Hannover Logo"
              width={65}
              height={65}
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-bold">
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/Expo">Expo</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/Partner">Partner</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/">About Us</Link>
          </li>
          <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
            <Link href="/dummy">Dummy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn border-none bg-red-600 hover:bg-white text-white hover:text-black w-36 rounded-full"
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          <p className="p-3 tex-2xl font-bold">Login</p>
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="modal-action flex items-center justify-center">
              <div className="bg-white rounded-lg ">
                <div className="flex justify-center items-center p-2">
                  <form method="dialog">
                    <button
                      className=" btn text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                  m
                </div>
                <form
                  className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                  action="#"
                >
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to our platform
                  </h3>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="text-sm ml-3">
                        <label
                          htmlFor="remember"
                          className="font-medium text-gray-900 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <Link
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Navbar;
