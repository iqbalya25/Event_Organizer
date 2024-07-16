"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface BoothState {
  id: number;
  name: string;
  booked: boolean;
  categoryId: number;
}

const initialBooths: BoothState[] = [
  { id: 1, name: "A1", booked: false, categoryId: 14 },
  { id: 2, name: "A2", booked: false, categoryId: 14 },
  { id: 3, name: "A3", booked: false, categoryId: 14 },
  { id: 4, name: "A4", booked: false, categoryId: 14 },
  { id: 5, name: "A5", booked: false, categoryId: 14 },
  { id: 6, name: "A6", booked: false, categoryId: 14 },
  { id: 7, name: "B1", booked: false, categoryId: 14 },
  { id: 8, name: "B2", booked: false, categoryId: 14 },
  { id: 9, name: "B3", booked: false, categoryId: 14 },
  { id: 10, name: "B4", booked: false, categoryId: 14 },
  { id: 11, name: "B5", booked: false, categoryId: 14 },
  { id: 12, name: "B6", booked: false, categoryId: 14 },
  { id: 13, name: "C1", booked: false, categoryId: 14 },
  { id: 14, name: "C2", booked: false, categoryId: 14 },
  { id: 15, name: "C3", booked: false, categoryId: 14 },
  { id: 16, name: "C4", booked: false, categoryId: 14 },
  { id: 17, name: "C5", booked: false, categoryId: 14 },
  { id: 18, name: "C6", booked: false, categoryId: 14 },
];

const HallASetting: React.FC = () => {
  const [booths, setBooths] = useState<BoothState[]>(initialBooths);
  const [savedBooths, setSavedBooths] = useState<BoothState[]>(initialBooths);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBoothData();
  }, []);

  const fetchBoothData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/block/category/14`
      );
      const fetchedBooths = response.data.data;
      const updatedBooths = booths.map((booth) => {
        const fetchedBooth = fetchedBooths.find(
          (fetched: BoothState) => fetched.id === booth.id
        );
        return fetchedBooth ? { ...booth, booked: fetchedBooth.booked } : booth;
      });
      setBooths(updatedBooths);
      setSavedBooths(updatedBooths);
      setError(null);
    } catch (error) {
      console.error("Error fetching booth data:", error);
      setError("Error fetching booth data");
    }
  };

  const sendDataToBackend = async (data: BoothState[]) => {
    try {
      const promises = data.map((booth) =>
        axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/block/${booth.id}`,
          booth
        )
      );
      await Promise.all(promises);
      setError(null);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      setError("Error sending data to backend");
    }
  };

  const handleBoothClick = (id: number) => {
    setBooths((prevBooths) =>
      prevBooths.map((booth) =>
        booth.id === id ? { ...booth, booked: !booth.booked } : booth
      )
    );
  };

  const handleSave = async () => {
    const changedBooths = booths.filter(
      (booth) =>
        booth.booked !==
        savedBooths.find((savedBooth) => savedBooth.id === booth.id)?.booked
    );
    await sendDataToBackend(changedBooths);
    setSavedBooths(booths);
    setSaved(true);
  };

  const handleCancel = () => {
    setBooths(savedBooths);
  };

  const renderBooth = (booth: BoothState) => (
    <div
      key={booth.id}
      className={`w-16 h-16 border flex items-center justify-center 
        ${booth.booked ? "bg-red-500" : "bg-gray-200 hover:bg-gray-400"} 
        mr-4 cursor-pointer`}
      onClick={() => handleBoothClick(booth.id)}
    >
      {booth.name}
    </div>
  );

  const renderBlockRow = (blockName: string, startIndex: number) => (
    <div className="flex mb-4">
      <div className="font-bold mr-8 flex items-center">{blockName}</div>
      <div className="flex">
        {booths
          .slice(startIndex, startIndex + 3)
          .map((booth) => renderBooth(booth))}
      </div>
    </div>
  );

  return (
    <div className="overflow-x-scroll">
      <div className="flex flex-col items-center my-8">
        <div className="w-[60rem] p-4 mb-8 border border-gray-300 bg-white shadow-lg relative">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {saved ? "Hall A - Saved Layout" : "Hall A"}
          </h2>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          {/* Top Doors */}
          <div className="absolute left-1/4 top-0 transform -translate-y-1/2 flex">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
              Exit
            </div>
          </div>
          <div className="absolute right-1/4 top-0 transform -translate-y-1/2 flex">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
              Exit
            </div>
          </div>
          {/* Bottom Doors */}
          <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 flex">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
              Exit
            </div>
          </div>
          <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 flex">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r ml-2">
              Exit
            </div>
          </div>
          {/* Left Door */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 flex flex-col gap-14">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l transform rotate-90">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r transform rotate-90 mt-1">
              Exit
            </div>
          </div>
          {/* Right Door */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 flex flex-col gap-14">
            <div className="px-2 py-1 bg-blue-500 text-white rounded-l transform rotate-90">
              Entrance
            </div>
            <div className="px-2 py-1 bg-red-500 text-white rounded-r transform rotate-90 mt-1">
              Exit
            </div>
          </div>

          {/* Booths Layout */}
          <div className="flex justify-between px-8">
            <div>
              {renderBlockRow("Block A", 0)}
              {renderBlockRow("Block B", 6)}
              {renderBlockRow("Block C", 12)}
            </div>
            <div>
              {renderBlockRow("Block A", 3)}
              {renderBlockRow("Block B", 9)}
              {renderBlockRow("Block C", 15)}
            </div>
          </div>
        </div>

        {!saved ? (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Save Layout
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel Changes
            </button>
          </div>
        ) : (
          <button
            onClick={() => setSaved(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Edit Layout
          </button>
        )}
      </div>
    </div>
  );
};

export default HallASetting;
