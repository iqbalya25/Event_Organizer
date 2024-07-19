// src/expo/eventDetailSlug/EventSpeakers.tsx
import React from "react";
import { Speaker } from "@/types/eventTypes";

interface EventSpeakersProps {
  speakers?: Speaker[];
}

const EventSpeakers: React.FC<EventSpeakersProps> = ({ speakers = [] }) => {
  if (!speakers.length) return null;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={speaker.profileImgUrl || "/placeholder-image.jpg"}
              alt={speaker.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
              <p className="text-gray-500">{speaker.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSpeakers;
