import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { MonthEvents } from "@/types/eventTypes";

const fetchEvents = async (query: string): Promise<MonthEvents[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/event/paginated?page=0&size=20&search=${query}&sortBy=dateStart&sortDirection=desc`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Fetched events data:", data.data.content);
  return data.data.content;
};

export const useEvents = (
  query: string
): UseQueryResult<MonthEvents[], Error> => {
  return useQuery<MonthEvents[], Error>({
    queryKey: ["events", query],
    queryFn: () => fetchEvents(query),
    enabled: !!query || query === "",
  });
};
