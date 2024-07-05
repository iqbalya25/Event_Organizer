import React from "react";
import EventCard from "../components/Card/eventCard";
import { useEvent } from "./eventProvider";

const EventSection: React.FC = () => {
  const { events } = useEvent();

  return (
    <div className="mt-8 mx-36">
      <EventCard eventsItem={events} />
    </div>
  );
};

export default EventSection;
