import React from "react";

interface redButtonProps {
  title: string;
  onClick: () => void;
}

const RedButton: React.FC<redButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn border-none bg-red-600 hover:bg-white text-white hover:text-black w-36 rounded-full"
    >
      <p className="p-3 tex-2xl font-bold">{title}</p>
    </button>
  );
};

export default RedButton;
