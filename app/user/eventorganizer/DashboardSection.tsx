"use client";
import React from "react";
import ServiceCard from "@/app/components/Card/serviceCard";
import TransactionsList from "@/app/components/transactionlist";
import StatsCard from "../../expo/components/statcard";
import GuestAttendanceGraph from "../../expo/components/guestgraph";

const DashboardOrganizerSection: React.FC = () => {
  // Example data, replace this with actual data from your backend
  const registeredGuests = 100;
  const attendedGuests = 75;

  return (
    <div>
      <header className="bg-black text-white px-24 pb-8">
        <h1 className="text-2xl lg:text-6xl font-bold text-center">
          Dashboard
        </h1>
      </header>
      <section className="bg-white text-black p-8">
        <div className="container mx-auto">
          <h2 className="text-xl lg:text-4xl font-bold">
            Welcome, Event Organizer
          </h2>
          <p className="mt-4 text-lg">
            Manage your events, booths, and guests conveniently here. Our team
            is here to assist you with any questions or issues you may have.
          </p>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-black font-bold mb-4">
            Booth and Conference Settings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard
              link="#"
              title="Manage Booths"
              description="Set up and configure booths for events"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="/user/eventorganizer/manageevents"
              title="Manage Event"
              description="Set up and configure Event"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="/user/eventorganizer/addevent"
              title="Add Event"
              description="Add Monthly Event"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="/user/eventorganizer/addvoucher"
              title="Add Coupon"
              description="Add Coupon for Discount"
              icon="fi fi-ts-arrow-right"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        <TransactionsList />
      </section>
    </div>
  );
};

export default DashboardOrganizerSection;
