import React from "react";
import MonthCard, { EventCard } from "../components/Card/eventCard";
import { EventsList, eventsList } from "./eventsList";

const EventListSection: React.FC = () => {
  return (
    <div>
      <div className="pt-36 pb-10 mb-20 flex items-center justify-center bg-black">
        <h1 className="text-8xl font-bold text-white">
          Our Event & Exhibition
        </h1>
      </div>
      <EventCard eventsItem={EventsList} />
    </div>
  );
};

export default EventListSection;
