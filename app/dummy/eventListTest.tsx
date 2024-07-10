"use client";

import React, { useEffect } from "react";
import { useEvent } from "../context/EventContext";
import { useTopics } from "../context/topicsContext";

const EventList: React.FC = () => {
  const { eventList } = useEvent();
  const { topicsList } = useTopics();

  useEffect(() => {
    console.log("List of events: ", eventList);
  }, [eventList]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="h-screen text-slate-50">
        <h1>{eventList?.length}</h1>
        {eventList.map((event, index) => (
          <li key={index}>
            <h2>{event?.name}</h2>
            <p>{event?.address}</p>
            <p>{event?.city}</p>
            <p>{event?.websiteUrl}</p>
            <p>{event?.eventType.name}</p>
            {/* Add other fields as necessary */}
          </li>
        ))}
      </div>

      <div>
        {topicsList.map((topic) => (
          <div key={topic.name}>{topic.name}</div>
        ))}
      </div>
    </>
  );
};

export default EventList;
