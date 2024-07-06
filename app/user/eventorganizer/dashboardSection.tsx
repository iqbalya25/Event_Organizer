"use client";
import React from "react";
import ServiceCard from "@/app/components/Card/serviceCard";
import StatsCard from "@/app/components/statcard";
import GuestAttendanceGraph from "@/app/components/guestgraph";

const DashboardOrganizerSection: React.FC = () => {
  // Example data, replace this with actual data from your backend
  const registeredGuests = 100;
  const attendedGuests = 75;

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
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <ServiceCard
              link="#"
              title="Manage Booths"
              description="Set up and configure booths for events"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="#"
              title="Manage Conferences"
              description="Set up and configure conferences"
              icon="fi fi-ts-arrow-right"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          Guest Registrations and Attendance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatsCard title="Registered Guests" count={registeredGuests} />
          <StatsCard title="Attended Guests" count={attendedGuests} />
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Guest Attendance Overview</h2>
        <GuestAttendanceGraph />
      </section>
    </div>
  );
};

export default DashboardOrganizerSection;
