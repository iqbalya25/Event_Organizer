// File: components/ServiceCard.tsx
import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  eventTypeId: number;
  eventId: string; // or number depending on your event ID type
}

const ServiceEventCard: React.FC<ServiceCardProps> = ({
  eventTypeId,
  eventId,
}) => {
  let title = "";
  let description = "";
  let link = "";

  if (eventTypeId === 1) {
    title = "Become a Contributor";
    description = "Join this event as a contributor and share your knowledge.";
    link = `/conference/contributor/${eventId}`;
  } else if (eventTypeId === 2) {
    title = "Become an Exhibitor";
    description = "Showcase your products and services as an exhibitor.";
    link = `/expo/exhibitor/${eventId}`;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href="/expo/addspeaker">
        <div className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
          Learn More
        </div>
      </Link>
    </div>
  );
};

export default ServiceEventCard;
