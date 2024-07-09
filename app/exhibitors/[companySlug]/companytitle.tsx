// components/CompanyTitle.tsx
import React from "react";

interface CompanyTitleProps {
  title: string;
}

const CompanyTitle: React.FC<CompanyTitleProps> = ({ title }) => (
  <h1 className="text-3xl font-bold mb-4">{title}</h1>
);

export default CompanyTitle;
