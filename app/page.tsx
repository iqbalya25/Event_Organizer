import Event from "./Home/Event";
import Expo from "./Home/Expo";
import FloatMenu from "./Home/FloatingMenu";
import Hero from "./Home/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./dummy/components/Gallery";

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
    </main>
  );
}
