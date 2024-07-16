"use client";
import React, { useState, useEffect } from "react";

interface SortDropdownProps {
  onSortChange: (sortField: string, sortDirection: "asc" | "desc") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [sortField, setSortField] = useState<
    "dateStart" | "name" | "eventType"
  >("dateStart");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    onSortChange(sortField, sortDirection);
  }, [sortField, sortDirection, onSortChange]);

  return (
    <div className="flex flex-row items-center justify-center space-x-4">
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={sortField}
        onChange={(e) =>
          setSortField(e.target.value as "dateStart" | "name" | "eventType")
        }
      >
        <option value="dateStart">Date</option>
        <option value="name">Alphabet</option>
        <option value="eventType">Event Type</option>
      </select>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={sortDirection}
        onChange={(e) => setSortDirection(e.target.value as "asc" | "desc")}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortDropdown;
