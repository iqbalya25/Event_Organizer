// components/StatsCard.tsx
"use client";
import React from "react";

interface StatsCardProps {
  title: string;
  count: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  );
};

export default StatsCard;
