import React from "react";
import { MonthEvents } from "@/types/eventTypes";
import StatsCard from "../components/statcard";
import GuestAttendanceGraph from "../components/guestgraph";

interface EventDetailProps {
  event: MonthEvents;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  

  return (
    <div className="bg-gray-900 text-white">
      <div className="relative">
        <img
          src={event.imageUrl || "/placeholder-image.jpg"}
          alt={event.name}
          className="w-full h-auto object-cover"
          style={{ maxHeight: "75vh" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-white">{event.name}</h1>
            <p className="mt-2 text-xl text-gray-300">{event.city}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Event Details</h2>
        </div>
      </div>
      
      
    </div>
  );
};

export default EventDetail;
