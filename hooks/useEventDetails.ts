// src/hooks/useEventDetails.ts
import { useQuery } from "@tanstack/react-query";

import { MonthEvents } from "@/types/eventTypes";
import { fetchEventDetails } from "@/app/expo/[eventDetailSlug]/eventDetail";

export const useEventDetails = (id: string) => {
  return useQuery<MonthEvents, Error>({
    queryKey: ["eventDetails", id],
    queryFn: () => fetchEventDetails(id),
  });
};
