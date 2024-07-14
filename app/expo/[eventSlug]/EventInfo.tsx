// src/expo/eventDetailSlug/EventInfo.tsx
import React from "react";
import { MonthEvents } from "@/types/eventTypes";

interface EventInfoProps {
  event: MonthEvents;
}

const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8 p-6">
      <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <DetailItem
            label="Date"
            value={`${event.dateStart} - ${event.dateEnd}`}
          />
          <DetailItem
            label="Time"
            value={`${event.hourStart} - ${event.hourEnd}`}
          />
          <DetailItem label="Location" value={event.address} />
          <DetailItem
            label="Website"
            value={
              <a
                href={event.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Event Website
              </a>
            }
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">About the Event</h3>
          <p className="text-gray-600">
            {event.descriptionDetail ||
              event.description ||
              "No additional information available."}
          </p>
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <p className="mb-2">
    <span className="font-medium">{label}:</span>{" "}
    <span className="ml-2">{value}</span>
  </p>
);

export default EventInfo;
