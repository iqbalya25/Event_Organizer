"use client";
import React, { useState, useEffect } from "react";

interface SortDropdownProps {
  onSortChange: (sortField: string, sortDirection: "asc" | "desc") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const [sortField, setSortField] = useState<"dateStart" | "name">("dateStart");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    onSortChange(sortField, sortDirection);
  }, [sortField, sortDirection, onSortChange]);

  return (
    <div className="flex flex-col items-center">
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={sortField}
        onChange={(e) => setSortField(e.target.value as "dateStart" | "name")}
      >
        <option value="dateStart">Date</option>
        <option value="name">Alphabet</option>
      </select>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
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
