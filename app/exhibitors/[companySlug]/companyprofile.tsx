"use client";
import React from "react";

import ProductList from "./ProductList";
import CompanyTitle from "./companytitle";
import CompanyDetail from "./companydetail";
import { staticData } from "@/constants/companyList";
import { Company } from "@/types/companyProduct";

interface CompanyProfileProps {
  params: {
    companySlug: string;
  };
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ params }) => {
  const { companySlug } = params;
  const company = findCompanyBySlug(companySlug);

  if (!company) {
    return <p>Company not found</p>;
  }

  return (
    <div>
      <header className="bg-black text-white pt-32 pb-8">
        <h1 className="text-2xl lg:text-6xl font-bold text-center">
          Partner Profile
        </h1>
      </header>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <CompanyTitle title={company.title} />
        <CompanyDetail
          name={company.name}
          address={company.address}
          country={company.country}
          description={company.description}
          location={company.location}
        />
        <ProductList products={company.products} />
      </div>
    </div>
  );
};

function findCompanyBySlug(slug: string): Company | undefined {
  return staticData.find((company) => company.slug === slug);
}

export default CompanyProfile;
