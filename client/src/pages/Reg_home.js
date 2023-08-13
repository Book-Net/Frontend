import React from "react";
import Searchbar from "../components/Searchbar";
import BookCard from "../components/BookCard";

function Reg_home() {
  return (
    <div className=" bg-gray-100">
      <div className=" p-6 rounded-lg g w-2/3 mx-auto flex gap-9">
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default Reg_home;
