// src/expo/components/eventCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import { MonthEvents } from "@/types/eventTypes";
import { groupEventsByMonth } from "@/utils/groupEventsByMonth";
import { useEvents } from "../events";

const EventCard: React.FC = () => {
  const { data, error, isLoading } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  console.log("Data in EventCard:", data);

  if (!data || data.length === 0) return <div>No events found</div>;

  const groupedEvents = groupEventsByMonth(data);

  return (
    <div className="flex flex-col mx-16 my-24 gap-10">
      {Object.entries(groupedEvents).map(([month, events], monthIndex) => (
        <div key={monthIndex}>
          <div className="bg-red-600 p-5">
            <h1 className="text-2xl md:text-6xl text-white font-bold">
              {month}
            </h1>
          </div>

          <div className="bg-white text-center p-5 flex flex-row overflow-x-auto">
            <div className="flex gap-10 px-5">
              {events.map((eventItem) => (
                <div
                  key={eventItem.slug}
                  className="mb-4 flex-shrink-0 border-r-2 border-gray-300"
                >
                  <Link href={`/expo/${eventItem.slug}`}>
                    <h2 className="text-2xl font-bold p-4">{eventItem.name}</h2>
                    <p className="text-gray-500 p-4">{eventItem.description}</p>
                    <p className="text-gray-500 p-4">{eventItem.dateStart}</p>
                    <p className="text-gray-500 p-4">{eventItem.city}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
