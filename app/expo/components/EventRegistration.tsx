// File: src/components/EventRegistration.tsx

"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";
import axios from "axios";
import { MonthEvents } from "@/types/eventTypes";

interface EventRegistrationProps {
  event: MonthEvents;
}

interface TicketData {
  eventId: number;
  dateStart: string;
  dateEnd: string;
  hourStart: string;
  hourEnd: string;
  city: string;
  eventType: string | null;
  eventName: string;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  ticketCode: string;
}

const EventRegistration: React.FC<EventRegistrationProps> = ({ event }) => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;

  const [ticket, setTicket] = useState<TicketData | null>(null);

  const handleRegister = async () => {
    if (user) {
      try {
        // Register the event
        const registerResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}api/v1/tickets`,
          { eventId: event.id },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        if (registerResponse.status === 200) {
          // Fetch the ticket details
          const ticketResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}api/v1/tickets/event/${event.id}`,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );

          const ticketDataArray = ticketResponse.data.data; // This is an array
          if (ticketDataArray.length > 0) {
            setTicket(ticketDataArray[0]); // Assuming you want the first ticket in the array
          } else {
            alert("No ticket found.");
          }
          alert("Ticket registered successfully!");
          console.log(ticketDataArray[0]);
        } else {
          throw new Error("Failed to register ticket");
        }
      } catch (error) {
        console.error("Error registering ticket:", error);
        alert("Error registering ticket, please try again later.");
      }
    } else {
      alert("You need to log in to register for the event.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="font-bold flex flex-col justify-center items-center">
        <h1 className="text-3xl p-10">Register To Event</h1>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-200"
          onClick={handleRegister}
        >
          Register for Event
        </button>
      </div>

      {ticket && (
        <div className="mt-4 p-4 border border-gray-300 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Ticket</h2>
          <p>
            <strong>Event:</strong> {ticket.eventName}
          </p>
          <p>
            <strong>Start Date:</strong> {ticket.dateStart}
          </p>
          <p>
            <strong>End Date:</strong> {ticket.dateEnd}
          </p>
          <p>
            <strong>Start Hour:</strong> {ticket.hourStart}
          </p>
          <p>
            <strong>End Hour:</strong> {ticket.hourEnd}
          </p>
          <p>
            <strong>City:</strong> {ticket.city}
          </p>
          <p>
            <strong>User:</strong> {ticket.firstName} {ticket.lastName}
          </p>
          <p>
            <strong>Email:</strong> {ticket.email}
          </p>
          <p>
            <strong>Ticket Code:</strong> {ticket.ticketCode}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventRegistration;
