// components/EventSearchBar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import { MonthEvents } from "@/types/eventTypes";

interface EventSearchBarProps {
  events: MonthEvents[] | undefined;
  onSearch: (matchingEvents: MonthEvents[]) => void;
}

const EventSearchBar: React.FC<EventSearchBarProps> = ({
  events,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [suggestions, setSuggestions] = useState<MonthEvents[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (events && debouncedSearchTerm) {
      const normalizedSearchTerm = debouncedSearchTerm
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      const matchingEvents = events.filter((event) => {
        const normalizedEventName = event.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        return normalizedEventName.includes(normalizedSearchTerm);
      });
      setSuggestions(matchingEvents);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedSearchTerm, events]);

  const handleSelectSuggestion = (event: MonthEvents) => {
    setSearchTerm(event.name);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, show all events
      onSearch(events || []);
      return;
    }

    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const matchingEvents =
      events?.filter((event) => {
        const normalizedEventName = event.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        return normalizedEventName.includes(normalizedSearchTerm);
      }) || [];
    onSearch(matchingEvents);
  };

  return (
    <div className="relative flex flex-col items-center w-full mb-4">
      <div className="relative w-full flex items-center">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full pl-3 pr-12 h-20 text-2xl bg-white shadow-lg drop-shadow-md"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <img src="/magnifier.png" alt="Search" />
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          style={{ top: "100%" }}
        >
          {suggestions.map((event, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectSuggestion(event)}
            >
              {event.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventSearchBar;
