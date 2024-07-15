"use client";
import React, { useState } from "react";
import ExhibitionHallA from "./ExhibitionHallA";
import ExhibitionHallB from "./ExhibitionHallB";
import ExhibitionHallC from "./ExhibitionHallC";

type MenuType = "menu1" | "menu2" | "menu3" | null;

const BookExhibition = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);

  const showMenu = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      <h1 className="text-xl lg:text-6xl pt-32 pb-8 bg-black text-white font-bold flex justify-center items-center">
        Booth Exhibition
      </h1>
      <div className="bg-white">
        <div className="flex flex-row justify-around overflow-x-scroll gap-16 text-center p-16 md:flex-row">
          <button
            onClick={() => showMenu("menu1")}
            disabled={activeMenu === "menu1"}
            className="bg-gray-200 h-44 min-w-[20rem] flex items-center justify-center border-2 border-gray-400 text-gray-900 font-bold hover:bg-gray-600 hover:text-white"
          >
            Hall A
          </button>
          <button
            onClick={() => showMenu("menu2")}
            disabled={activeMenu === "menu2"}
            className="bg-gray-200 h-36 min-w-[18rem] flex items-center justify-center border-2 border-gray-400 text-gray-900 font-bold hover:bg-gray-600 hover:text-white"
          >
            Hall B
          </button>
          <button
            onClick={() => showMenu("menu3")}
            disabled={activeMenu === "menu3"}
            className="bg-gray-200 h-28 min-w-[14rem] flex items-center justify-center border-2 border-gray-400 text-gray-900 font-bold hover:bg-gray-600 hover:text-white"
          >
            Hall C
          </button>
        </div>
      </div>

      {activeMenu && (
        <div className="mt-4 px-16 bg-gray-200 p-4 rounded shadow">
          {activeMenu === "menu1" && <ExhibitionHallA />}
          {activeMenu === "menu2" && <ExhibitionHallB />}
          {activeMenu === "menu3" && <ExhibitionHallC />}
        </div>
      )}
    </div>
  );
};

const ExhibitionSection = () => {
  return (
    <div>
      <div className="h-fit bg-white">
        <BookExhibition />
      </div>
    </div>
  );
};

export default ExhibitionSection;
