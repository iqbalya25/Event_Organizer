import React from "react";

import GeneralSearch from "../components/Searchbar/generalSearch";
import EventCard from "../components/Card/eventCard";
import { EventsList } from "./eventsList";

const EventListSection: React.FC = () => {
  return (
    <div>
      <div className="pt-36 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold text-white">
          Our Event & Exhibition
        </h1>
      </div>
      <div className="mx-auto mx-16 pt-20 ">
        <GeneralSearch />
      </div>
      <EventCard eventsItem={EventsList} />
    </div>
  );
};

export default EventListSection;
