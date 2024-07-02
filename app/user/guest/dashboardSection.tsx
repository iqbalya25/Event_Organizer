"use client";
import CustomButton from "@/app/components/Button/customButton";
import RedButton from "@/app/components/Button/redButton";
import ServiceCard from "@/app/components/Card/serviceCard";

import React from "react";

const DashboardSection = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-6xl pt-32 pb-8 bg-black text-white font-bold flex justify-center items-center">
        Dashboard
      </h1>
      <div className="h-fit flex flex-col justify-center px-32 py-24 bg-white text-black">
        <p className="font-bold text-xl lg:text-4xl">
          Hello! Muhammad Iqbal Fariz
        </p>
        <br />
        <p className="text-xl">
          Its good to have you back! Plan your visit to the show conveniently
          here. Our contact persons will be happy to answer any questions you
          may have about our online services.
        </p>
      </div>

      <div className="py-8 px-32 h-fit bg-gray-300 flex flex-col gap-10">
        <h1 className=" text-2xl text-black font-bold">Services</h1>
        <ServiceCard
          link="#"
          title="User Account"
          description="Personal Setting"
          icon="fi fi-ts-arrow-right"
        />

        <ServiceCard
          link="#"
          title="Exhibition"
          description="find exhibition"
          icon="fi fi-ts-arrow-right"
        />

        <ServiceCard
          link="#"
          title="Conference"
          description="find conference"
          icon="fi fi-ts-arrow-right"
        />
      </div>
    </div>
  );
};

export default DashboardSection;
