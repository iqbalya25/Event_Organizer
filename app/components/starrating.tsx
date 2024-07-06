// components/Review/starRating.tsx
"use client";
import React, { useState } from "react";

interface StarRatingProps {
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <svg
            key={starIndex}
            onClick={() => handleRating(starIndex)}
            className={`w-8 h-8 cursor-pointer ${
              starIndex <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.196 1.193-5.932 5.784 1.398 8.152L12 18.897l-7.33 3.85 1.398-8.152-5.932-5.784 8.196-1.193z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
