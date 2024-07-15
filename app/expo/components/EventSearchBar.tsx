"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useDebounce } from "@/app/api/debounce/debounce";
import { MonthEvents } from "@/types/eventTypes";

interface EventSearchBarProps {
  onSearch: (searchTerm: string) => void;
  events: MonthEvents[];
}

const EventSearchBar: React.FC<EventSearchBarProps> = ({
  onSearch,
  events,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false); // Hide dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full pl-3 pr-12 h-20 text-2xl bg-white shadow-lg drop-shadow-md"
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={() => onSearch(searchTerm)}
        >
          <img src="/magnifier.png" alt="Search" />
        </button>
        {isFocused && searchTerm && (
          <div className="absolute top-full mt-2 w-full bg-white shadow-lg max-h-60 overflow-auto z-10">
            {events.map((event) => (
              <Link key={event.id} href={`/expo/${event.slug}`}>
                <div className="block p-2 hover:bg-gray-100">{event.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventSearchBar;
