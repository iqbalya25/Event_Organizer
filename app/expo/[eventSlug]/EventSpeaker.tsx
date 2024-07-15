// src/expo/eventDetailSlug/EventSpeakers.tsx
import React from "react";
import { Speaker } from "@/types/eventTypes";

interface EventSpeakersProps {
  speakers?: Speaker[];
}

const EventSpeakers: React.FC<EventSpeakersProps> = ({ speakers = [] }) => {
  if (!speakers.length) return null;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Our Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {speakers.map((speaker, index) => (
          <div key={index} className="text-center">
            <img
              src={speaker.profileImgUrl || "/placeholder-image.jpg"}
              alt={speaker.name}
              className="w-full h-48 object-cover rounded-full mx-auto"
            />
            <h3 className="text-xl font-semibold mt-2">{speaker.name}</h3>
            <p className="text-gray-500">{speaker.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSpeakers;
