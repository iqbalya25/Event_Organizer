import RegistrationHeader from "@/app/components/HeaderRegistUser";
import RegistrationFormEO from "./RegistrationFormEO";

const RegistrationEO: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationHeader />
      <RegistrationFormEO />
    </div>
  );
};

export default RegistrationEO;
