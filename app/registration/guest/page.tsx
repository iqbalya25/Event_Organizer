import RegistrationHeader from "@/app/components/HeaderRegistUser";
import RegisterFormGuest from "./RegistrationFormGuest";

const RegistrationGuest: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationHeader />
      <RegisterFormGuest />
    </div>
  );
};

export default RegistrationGuest;
