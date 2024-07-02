import Event from "./Event";
import Expo from "./Expo";
import FloatMenu from "./FloatingMenu";
import Footer from "../components/footer";
import Hero from "./Hero";

import Navbar from "../components/Navbar";
import Gallery from "./Gallery";
import React from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative w-full overflow-hidden flex flex-col">
        <Hero />
        <FloatMenu />
      </div>
      <Gallery />
      <Expo />
      <Expo />
      <Expo />
      <Expo />
      <Footer />
    </main>
  );
}
