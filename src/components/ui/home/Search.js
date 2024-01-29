"use client";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const servicesOptions = [
    "Air Conditioning Installation",
    "Air Conditioning Repair",
    "Air Conditioning Maintenance",
    "Ductless Mini-Split Services",
    "Commercial Air Conditioning",
    "Rant AC",
  ];

  const handleSearch = () => {
    console.log("Searching for:", selectedOption);
  };

  return (
    <div className="flex items-center justify-between gap-4 bg-white rounded-full px-5 max-w-[450px]">
      <div className="flex items-center">
        <CiSearch className="text-2xl" />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="h-14 pr-8 pl-5  focus:outline-none bg-none"
        >
          <option value="" disabled>
            Select a service
          </option>
          {servicesOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        className="rounded-full bg-[#f35748]
          } w-12 h-12 text-center text-white hover:bg-[#4AB7C3] transform transition-transform duration-300"
        onClick={handleSearch}
      >
        <FaArrowRightLong className="text-3xl font-bold mx-auto" />
      </button>
    </div>
  );
};

export default Search;
