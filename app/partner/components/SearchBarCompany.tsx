// components/SearchBarCompany.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import { Company } from "@/types/companyProduct";

interface SearchBarCompanyProps {
  companies: Company[] | undefined;
  onSearch: (matchingCompanies: Company[]) => void;
}

const SearchBarCompany: React.FC<SearchBarCompanyProps> = ({
  companies,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [suggestions, setSuggestions] = useState<Company[]>([]);
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
    if (companies && debouncedSearchTerm) {
      const normalizedSearchTerm = debouncedSearchTerm
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      const matchingCompanies = companies.filter((company) => {
        const normalizedCompanyName = company.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        return normalizedCompanyName.includes(normalizedSearchTerm);
      });
      setSuggestions(matchingCompanies);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedSearchTerm, companies]);

  const handleSelectSuggestion = (company: Company) => {
    setSearchTerm(company.name);
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const matchingCompanies =
      companies?.filter((company) => {
        const normalizedCompanyName = company.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "");
        return normalizedCompanyName.includes(normalizedSearchTerm);
      }) || [];
    onSearch(matchingCompanies);
  };

  return (
    <div className="relative mb-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="flex-grow px-5 py-2 border bg-gray-200 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-black"
        >
          Search
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
        >
          {suggestions.map((company, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectSuggestion(company)}
            >
              {company.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBarCompany;
