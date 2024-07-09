import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/Searchbar/generalSearch";
import PartnerListSection from "./PartnerListSection";

const Partnerlist: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PartnerListSection />
      <Footer />
    </div>
  );
};

export default Partnerlist;
