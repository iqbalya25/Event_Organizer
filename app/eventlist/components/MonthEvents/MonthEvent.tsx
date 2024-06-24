import React from "react";
import Link from "next/link";

interface MonthItem {
  href: string;
  label: string;
}

const MonthList: MonthItem[] = [
  { href: "#", label: "June" },
  { href: "#", label: "July" },
  { href: "#", label: "August" },
  // Add more items as needed
];

const MonthEvent: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {MonthList.map((month, index) => (
        <div
          key={index}
          className="m-4 p-4 border border-gray-300 rounded-md text-center"
        >
          <Link href={month.href}>
            <a className="text-blue-500 hover:underline">{month.label}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MonthEvent;
