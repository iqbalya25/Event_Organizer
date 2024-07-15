// components/CompanyCard.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useCompanies } from "../../api/fetch/fetchCompanies";
import SearchBarCompany from "./SearchBarCompany";
import { Company } from "@/types/companyProduct";

const CompanyCard: React.FC = () => {
  const { data: companies, error, isLoading } = useCompanies();
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!companies || companies.length === 0)
    return <div>No companies found</div>;

  const handleSearch = (matchingCompanies: Company[]) => {
    setFilteredCompanies(matchingCompanies);
    setHasSearched(true);
  };

  const companiesToDisplay = hasSearched ? filteredCompanies : companies;

  return (
    <div>
      <SearchBarCompany companies={companies} onSearch={handleSearch} />
      {hasSearched && filteredCompanies.length === 0 ? (
        <div className="text-center py-4">No matching companies found</div>
      ) : (
        <div className="pt-24 pb-24 flex flex-col gap-10 border-b-2 border-black">
          {companiesToDisplay.map((company, index) => (
            <Link href={`/partner/${company.slug}`} key={index}>
              <div className="border-b-2 border-gray-300 cursor-pointer">
                <div className="text-center p-5 flex flex-col justify-center gap-10 lg:flex-row lg:justify-normal bg-white">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <img
                      src={company.profileUrl}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-5">
                    <h2 className="text-xl font-bold">{company.name}</h2>
                    <p className="text-gray-600">{company.address}</p>
                    <p className="text-gray-800">{company.about}</p>
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${company.email}`}
                        className="text-red-500 hover:underline"
                      >
                        {company.email}
                      </a>
                      <a
                        href={`tel:${company.phoneNumber}`}
                        className="text-red-500 hover:underline"
                      >
                        {company.phoneNumber}
                      </a>
                    </div>
                    <a
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
