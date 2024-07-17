"use client";
import Image from "next/image";
import Link from "next/link";
import RedButton from "./Button/redButton";
import { useState } from "react";
import { useSession } from "next-auth/react";
import SignOutBtn from "../dummy/signOutBtn";
import SignOutButton from "./Button/signOutButton";
import { UserSession } from "@/types/usersession";

const StaticNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user as UserSession;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar h-24 top-0 left-0 w-full bg-black text-white flex items-center justify-between md:justify-center">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button"
            style={{ background: "transparent", border: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
            checked={isDrawerOpen}
            onChange={toggleDrawer}
          />
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
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
              {session && session.user ? (
                <>
                  {user.role === "ROLE_COMPANY" && (
                    <li>
                      <Link href="/user/company">Dashboard</Link>
                    </li>
                  )}
                  {user.role === "ROLE_USER" && (
                    <li>
                      <Link href="/user/guest">Dashboard</Link>
                    </li>
                  )}
                  {user.role === "ROLE_ORGANIZER" && (
                    <li>
                      <Link href="/user/eventorganizer">Dashboard</Link>
                    </li>
                  )}
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>

        <Link href="/">
          <div className="btn btn-ghost text-xl">
            <Image
              src="/kukivent.png"
              alt="Hannover Logo"
              width={50}
              height={50}
            />
          </div>
        </Link>
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
          {session && session.user ? (
            <>
              {user.role === "ROLE_COMPANY" && (
                <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
                  <Link href="/user/company">Dashboard</Link>
                </li>
              )}
              {user.role === "ROLE_USER" && (
                <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
                  <Link href="/user/guest">Dashboard</Link>
                </li>
              )}
              {user.role === "ROLE_ORGANIZER" && (
                <li className="hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all duration-300 rounded-md">
                  <Link href="/user/eventorganizer">Dashboard</Link>
                </li>
              )}
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      {session && session.user ? (
        <div className="navbar-end">
          <SignOutButton />
        </div>
      ) : (
        <div className="navbar-end">
          <RedButton title="Login" href="/login" />
        </div>
      )}
    </div>
  );
};

export default StaticNavbar;
