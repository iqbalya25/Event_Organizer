"use client";
import React from "react";
import CompanyInfoCard from "@/app/components/Card/infoProfileCard";
import ServiceCard from "@/app/components/Card/serviceCard";

const DashboardSection = () => {
  return (
    <div>
      <header className="bg-black text-white pt-32 pb-8">
        <h1 className="text-2xl lg:text-6xl font-bold text-center">
          Dashboard
        </h1>
      </header>
      <section className="bg-white text-black p-8">
        <div className="container mx-auto">
          <h2 className="text-xl lg:text-4xl font-bold">
            Welcome, Sunday Automation
          </h2>
          <p className="mt-4 text-lg">
            It’s good to have you back! Plan your visit to the show conveniently
            here. Our contact persons will be happy to answer any questions you
            may have about our online services.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Company Account</h2>
        <CompanyInfoCard creditAmount={10000} referralCode="AAA123" />
      </section>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-black font-bold mb-4">Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard
              link="#"
              title="User Account"
              description="Personal Setting"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="/reservation/exhibition"
              title="Exhibition & Conference"
              description="Book Booth For Exhibition or Conference"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="/reservation/exhibition"
              title="Add Product"
              description="Add your product for company information"
              icon="fi fi-ts-arrow-right"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <ul className="bg-white p-4 shadow rounded-lg">
          <li className="border-b py-2">Activity 1</li>
          <li className="border-b py-2">Activity 2</li>
          <li className="border-b py-2">Activity 3</li>
          <li className="py-2">Activity 4</li>
        </ul>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="bg-white p-4 shadow rounded-lg">
          <li className="border-b py-2">Event 1</li>
          <li className="border-b py-2">Event 2</li>
          <li className="border-b py-2">Event 3</li>
          <li className="py-2">Event 4</li>
        </ul>
      </section>
    </div>
  );
};

export default DashboardSection;
