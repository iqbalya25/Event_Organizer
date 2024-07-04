import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const LocationCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100 shadow-lg p-5 mb-5 border-red-600  border-l-8  flex items-start w-[30vw]">
      <h2 className="text-xl text-black font-bold">{title}</h2>
      <div className="flex flex-row items-center justify-center">
        <i className={`${icon} text-black text-2xl px-2`} />
        <p className="text-black pb-1">{description}</p>
      </div>
    </div>
  );
};

export default LocationCard;
