import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import EventListSection from "./eventListSection";

export const Eventlist = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <EventListSection />
      <Footer />
    </div>
  );
};

export default Eventlist;
