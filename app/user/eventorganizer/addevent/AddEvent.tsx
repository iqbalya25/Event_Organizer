"use client";
import EventForm from "@/app/user/eventorganizer/components/EventForm";
import React, { useState } from "react";

const EventFormSection = () => {
  const [events, setEvents] = useState<
    {
      name: string;
      address: string;
      city: string;
      websiteUrl: string;
      imageUrl: string;
      description: string;
      capacity: number;
      dateStart: string;
      dateEnd: string;
      hourStart: string;
      hourEnd: string;
    }[]
  >([]);

  const addEvent = (event: {
    name: string;
    address: string;
    city: string;
    websiteUrl: string;
    imageUrl: string;
    description: string;
    capacity: number;
    dateStart: string;
    dateEnd: string;
    hourStart: string;
    hourEnd: string;
  }) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <div>
      <div className="pt-36 px-16 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Add Event Monthly
        </h1>
      </div>
      <div className=" bg-gray-300 ">
        <EventForm onAddEvent={addEvent} />
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index} className="mb-4 p-4 border rounded-md shadow-sm">
                <h3 className="text-lg font-bold">{event.name}</h3>
                <p>{event.description}</p>
                <p>Address: {event.address}</p>
                <p>City: {event.city}</p>
                <p>
                  Website:{" "}
                  <a
                    href={event.websiteUrl}
                    target="_blank"
                    className="text-blue-500"
                  >
                    {event.websiteUrl}
                  </a>
                </p>
                <p>Capacity: {event.capacity}</p>
                <p>Start Date: {event.dateStart}</p>
                <p>End Date: {event.dateEnd}</p>
                <p>Start Time: {event.hourStart}</p>
                <p>End Time: {event.hourEnd}</p>
                <img
                  src={event.imageUrl}
                  alt={event.name}
                  className="mt-2 rounded-md shadow-sm"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventFormSection;
