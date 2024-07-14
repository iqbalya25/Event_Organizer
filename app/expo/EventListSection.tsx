// src/pages/eventListSection.tsx
import React from "react";
import GeneralSearch from "../components/Searchbar/generalSearch";
import EventCard from "./components/EventCard";

const EventListSection: React.FC = () => {
  return (
    <div>
      <div className="py-10 px-16 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl text-center md:text-4xl lg:text-6xl font-bold text-white">
          Our Event & Exhibitions
        </h1>
      </div>
      <div className="mx-auto px-16 pt-20 ">
        <GeneralSearch />
      </div>
      <EventCard />
    </div>
  );
};

export default EventListSection;
