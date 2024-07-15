import MenuComponent from "./menuComponent";
import SignOutBtn from "./signOutBtn";
import Test from "./test";
import UserProfileForm from "./uploadFileForm";

const DummyPage = () => {
  return (
    <div>
      <MenuComponent />
      {/* <UserProfileForm /> */}
      <Test />
      <SignOutBtn />
    </div>
  );
};

export default DummyPage;
