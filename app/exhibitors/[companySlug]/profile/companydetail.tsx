// components/CompanyDetail.tsx
import { Company } from "@/types/companyProdct";
import React from "react";

interface CompanyDetailProps {
  name: string;
  address: string;
  country: string;
  description: string;
  location: Company["location"];
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({
  name,
  address,
  country,
  description,
  location,
}) => {
  return (
    <div className="mb-8">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Country:</strong> {country}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Location:</strong> {location.description}
      </p>
    </div>
  );
};

export default CompanyDetail;
