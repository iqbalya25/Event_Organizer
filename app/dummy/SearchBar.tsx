import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { MonthEvents } from "@/types/eventTypes"; // Adjust the path as necessary
import { useEvents } from "../api/fetch/fetchEvents";

const SearchBar = () => {
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
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search events..."
      />
      {error && <div>Error: {error.message}</div>}
      {isLoading && <div>Loading...</div>}
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
