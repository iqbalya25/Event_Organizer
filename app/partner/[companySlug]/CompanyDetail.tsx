// app/expo/partner/components/CompanyDetail.tsx
import React from "react";
import { Company } from "@/types/companyProduct";
import ProductCard from "./ProductCard";

interface CompanyDetailProps {
  company: Company;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({ company }) => {
  return (
    <div className="company-detail">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <div className="mb-8 text-center">
          <img
            src={company.profileUrl || "/placeholder-image.jpg"}
            alt={company.name}
            className="mx-auto mb-4 max-w-xs"
          />
          <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
          <p className="text-gray-600">{company.city}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>
              <strong>Email:</strong> {company.email}
            </p>
            <p>
              <strong>Phone:</strong> {company.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong> {company.address}
            </p>
            <p>
              <strong>Website:</strong> {company.websiteUrl}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p>{company.about || "No information available."}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {company.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
