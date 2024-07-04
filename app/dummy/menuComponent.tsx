"use client";
import React, { useState } from "react";

type MenuType = "menu1" | "menu2" | null;

const MenuComponent = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);

  const showMenu = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  return (
    <div className="bg-white pt-32">
      <button
        onClick={() => showMenu("menu1")}
        disabled={activeMenu === "menu1"}
        className={`px-4 py-2 m-2 rounded ${
          activeMenu === "menu1" ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
      >
        Show Menu 1
      </button>
      <button
        onClick={() => showMenu("menu2")}
        disabled={activeMenu === "menu2"}
        className={`px-4 py-2 m-2 rounded ${
          activeMenu === "menu2" ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
      >
        Show Menu 2
      </button>
      {activeMenu === "menu1" && (
        <div className="mt-4 bg-gray-200 p-4 rounded shadow">
          <ul className="list-disc list-inside">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      )}
      {activeMenu === "menu2" && (
        <div className="mt-4 bg-gray-200 p-4 rounded shadow">
          <ul className="list-disc list-inside">
            <li>Menu Item 5</li>
            <li>Menu Item 6</li>
            <li>Menu Item 7</li>
            <li>Menu Item 8</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;
