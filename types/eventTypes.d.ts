export interface eventsList {
  month: string;
  events: eventsItem[];
}

export interface eventsItem {
  title: string;
  description: string;
  date: string;
}
