import axios from "axios";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../context/AppContext";

function Searchbar() {
  const { books, setBooks } = useAuth();

  const fetchBooksALL = async () => {
    try {
      const response = await axios.get("http://localhost:9000/BookList");
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      console.error();
    }
  };
  const fetchBooks = async (e) => {
    try {
      const response = await axios.get("http://localhost:9000/BookList");
      const BOOK = response.data;
      setBooks(BOOK.filter((item) => item.category === e));

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      console.error();
    }
  };
  const fetchBooksType = async (e) => {
    try {
      const response = await axios.get("http://localhost:9000/BookList");
      const BOOK = response.data;
      setBooks(BOOK.filter((item) => item.option === e));

      console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      console.error();
    }
  };

  const handleFilter = (e) => {
    if (e === "All") {
      fetchBooksALL();
    } else {
      fetchBooks(e);
      // setBooks(books.filter((item) => item.category === e));
    }
  };
  const handleFilterType = (e) => {
    if (e === "All") {
      fetchBooksALL();
    } else {
      fetchBooksType(e);
      // setBooks(books.filter((item) => item.category === e));
    }
  };

  return (
    <div className="flex justify-center mt-9">
      <div className="md:flex md:justify-between items-center space-x-2 mx-auto w-3/5 max-w-[1400px]">
        {/* Search Bar */}
        <div className="relative w-full mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 shadow rounded-lg w-full py-2 pr-10 pl-3 focus:outline-none focus:to-black border-[#BF5A36] bg-transparent font-semibold"
          />
          <div className="absolute top-0 right-0 px-5 h-full flex items-center bg-[#BF5A36] rounded-md">
            <FiSearch className="text-[#ffffff]" />
          </div>
        </div>

        {/* Select Tags */}
        <div className="my-3 justify-center flex gap-2">
          <select
            onChange={(e) => {
              let cat = e.target.value;
              handleFilter(cat);
            }}
            className="border-2 border-[#BF5A36] outline-none rounded-lg py-2 px-3 text-[#BF5A36] bg-transparent font-semibold"
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="All">All</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Educational">Educational</option>
          </select>

          <select
            onChange={(e) => {
              let cat = e.target.value;
              handleFilterType(cat);
            }}
            className="border-2 border-[#BF5A36] outline-none rounded-lg py-2 px-3 text-[#BF5A36] bg-transparent font-semibold"
          >
            <option value="type" selected disabled>
              Type
            </option>
            <option value="All">All</option>
            <option value="Sell">Sell</option>
            <option value="Bid">Bid</option>
            <option value="Exchange">Exchange</option>
            <option value="Donate">Donate</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
