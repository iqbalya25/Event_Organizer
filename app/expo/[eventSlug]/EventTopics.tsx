// src/expo/eventDetailSlug/EventTopics.tsx
import React from "react";
import { Topic } from "@/types/eventTypes";

interface EventTopicsProps {
  topics?: Topic[];
}

const EventTopics: React.FC<EventTopicsProps> = ({ topics = [] }) => {
  if (!topics.length) return null;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Topics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="text-center p-4">
            <h3 className="text-lg font-semibold">{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTopics;
