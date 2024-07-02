import RegisterFormGuest from "./registrationFormGuest";
import RegistrationSection from "./registrationSection";

const RegistrationGuest: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationSection />
      <RegisterFormGuest />
    </div>
  );
};

export default RegistrationGuest;
