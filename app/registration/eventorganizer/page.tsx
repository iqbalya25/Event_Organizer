import RegistrationFormEO from "./registrationFormEO";
import RegistrationSection from "./registrationSection";

const RegistrationEO: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationSection />
      <RegistrationFormEO />
    </div>
  );
};

export default RegistrationEO;
