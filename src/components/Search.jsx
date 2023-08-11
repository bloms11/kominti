import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
  return (
    <div className="flex justify-between items-center h-[100px] px-8">
      <h4>Employees</h4>
      <div className="flex items-center gap-x-8">
        <div className="flex rounded-[40px] gap-x-2 border-[#4aa58b] border-[0.5px] items-center py-2 px-4 bg-white">
          <FiSearch color="#047857" size={24} />
          <input className="h-[25px] text-[#4f4f4f] outline-none" type="text" />
        </div>
        <div className="flex gap-x-3">
          <div className="flex w-[120px] h-[40px] rounded-[4px] bg-[#EFEFEF]"></div>
          <div className="flex w-[80px] h-[40px] rounded-[4px] bg-[#EFEFEF]"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
