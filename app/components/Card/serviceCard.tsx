import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  icon,
}) => {
  return (
    <Link href={link}>
      <div className="relative block group">
        <div className="absolute inset-0 bg-red-500 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300"></div>
        <div className="relative flex flex-col gap-3 bg-white shadow-md p-5 mb-5 hover:border-red-600 border-transparent border-b-8 border-l-8 transition-all duration-200 flex items-start">
          <h2 className="text-xl text-red-600 font-bold">{title}</h2>
          <div className="flex flex-row items-center justify-center">
            <i className={`${icon} text-black text-2xl px-2`} />
            <p className="text-black pb-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
