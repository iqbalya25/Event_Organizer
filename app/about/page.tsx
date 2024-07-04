import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "./aboutSection";
import VideoReview from "../components/videoReview";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
