import React from "react";
import MenuComponent from "./menuComponent";
import SignOutBtn from "./signOutBtn";
import Test from "./test";
import dynamic from "next/dynamic";

const UserProfileForm = dynamic(() => import("../dummy/userProfileForm"), {
  ssr: false,
});
const DummyPage = () => {
  return (
    <div>
      <MenuComponent />
      {/* <UserProfileForm /> */}

      <UserProfileForm />
    </div>
  );
};

export default DummyPage;
