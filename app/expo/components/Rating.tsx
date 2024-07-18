// components/StarRating.tsx
import React, { useState } from 'react';

interface StarRatingProps {
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    onRatingChange(rate);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleRating(star)}
          className={rating >= star ? 'text-yellow-500' : 'text-gray-400'}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarRating;
