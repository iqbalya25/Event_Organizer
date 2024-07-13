
import { MonthEvents } from "@/types/eventTypes";


export const fetchEventDetails = async (id: string): Promise<MonthEvents> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/event/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch event details");
  }
  const data = await response.json();
  return data.data; 
};
