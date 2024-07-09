// components/CompanyDetail.tsx
import React from "react";

interface CompanyDetailProps {
  name: string;
  address: string;
  country: string;
  description: string;
  location: {
    description: string;
    icon: string;
    link: string;
    title: string;
  };
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({
  name,
  address,
  country,
  description,
  location,
}) => (
  <div>
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
      <strong>Location:</strong> {location.description} ({location.title})
    </p>
  </div>
);

export default CompanyDetail;
