"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import { EventsList } from "./eventsList";

interface EventContextProps {
  events: EventsList[];
  addEvent: (newEvent: EventsList) => void;
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<EventsList[]>(initialEvents);

  const addEvent = (newEvent: EventsList) => {
    const existingMonthIndex = events.findIndex(
      (event) => event.month === newEvent.month
    );

    if (existingMonthIndex >= 0) {
      const updatedEvents = [...events];
      updatedEvents[existingMonthIndex].events.push(newEvent.events[0]);
      setEvents(updatedEvents);
    } else {
      setEvents([...events, newEvent]);
    }
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventContextProps => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};
