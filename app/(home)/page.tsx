import React from "react";
import FloatMenu from "./FloatingMenu";
import Footer from "../components/footer";
import Hero from "./Hero";
import Navbar from "../components/Navbar";
import Gallery from "./Gallery";
import StaticMenu from "./StaticMenu";
import VideoReview from "../components/videoReview";
import ImageSlider from "./imageSlider";
import Countdown from "./countdown";

const Home: React.FC = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
  ];

  return (
    <main>
      <Navbar />
      <div className="relative w-full overflow-hidden flex flex-col">
        <Hero />
      </div>
      <StaticMenu />
      <Gallery />
      <VideoReview src="./HannoverHighlight.webm" />
      <ImageSlider images={images} />
      <Countdown />
      <Footer />
    </main>
  );
};

export default Home;
