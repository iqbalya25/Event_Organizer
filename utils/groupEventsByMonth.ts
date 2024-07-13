// src/utils/groupEventsByMonth.ts
import { MonthEvents } from "@/types/eventTypes";

interface GroupedEvents {
  [key: string]: MonthEvents[];
}

export const groupEventsByMonth = (events: MonthEvents[]): GroupedEvents => {
  return events.reduce((acc, event) => {
    const month = new Date(event.dateStart).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(event);
    return acc;
  }, {} as GroupedEvents);
};
