import { Suspense } from "react";
import { EventProvider } from "../context/eventContext";
import AuthTest from "./AuthTest";
import MenuComponent from "./menuComponent";
import Test from "./test";
import { cookies } from "next/headers";
import SignOutBtn from "./signOutBtn";

const DummyPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("sid");
  return (
    <div>
      <MenuComponent />
      <Test />
      <Suspense fallback={<div>Loading auth...</div>}>
        {/* <AuthTest /> */}
      </Suspense>
      <div>
        <p>{token?.value}</p>
      </div>
      <SignOutBtn />
    </div>
  );
};

export default DummyPage;
