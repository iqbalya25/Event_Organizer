// components/GuestAttendanceGraph.tsx
"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateDummyData = (type: "day" | "month" | "year") => {
  const data = {
    day: Array.from({ length: 30 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * 100),
    })),
    month: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * 1000),
    })),
    year: Array.from({ length: 5 }, (_, i) => ({
      x: 2015 + i,
      y: Math.floor(Math.random() * 5000),
    })),
  };
  return data[type];
};

const GuestAttendanceGraph: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"day" | "month" | "year">("day");

  const data = {
    labels: generateDummyData(timeRange).map((item) => item.x.toString()),
    datasets: [
      {
        label: `Guests - ${timeRange}`,
        data: generateDummyData(timeRange).map((item) => item.y),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Guest Attendance Over Time (${timeRange})`,
      },
    },
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="mb-4">
        <label
          htmlFor="timeRangeSelect"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select Time Range:
        </label>
        <select
          id="timeRangeSelect"
          value={timeRange}
          onChange={(e) =>
            setTimeRange(e.target.value as "day" | "month" | "year")
          }
          className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default GuestAttendanceGraph;
