// app/expo/partner/[companySlug]/page.tsx

"use client";

import React from "react";

import { useParams } from "next/navigation";
import { useCompanies } from "../../api/fetch/fetchCompanies";
import CompanyDetail from "./CompanyDetail";

const CompanyDetailPage: React.FC = () => {
  const params = useParams();
  const companySlug = params.companySlug as string;

  const { data, error, isLoading } = useCompanies();

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error instanceof Error)
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  if (!data || data.length === 0)
    return <div className="text-center py-10">No companies found</div>;

  const company = data.find((c) => c.slug === companySlug);

  if (!company)
    return <div className="text-center py-10">Company not found</div>;

  return (
    <div>
      <div className="pt-36 px-16 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Company Profiles
        </h1>
      </div>
      <CompanyDetail company={company} />
    </div>
  );
};

export default CompanyDetailPage;
