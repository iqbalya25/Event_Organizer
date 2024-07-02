import React from "react";

const GeneralSearch: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-3 pr-12 h-20 text-2xl bg-white shadow-lg drop-shadow-md"
        />
        <button className="absolute right-3">
          <img src="./magnifier.png" alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default GeneralSearch;
