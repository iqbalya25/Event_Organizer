"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { MonthEvents } from "@/types/eventTypes";
import EventDetail from "./EventDetail";
import EventInfo from "./EventInfo";
import EventSpeakers from "./EventSpeaker";
import EventTopics from "./EventTopics";

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

  return (
    <div>
      <div className="pt-36 px-16 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Event Detail
        </h1>
      </div>
      <EventDetail event={event} />
      <EventInfo event={event} />
      <EventSpeakers speakers={event.speakers} />
      <EventTopics topics={event.topics} />
    </div>
  );
};

export default EventDetailPage;
