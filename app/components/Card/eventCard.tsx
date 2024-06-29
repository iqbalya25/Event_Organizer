import { eventsList } from "@/app/Expo/eventsList";
import Link from "next/link";
import React from "react";

interface MonthCardProps {
  eventsItem: eventsList[];
}

const EventCard: React.FC<MonthCardProps> = ({ eventsItem }) => {
  return (
    <div className="flex flex-col mx-36 my-24 gap-10">
      {eventsItem.map((monthItem, index) => (
        <div key={index}>
          <div className="bg-red-600 p-5">
            <h1 className="text-6xl text-white font-bold">{monthItem.month}</h1>
          </div>
          <Link href="/Expo/event">
            <div className="bg-white text-center p-5 flex flex-col justify-center gap-10 lg:flex-row lg:justify-normal">
              {monthItem.events.map((eventItem, index) => (
                <div key={index} className="mb-4">
                  <h2
                    className="text-2xl font-bold p-4"
                    dangerouslySetInnerHTML={{ __html: eventItem.title }}
                  ></h2>
                  <p
                    className="p-4"
                    dangerouslySetInnerHTML={{ __html: eventItem.description }}
                  ></p>
                  <p className="text-gray-500 p-4">{eventItem.date}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
