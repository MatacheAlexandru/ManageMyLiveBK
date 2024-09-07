import React, { useState } from "react";
import { FiHome, FiBook } from "react-icons/fi";
import {
  MdAirplanemodeActive,
  MdOutlinePets,
  MdDirectionsCarFilled,
} from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Menu = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bgMenu w-[4rem] flex flex-col items-center py-4 space-y-6">
      <button
        onClick={toggleMenu}
        className="p-3 hover:bg-gray-700 rounded-lg transition"
      >
        {isOpen ? (
          <FiChevronUp className="h-6 w-6 text-gray-400 hover:text-white z-1 relative" />
        ) : (
          <FiChevronDown className="h-6 w-6 text-gray-400 hover:text-white z-1 relative" />
        )}
      </button>

      {isOpen && (
        <div className="bgMenuButtons relative">
          {/* Home */}
          <div className="  flex flex-col items-center">
            <button
              onClick={() => setActivePage("home")}
              className="p-3 hover:bg-gray-700 rounded-lg transition z-1 relative"
            >
              <FiHome className="h-6 w-6 text-gray-400 hover:text-white z-1 relative" />
            </button>
          </div>

          {/* Auto */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setActivePage("auto")}
              className="p-3 hover:bg-gray-700 rounded-lg transition"
            >
              <MdDirectionsCarFilled className="h-6 w-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Pet */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setActivePage("pets")}
              className="p-3 hover:bg-gray-700 rounded-lg transition"
            >
              <MdOutlinePets className="h-6 w-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* School */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setActivePage("school")}
              className="p-3 hover:bg-gray-700 rounded-lg transition"
            >
              <FiBook className="h-6 w-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          {/* Vacations */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setActivePage("vacations")}
              className="p-3 hover:bg-gray-700 rounded-lg transition"
            >
              <MdAirplanemodeActive className="h-6 w-6 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
