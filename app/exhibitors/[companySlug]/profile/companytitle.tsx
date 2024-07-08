import React from "react";

interface CompanyTitleProps {
  title: string;
}

const CompanyTitle: React.FC<CompanyTitleProps> = ({ title }) => {
  return <h1 className="text-4xl font-bold mb-6">{title}</h1>;
};

export default CompanyTitle;
