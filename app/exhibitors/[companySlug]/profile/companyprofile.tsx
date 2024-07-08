import { staticData } from "@/constants/companyList";
import React from "react";
import CompanyTitle from "../companytitle";
import CompanyDetail from "../companydetail";
import Product from "../product";
import { Company } from "@/types/companyProdct";

interface CompanyProfileProps {
  params: {
    companySlug: string;
  };
  companyList: Company[];
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({
  params,
  companyList,
}) => {
  const { companySlug } = params;
  const company = companyList.find((company) => company.slug === companySlug);

  if (!company) {
    return <p>Company not found</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <CompanyTitle />
      <CompanyDetail />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <ul>
          {company.products.map((product, index) => (
            <Product key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyProfile;
