"use client";
import Image from "next/image";
import { useState } from "react";

const SortByTime = ({selectedOption, setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      {/* Sort button */}

      <div
        onClick={() => toggleDropdown()}
        className="flex items-center gap-2 border rounded-full p-2"
      >
        <span className="text-sm whitespace-nowrap">Sort by</span>
        <Image src={"bottom-arrow.svg"} alt="" width={8} height={8} />
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-700 rounded-xl shadow-lg">
          <div className="py-4 mx-2">
            <DropdownMenu
              text={"Release date: Old to New"}
              onHandleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
            />
            <DropdownMenu
              text={"Release date: New to Old"}
              onHandleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
            />
            <DropdownMenu
              text={"Price: Low to High"}
              onHandleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
            />
            <DropdownMenu
              text={"Price: High to Low"}
              onHandleOptionSelect={handleOptionSelect}
              selectedOption={selectedOption}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SortByTime;

const DropdownMenu = ({ onHandleOptionSelect, selectedOption, text }) => {
  return (
    <button
      onClick={() => onHandleOptionSelect(text)}
      className={`px-4 py-2 rounded-sm text-sm w-full text-left whitespace-nowrap  ${
        selectedOption === text
          ? "bg-orange-500 text-white"
          : "text-white hover:bg-gray-700"
      }`}
    >
      {text}
    </button>
  );
};
