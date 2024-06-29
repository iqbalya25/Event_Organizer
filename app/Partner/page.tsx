import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import GeneralSearch from "../components/Searchbar/generalSearch";
import PartnerListSection from "./PartnerListSection";

export const Partnerlist = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PartnerListSection />
      <Footer />
    </div>
  );
};

export default Partnerlist;
