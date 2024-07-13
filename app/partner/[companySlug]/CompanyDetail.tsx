import React from "react";
import { Company } from "@/types/companyProduct";
import ProductCard from "./ProductCard";

import { FaEnvelope, FaShareAlt } from "react-icons/fa";
import RedButtonProfiles from "@/app/components/Button/RedButtonProfiles";

interface CompanyDetailProps {
  company: Company;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({ company }) => {
  return (
    <div className="company-detail bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between mb-8">
          <div className="text-center lg:text-left">
            <img
              src={company.profileUrl || "/placeholder-image.jpg"}
              alt={company.name}
              className="mx-auto mb-4 max-w-xs lg:mx-0"
            />
            <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
            <p className="text-gray-600">{company.city}</p>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <RedButtonProfiles
                title="Send Business Card"
                onClick={() => alert("Business Card Sent")}
              />
              <RedButtonProfiles
                title="Send E-Mail"
                icon={<FaEnvelope />}
                href={`mailto:${company.email}`}
              />
              <RedButtonProfiles
                title="Share"
                icon={<FaShareAlt />}
                onClick={() => alert("Shared")}
              />
            </div>
          </div>
          <div className="text-center lg:text-right mt-6 lg:mt-0">
            <h2 className="text-2xl font-semibold">Location</h2>
            <p>Hall 15, Stand A06</p>
            <button className="text-red-600 mt-2">More Information</button>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-semibold">Company Profile</h2>
            <p>{company.about || "No information available."}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
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
                <strong>Website:</strong>{" "}
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.websiteUrl}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <h2 className="text-3xl font-semibold mb-4">Our Products</h2>
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
