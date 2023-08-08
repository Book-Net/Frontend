import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar() {
  return (
    <div className="md:flex items-center space-x-2 mx-auto">
      {/* Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="border shadow rounded-lg w-full py-2 pr-10 pl-3 focus:outline-none focus:to-black border-[#BF5A36] bg-transparent font-semibold"
        />
        <div className="absolute top-0 right-0 px-5 h-full flex items-center bg-[#BF5A36] rounded-md">
          <FiSearch className="text-[#ffffff]" />
        </div>
      </div>

      {/* Select Tags */}
      <div className="my-3 flex gap-2">
        <select className="border-none outline-none rounded-lg py-2 px-3 text-[#BF5A36] bg-transparent font-semibold">
          <option value="category" selected disabled>
            Category
          </option>
          <option value="category">Category1</option>
          <option value="category">Category2</option>
          <option value="category">Category3</option>
          {/* Add more options */}
        </select>

        <select className="border-none outline-none rounded-lg py-2 px-3 text-[#BF5A36] bg-transparent font-semibold">
          <option value="type" selected disabled>
            Type
          </option>
          <option value="type">Selling</option>
          <option value="type">Bidding</option>
          <option value="type">Exchange</option>
          {/* Add more options */}
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
