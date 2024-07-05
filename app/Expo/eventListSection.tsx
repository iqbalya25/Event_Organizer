"use client";
import React from "react";
import GeneralSearch from "../components/Searchbar/generalSearch";
import EventCard from "../components/Card/eventCard";
import { EventProvider, useEvent } from "./eventProvider";

const EventSection: React.FC = () => {
  const { events } = useEvent();

  return (
    <div className="mt-8 mx-36">
      <EventCard eventsItem={events} />
    </div>
  );
};

const EventListSection: React.FC = () => {
  return (
    <EventProvider>
      <div>
        <div className="pt-36 pb-10 flex flex-col items-center justify-center bg-black">
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold text-white">
            Our Event & Exhibition
          </h1>
        </div>
        <div className="mx-auto mx-16 pt-20 ">
          <GeneralSearch />
        </div>
        <EventSection />
      </div>
    </EventProvider>
  );
};

export default EventListSection;
