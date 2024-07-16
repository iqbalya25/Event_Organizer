// src/user/eventorganizer/AddSpeaker.tsx
"use client";
import React, { useState } from "react";
import { Speaker } from "@/types/eventTypes";

interface AddSpeakerProps {
  onAddSpeaker: (speaker: Speaker) => void;
}

const AddSpeaker: React.FC<AddSpeakerProps> = ({ onAddSpeaker }) => {
  const [name, setName] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSpeaker: Speaker = {
      name,
      profileImgUrl,
      position,
      about,
      companyName,
      eventId: 0, // Set this value as needed
      slug,
    };
    onAddSpeaker(newSpeaker);
    setName("");
    setProfileImgUrl("");
    setPosition("");
    setAbout("");
    setCompanyName("");
    setSlug("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Speaker</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Profile Image URL</label>
          <input
            type="text"
            value={profileImgUrl}
            onChange={(e) => setProfileImgUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Speaker
        </button>
      </form>
    </div>
  );
};

export default AddSpeaker;
