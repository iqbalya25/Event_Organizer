import React from "react";
import EventForm from "./formSection";

const EODashboard = () => {
  return (
    <div>
      <EventForm onAddEvent={handleAddEvent} />
    </div>
  );
};

export default EODashboard;
