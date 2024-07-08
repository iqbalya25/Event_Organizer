import React from "react";
import GeneralSearch from "../components/Searchbar/generalSearch";
import CompanyCard from "../components/Card/companyCard";
import { PartnersList } from "@/constants/partnerList";

const PartnerListSection = () => {
  return (
    <div>
      <div className="pt-36 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-8xl font-bold text-white">Partner List</h1>
      </div>
      <div className="px-36 pt-20">
        <GeneralSearch />
      </div>
      <div className="mx-36">
        <CompanyCard partnersItem={PartnersList} />
      </div>
    </div>
  );
};

export default PartnerListSection;
