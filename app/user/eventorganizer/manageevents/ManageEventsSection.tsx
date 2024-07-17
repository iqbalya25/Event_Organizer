"use client";
import React, { useState } from "react";

import { MonthEvents } from "@/types/eventTypes"; // Adjust the path as necessary
import EventCard from "@/app/expo/components/EventCard";
import { useEvents } from "@/app/api/fetch/fetchEvents";
import ManageEventCard from "../components/ManageEventCard";

const ManageEventsSection: React.FC = () => {
  const [query, setQuery] = useState(""); // Adjust query as needed
  const { data: events, isLoading, error } = useEvents(query);

  return (
    <div>
      <header className="bg-black text-white px-24 pb-8">
        <h1 className="text-2xl lg:text-6xl font-bold text-center">
          manage Events
        </h1>
      </header>
      <div className="container mx-auto p-4">
        {isLoading && <p>Loading events...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events?.map((event: MonthEvents) => (
            <ManageEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageEventsSection;
