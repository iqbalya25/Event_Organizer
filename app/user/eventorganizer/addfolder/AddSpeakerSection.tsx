// src/user/eventorganizer/AddSpeakerPage.tsx
"use client";
import React, { useState } from "react";
import AddSpeaker from "./AddSpeaker";
import { Speaker } from "@/types/eventTypes";

const AddSpeakerPage: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const handleAddSpeaker = (newSpeaker: Speaker) => {
    setSpeakers([...speakers, newSpeaker]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Speaker for Conference</h1>
      <AddSpeaker onAddSpeaker={handleAddSpeaker} />
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Speakers List</h2>
        {speakers.length > 0 ? (
          <ul className="list-disc pl-6">
            {speakers.map((speaker, index) => (
              <li key={index}>
                <strong>{speaker.name}</strong> - {speaker.position} at {speaker.companyName}
                <br />
                <img src={speaker.profileImgUrl || ''} alt={speaker.name} className="w-16 h-16 rounded-full" />
                <br />
                {speaker.about}
              </li>
            ))}
          </ul>
        ) : (
          <p>No speakers added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddSpeakerPage;
