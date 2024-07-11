import RegistrationHeader from "@/app/components/HeaderRegistUser";
import RegisterFormGuest from "./registrationFormCompany";

const RegistrationCompany: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationHeader />
      <RegisterFormGuest />
    </div>
  );
};

export default RegistrationCompany;
