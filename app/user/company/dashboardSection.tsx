"use client";
import React from "react";

import CompanyInfoCard from "@/app/components/Card/infoProfileCard";
import ServiceCard from "@/app/components/Card/serviceCard";

const DashboardSection = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-6xl pt-32 pb-8 bg-black text-white font-bold flex justify-center items-center">
        Dashboard
      </h1>
      <div className="h-fit flex flex-col justify-center px-32 py-10 bg-white text-black">
        <p className="font-bold text-xl lg:text-4xl">
          Welcome, Sunday Automation
        </p>
        <br />
        <p className="text-xl">
          It’s good to have you back! Plan your visit to the show conveniently
          here. Our contact persons will be happy to answer any questions you
          may have about our online services.
        </p>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Company Account</h1>
        <CompanyInfoCard creditAmount={10000} referralCode="AAA123" />
      </div>

      <div className="py-8 px-32 h-fit bg-gray-300 flex flex-col gap-10">
        <h1 className="text-2xl text-black font-bold">Services</h1>
        <ServiceCard
          link="#"
          title="User Account"
          description="Personal Setting"
          icon="fi fi-ts-arrow-right"
        />

        <ServiceCard
          link="#"
          title="Exhibition"
          description="Book Booth For Exhibition"
          icon="fi fi-ts-arrow-right"
        />

        <ServiceCard
          link="#"
          title="Conference"
          description="Book Booth For Conference"
          icon="fi fi-ts-arrow-right"
        />
      </div>
    </div>
  );
};

export default DashboardSection;
