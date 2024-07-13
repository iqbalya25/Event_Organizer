import React from "react";

import EventDetailSection from "./eventDetailSection";
import EventOrganizerSection from "./eventOrganizerSection";
import EventSpeakersSection from "./eventSpeakersSection";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

const EventDetail: React.FC = () => {
  return (
    <main>
      <Navbar />
      <EventSpeakersSection />
      <EventOrganizerSection />
      <Footer />
    </main>
  );
};

export default EventDetail;
