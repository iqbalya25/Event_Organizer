import FloatMenu from "./FloatingMenu";
import Footer from "../components/footer";
import Hero from "./Hero";
import Navbar from "../components/Navbar";
import Gallery from "./Gallery";
import React from "react";
import StaticMenu from "./StaticMenu";
import VideoReview from "../components/videoReview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative w-full overflow-hidden flex flex-col">
        <Hero />
      </div>
      <StaticMenu />
      <Gallery />
      <VideoReview src="./HannoverHighlight.webm" />
      <Footer />
    </main>
  );
}
