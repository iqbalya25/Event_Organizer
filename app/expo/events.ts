// src/queries/events.ts
import { useQuery } from "@tanstack/react-query";
import { MonthEvents } from "@/types/eventTypes";

const fetchEvents = async (): Promise<MonthEvents[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/event/paginated?page=0&size=20`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched events data:", data); // Log the data to check its format
  return data.data.content; // Extract the events from the response
};

export const useEvents = () => {
  return useQuery<MonthEvents[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
};
