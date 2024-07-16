// components/SortDropdown.tsx
"use client";
import React from "react";

interface SortDropdownProps {
  onSortChange: (field: string, direction: "asc" | "desc") => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, direction] = e.target.value.split("-");
    onSortChange(field, direction as "asc" | "desc");
  };

  return (
    <select onChange={handleSortChange} className="p-2 border rounded">
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="dateStart-asc">Start Date (Earliest First)</option>
      <option value="dateStart-desc">Start Date (Latest First)</option>
    </select>
  );
};

export default SortDropdown;
