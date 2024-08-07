"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { MonthEvents, Rating } from "@/types/eventTypes"; // Import Rating type
import { groupEventsByMonth } from "@/utils/groupEventsByMonth";
import { useEvents } from "../../api/fetch/fetchEvents";
import EventSearchBar from "./EventSearchBar";
import SortDropdown from "./DropdownSection";

const EventCard: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data: events, error, isLoading } = useEvents(query);
  const [filteredEvents, setFilteredEvents] = useState<MonthEvents[]>([]);

  useEffect(() => {
    if (events) {
      setFilteredEvents(events); // Initialize with full list of events
    }
  }, [events]);

  const handleSearch = useCallback((matchingEvents: MonthEvents[]) => {
    setFilteredEvents(matchingEvents);
  }, []);

  const handleSortChange = useCallback(
    (field: string, direction: "asc" | "desc") => {
      const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (field === "name") {
          return direction === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        } else if (field === "dateStart") {
          // Assuming you have date fields as strings
          return direction === "asc"
            ? Date.parse(a.dateStart) - Date.parse(b.dateStart)
            : Date.parse(b.dateStart) - Date.parse(a.dateStart);
        }
        return 0;
      });
      setFilteredEvents(sortedEvents);
    },
    [filteredEvents]
  );

  const calculateRating = (ratings: Rating[]) => {
    if (ratings.length === 0) return { average: 0, count: 0 };

    const totalRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const averageRating = totalRating / ratings.length;

    return { average: averageRating, count: ratings.length };
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!filteredEvents.length) return <div>No events found</div>;

  const groupedEvents = groupEventsByMonth(filteredEvents);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 gap-10 py-10">
      <EventSearchBar events={events} onSearch={handleSearch} />
      <SortDropdown onSortChange={handleSortChange} />

      {Object.entries(groupedEvents).map(([month, events], monthIndex) => (
        <div key={monthIndex}>
          <div className="bg-red-600 p-5">
            <h1 className="text-2xl md:text-6xl text-white font-bold">
              {month}
            </h1>
          </div>
          <div className="bg-white text-center p-5 flex flex-row overflow-x-auto">
            <div className="flex gap-10 px-5">
              {events.map((eventItem) => {
                const { average, count } = calculateRating(eventItem.ratings);

                return (
                  <div
                    key={eventItem.id}
                    className="mb-4 flex-shrink-0 border-r-2 border-gray-300 w-80"
                  >
                    <Link href={`/expo/${eventItem.slug}`}>
                      <div className="p-4">
                        <h2 className="text-2xl font-bold">{eventItem.name}</h2>
                        <p className="text-gray-500">{eventItem.description}</p>
                        <p className="text-gray-500">{eventItem.dateStart}</p>
                        <p className="text-gray-500">{eventItem.city}</p>
                        <p className="text-gray-500">
                          Rating: {average.toFixed(1)} ({count} reviews)
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
