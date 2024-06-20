import Event from "./components/Event";
import Expo from "./components/Expo";
import FloatMenu from "./components/FloatingMenu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatMenu />
      <Hero />
      <Expo />
    </main>
  );
}
