import React from "react";
import RegularButton from "../components/Button/regularButton";
import SpeakerCard from "../components/Card/speakerCard";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import EventDetailSection from "./eventDetailSection";
import EventOrganizerSection from "./eventOrganizerSection";
import EventSpeakersSection from "./eventSpeakersSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <EventDetailSection
        eventType="Conferrence"
        eventName="17th German-Japanese Economic Forum"
        shortDescription="CO2-neutral process heat ('green' heat) | Waste heat recovery | Resource-efficient production"
        longDescription="Process heat is needed in many industries to generate steam for melting and drying processes, for electroplating, pasteurizing or for thermal separation processes. How can these quantities of heat be provided in a carbon-neutral way in the future? This is one of the biggest challenges facing industry in Germany as well as in Japan. In addition, resources must be used efficiently by closing material, water or heat cycles. How do German and Japanese industrial companies plan to convert their heat supply to net zero? What technologies are available for supplying factories with green heat? Where can valuable resources be saved? How can Germany and Japan learn from each other's processes?"
        dateEnd="date end"
        dateStart="date start"
        hourStart="hour start"
        hourEnd="hour end"
        city="citynya"
        address="addressnya"
        topic="topiknya"
        imgUrl="/hm_107216_408x408_thumb.jpg"
        imgAlt="/hm_107216_408x408_thumb.jpg"
      />
      <EventSpeakersSection />
      <EventOrganizerSection />
      <Footer />
    </main>
  );
}
