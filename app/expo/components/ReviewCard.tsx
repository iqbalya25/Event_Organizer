// File: src/app/components/ReviewCard.tsx

import React from "react";

interface ReviewCardProps {
  userName: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  rating,
  review,
}) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mb-4">
      <h3 className="text-xl font-bold">{userName}</h3>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>
      <p>{review}</p>
    </div>
  );
};

export default ReviewCard;
