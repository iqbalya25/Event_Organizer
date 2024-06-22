// components/Card.tsx
import React from "react";

interface CardProps {
  imgSrc: string;
  altText: string;
  label: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, altText, label }) => {
  return (
    <a
      href="#"
      className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96 hover:shadow-red-500 transition-shadow duration-200"
    >
      <img
        src={imgSrc}
        loading="lazy"
        alt={altText}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
      <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
        {label}
      </span>
    </a>
  );
};

export default Card;
