import React from "react";
import GeneralSearch from "../components/Searchbar/generalSearch";
import CompanyCard from "./components/companyCard";
import { PartnersList } from "@/constants/partnerList";
import SearchBarCompany from "./components/SearchBarCompany";

const PartnerListSection = () => {
  return (
    <div>
      <div className="py-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl text-center md:text-4xl lg:text-6xl font-bold text-white">
          Partner List
        </h1>
      </div>
      <div className="px-36 pt-20"></div>
      <div className="mx-36">
        <CompanyCard />
      </div>
    </div>
  );
};

export default PartnerListSection;
