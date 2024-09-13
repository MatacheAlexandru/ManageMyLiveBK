import React, { useState } from "react";
import { FiHome, FiBook } from "react-icons/fi";
import {
  MdAirplanemodeActive,
  MdOutlinePets,
  MdDirectionsCarFilled,
} from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaBirthdayCake } from "react-icons/fa";

const Menu = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIcon, setActiveIcon] = useState("home"); // Starea pentru iconița activă

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page); // Schimbă pagina activă
    setActiveIcon(page); // Setează iconița activă
  };

  return (
    <div className="bgMenu w-[4rem] flex flex-col items-center py-4 space-y-6">
      <button
        onClick={toggleMenu}
        className="p-3 hover:bg-gray-700 rounded-lg transition"
      >
        {isOpen ? (
          <FiChevronUp className="h-6 w-6 text-gray-400" />
        ) : (
          <FiChevronDown className="h-6 w-6 text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="bgMenuButtons relative">
          {/* Home */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("home")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "home"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <FiHome
                className={`h-6 w-6 ${
                  activeIcon === "home" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Auto */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("auto")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "auto"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <MdDirectionsCarFilled
                className={`h-6 w-6 ${
                  activeIcon === "auto" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Pet */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("pets")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "pets"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <MdOutlinePets
                className={`h-6 w-6 ${
                  activeIcon === "pets" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* School */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("school")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "school"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <FiBook
                className={`h-6 w-6 ${
                  activeIcon === "school" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Vacations */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("vacations")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "vacations"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <MdAirplanemodeActive
                className={`h-6 w-6 ${
                  activeIcon === "vacations" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Birthday */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handlePageChange("birthday")}
              className={`p-3 rounded-lg transition ${
                activeIcon === "birthday"
                  ? "bg-gray-700 text-blue-500"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              <FaBirthdayCake
                className={`h-6 w-6 ${
                  activeIcon === "birthday" ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
