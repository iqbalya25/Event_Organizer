"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDebounce } from "@/app/api/debounce/debounce";
import { MonthEvents } from "@/types/eventTypes";
import { useEvents } from "@/app/api/fetch/fetchEvents";

const EventSearchBar = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const { data, error, isLoading } = useEvents(query);
  const [filteredEvents, setFilteredEvents] = useState<MonthEvents[]>([]);

  useEffect(() => {
    if (data && debouncedQuery.trim() !== "") {
      setFilteredEvents(
        data.filter((event) =>
          event.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        )
      );
    } else {
      setFilteredEvents([]);
    }
  }, [debouncedQuery, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search events..."
          className="w-full pl-3 pr-12 h-20 text-2xl bg-white shadow-lg drop-shadow-md"
        />
        {error && <div>Error: {error.message}</div>}
        {isLoading && <div>Loading...</div>}
        <ul>
          {filteredEvents.map((event, index) => (
            <li key={index}>{event.name}</li>
          ))}
        </ul>
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => {}}
        >
          <img src="/magnifier.png" alt="Search" />
        </button>
      </div>
      {filteredEvents.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg max-h-60 overflow-auto z-10">
          {filteredEvents.map((event) => (
            <Link key={event.id} href={`/expo/${event.slug}`}>
              <div className="block p-2 hover:bg-gray-100">{event.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventSearchBar;
