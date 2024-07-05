import { EventsList } from "@/app/expo/eventsList";
import React from "react";

interface EventCardProps {
  eventsItem: EventsList[];
}

const EventCard: React.FC<EventCardProps> = ({ eventsItem }) => {
  return (
    <div className="flex flex-col mx-16 my-24 gap-10">
      {eventsItem.map((eventsList, index) => (
        <div key={index}>
          <div className="bg-red-600 p-5">
            <h1 className="text-6xl text-white font-bold">
              {eventsList.month}
            </h1>
          </div>
          <div className="bg-white text-center p-5 justify-center gap-10 flex flex-row justify-normal overflow-x-auto">
            {eventsList.events.map((eventItem, idx) => (
              <div key={idx} className="mb-4">
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
        </div>
      ))}
    </div>
  );
};

export default EventCard;
