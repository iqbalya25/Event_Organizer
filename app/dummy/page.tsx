"use client";
import React from "react";
import MenuComponent from "./menuComponent";
import SignOutBtn from "./signOutBtn";
import Test from "./test";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
// import EventPage from "./eventPage";
// import { useTokenContext } from "./tokenContext";
interface UserSession {
  email: string;
  role: string;
  token: string;
}
const UserProfileForm = dynamic(() => import("../dummy/userProfileForm"), {
  ssr: false,
});
const DummyPage = () => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  return (
    <div>
      {/* <UserProfileForm /> */}

      {/* <UserProfileForm /> */}

      {/* <EventList /> */}
      <div className="mt-20">
        <p>Email: {user?.email}</p>
        <p>Email: {user?.token}</p>
      </div>

      <UserProfileForm />
    </div>
  );
};

export default DummyPage;
