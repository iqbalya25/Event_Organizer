// src/expo/components/eventCard.tsx
"use client";
import React from "react";
import Link from "next/link";

import { MonthEvents } from "@/types/eventTypes";
import { useEvents } from "../events";

const EventCard: React.FC = () => {
  const { data, error, isLoading } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  console.log("Data in EventCard:", data); // Log the data to check its format

  if (!data) return <div>No events found</div>;

  return (
    <div className="flex flex-col mx-16 my-24 gap-10">
      {data.map((eventItem: MonthEvents, index: number) => (
        <div key={index}>
          <div className="bg-red-600 p-5">
            <h1 className="text-2xl md:text-6xl text-white font-bold">
              {eventItem.dateStart.split("-")[1]}{" "}
              {/* Assuming you want to display the month */}
            </h1>
          </div>

          <div className="bg-white text-center p-5 flex flex-row overflow-x-auto">
            <div className="flex gap-10 px-5">
              <div
                key={index}
                className="mb-4 flex-shrink-0 border-r-2 border-gray-300"
              >
                <Link href={`/expo/event/${eventItem.id}`}>
                  <h2
                    className="text-2xl font-bold p-4"
                    dangerouslySetInnerHTML={{ __html: eventItem.name }}
                  ></h2>
                  <p
                    className="p-4"
                    dangerouslySetInnerHTML={{
                      __html: eventItem.description || "",
                    }}
                  ></p>
                  <p className="text-gray-500 p-4">
                    {eventItem.dateStart} to {eventItem.dateEnd}
                  </p>
                  <p className="text-gray-500 p-4">{eventItem.city}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
