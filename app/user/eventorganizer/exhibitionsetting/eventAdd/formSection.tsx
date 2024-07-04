"use client";
import { eventsList } from "@/app/expo/eventsList";
import React, { useState } from "react";

interface EventFormProps {
  onAddEvent: (newEvent: eventsList) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onAddEvent }) => {
  const [month, setMonth] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent: eventsList = {
      month,
      events: [
        {
          title,
          description,
          date,
        },
      ],
    };

    onAddEvent(newEvent);
    setMonth("");
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="p-8 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Month</label>
          <input
            type="text"
            className="border-2 border-gray-400 p-2 w-full"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            className="border-2 border-gray-400 p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            className="border-2 border-gray-400 p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="text"
            className="border-2 border-gray-400 p-2 w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
