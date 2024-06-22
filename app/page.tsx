import Event from "./Home/Event";
import Expo from "./Home/Expo";
import FloatMenu from "./Home/FloatingMenu";
import Footer from "./components/footer";
import Hero from "./Home/Hero";

import Navbar from "./components/Navbar";
import Gallery from "./dummy/components/Gallery";
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
