import RegisterFormGuest from "./registrationFormCompany";
import RegistrationSection from "./registrationSection";

const RegistrationCompany: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationSection />
      <RegisterFormGuest />
    </div>
  );
};

export default RegistrationCompany;
