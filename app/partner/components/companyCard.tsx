"use client";
import { Partner } from "@/types/partner";
import React from "react";
import Link from "next/link";
import { useCompanies } from "../../api/fetch/fetchCompanies";

const CompanyCard: React.FC = () => {
  const { data, error, isLoading } = useCompanies();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!data || data.length === 0) return <div>No companies found</div>;

  return (
    <div className="pt-24 pb-24 flex flex-col gap-10 border-b-2 border-black">
      {data.map((company, index) => (
        <Link href={`/partner/${company.slug}`} key={index}>
          <div className="border-b-2 border-gray-300 cursor-pointer">
            <div className="text-center p-5 flex flex-col justify-center gap-10 lg:flex-row lg:justify-normal bg-white">
              <div>
                <img src={company.profileUrl} alt="company logo" />
              </div>
              <div className="flex flex-col items-start gap-5">
                <div>{company.name}</div>
                <div>{company.address}</div>
                <div>{company.about}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CompanyCard;
