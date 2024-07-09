import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import EventListSection from "./eventListSection";

const Eventlist: React.FC = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <EventListSection />
      <Footer />
    </div>
  );
};

export default Eventlist;
