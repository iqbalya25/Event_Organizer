import { partnersList } from "@/app/Partner/partnerList";
import React from "react";

interface PartnerCardProps {
  partnersItem: partnersList[];
}

const CompanyCard: React.FC<PartnerCardProps> = ({ partnersItem }) => {
  return (
    <div className="pt-24 pb-24 flex flex-col gap-10 border-b-2 border-black">
      {partnersItem.map((partner, index) => (
        <div key={index} className=" border-b-2 border-gray-300">
          <div className="text-center p-5 flex flex-col justify-center gap-10 lg:flex-row lg:justify-normal bg-white">
            <div className="flex items-center">{partner.logo}</div>
            <div className="flex flex-col items-start gap-5">
              <div>{partner.status}</div>
              <div>{partner.companyname}</div>
              <div>{partner.location}</div>
              <div>{partner.description}</div>
              <div>{partner.stand}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyCard;
