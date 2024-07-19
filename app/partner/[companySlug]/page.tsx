// src/app/expo/partner/[companySlug]/page.tsx

"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import CompanyDetail from "./CompanyDetail";
import { useCompanies } from "../../api/fetch/fetchCompanies";

const CompanyDetailPage: React.FC = () => {
  const params = useParams();
  const companySlug = params.companySlug as string;

  const [page, setPage] = useState(1);
  const limit = 10; // Number of companies per page

  const { data, error, isLoading } = useCompanies(page, limit);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error instanceof Error)
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  if (!data || data.data.length === 0)
    return <div className="text-center py-10">No companies found</div>;

  const company = data.data.find((c) => c.slug === companySlug);

  if (!company)
    return <div className="text-center py-10">Company not found</div>;

  return (
    <div>
      <div className="py-10 px-16 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Company Profiles
        </h1>
      </div>
      <CompanyDetail company={company} />
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 text-black px-4 py-2 m-2 rounded"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 m-2 rounded"
          onClick={handleNextPage}
          disabled={data.data.length < limit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
