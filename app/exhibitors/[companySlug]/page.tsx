import React from "react";
import { notFound } from "next/navigation";
import CompanyTitle from "./companytitle";
import CompanyDetail from "./companydetail";
import Product from "./product";

const staticData = [
  {
    slug: "company-1",
    status: "Active",
    title: "Company 1",
    location: {
      description: "Hall A B2",
      icon: "A",
      link: "",
      title: "Hall A",
    },
    name: "Company 1",
    address: "123 Main St",
    country: "Country 1",
    description: "Description for Company 1",
    products: ["Product 1", "Product 2", "Product 3"],
  },
  {
    slug: "company-2",
    status: "Inactive",
    title: "Company 2",
    location: {
      description: "Hall B B3",
      icon: "B",
      link: "",
      title: "Hall B",
    },
    name: "Company 2",
    address: "456 Elm St",
    country: "Country 2",
    description: "Description for Company 2",
    products: ["Product A", "Product B", "Product C"],
  },
];

interface CompanyProfileProps {
  params: {
    companySlug: string;
  };
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ params }) => {
  const { companySlug } = params;

  const company = staticData.find((company) => company.slug === companySlug);

  if (!company) {
    notFound();
  }

  return (
    <div>
      <CompanyTitle />
      <CompanyDetail />
      <Product />
    </div>
  );
};

export default CompanyProfile;
