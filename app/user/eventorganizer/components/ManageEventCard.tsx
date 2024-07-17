// File: components/EventCard.tsx
import { MonthEvents } from "@/types/eventTypes";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  event: MonthEvents;
}

const ManageEventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link href={`/expo/${event.slug}`}>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col justify-between h-64">
        {" "}
        {/* Ensure consistent height */}
        <div>
          <h3 className="text-xl font-bold mb-2">{event.name}</h3>
          <p className="text-gray-700 mb-2">{event.description}</p>
          <p className="text-gray-700 mb-2">
            Date: {new Date(event.dateStart).toLocaleDateString()}
          </p>
        </div>
        <p className="text-gray-700">Guests: 100</p>
      </div>
    </Link>
  );
};

export default ManageEventCard;
