// File: src/app/components/EventRegistration.tsx
"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";

interface EventRegistrationProps {
  eventId: number;
  eventName: string;
}

const EventRegistration: React.FC<EventRegistrationProps> = ({
  eventId,
  eventName,
}) => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;

  const [ticketData, setTicketData] = useState<{
    userName: string;
    eventName: string;
    ticketId: string;
  } | null>(null);

  const handleRegister = () => {
    const ticket = {
      userName: user.email,
      eventName: eventName,
      ticketId: `${user.email}-${eventId}`, // Generating a ticket ID
    };

    setTicketData(ticket);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        onClick={handleRegister}
      >
        Register
      </button>
      {ticketData && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Ticket</h3>
          <p>
            <strong>User Name:</strong> {ticketData.userName}
          </p>
          <p>
            <strong>Event Name:</strong> {ticketData.eventName}
          </p>
          <p>
            <strong>Ticket ID:</strong> {ticketData.ticketId}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;
