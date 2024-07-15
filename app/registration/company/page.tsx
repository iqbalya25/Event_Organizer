import RegistrationHeader from "@/app/components/HeaderRegistUser";
import CompanyRegisterForm from "./RegistrationFormCompany";

const RegistrationCompany: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <RegistrationHeader />
      <CompanyRegisterForm />
    </div>
  );
};

export default RegistrationCompany;
