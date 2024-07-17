"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { MonthEvents } from "@/types/eventTypes";
import EventDetail from "./EventDetail";
import EventInfo from "./EventInfo";
import EventSpeakers from "./EventSpeaker";
import EventTopics from "./EventTopics";
import StatsCard from "../components/statcard";
import GuestAttendanceGraph from "../components/guestgraph";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";

const fetchEventBySlug = async (slug: string): Promise<MonthEvents> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/event/${slug}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("API response:", data);
  return data.data;
};

const EventDetailPage = () => {
  const params = useParams();
  const eventSlug = params.eventSlug as string;
  const { data: session } = useSession();
  const user = session?.user as UserSession;

  const {
    data: event,
    error,
    isLoading,
  } = useQuery<MonthEvents, Error>({
    queryKey: ["event", eventSlug],
    queryFn: () => fetchEventBySlug(eventSlug),
  });

  console.log("Event data:", event);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!event) return <div>Event not found</div>;

  const registeredGuests = 100;
  const attendedGuests = 75;

  return (
    <div>
      <div className=" px-16 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Event Detail
        </h1>
      </div>
      <EventDetail event={event} />
      <EventInfo event={event} />
      <EventSpeakers speakers={event.speakers} />
      <EventTopics topics={event.topics} />

      {session && session.user && user.role === "ROLE_ORGANIZER" && (
        <>
          <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Guest Registrations and Attendance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatsCard title="Registered Guests" count={registeredGuests} />
              <StatsCard title="Attended Guests" count={attendedGuests} />
            </div>
          </section>
          <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Guest Attendance Overview
            </h2>
            <GuestAttendanceGraph />
          </section>
        </>
      )}
    </div>
  );
};

export default EventDetailPage;
