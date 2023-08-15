import React from "react";
import book from "../assets/book1.png";
import Button from "./Button";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function BookCard() {
  return (
    <div className="md:flex h-[350px] bg-[#F5F5F5] shadow-md hover:shadow-lg transition rounded-md max-w-[300px] max-h-[230px]">
      <div className="p-3 w-full min-w-[140px]">
        <img
          src={book}
          className="h-full object-cover w-full rounded-md"
          alt=""
          srcset=""
        />
      </div>
      <div className="p-3 w-full max-w-[160px]">
        <div className="ratings flex text-yellow-500 mb-2">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div>
          <p className="font-bold mb-2 w-full overflow-hidden text-md text-left text-[#4F6D7A]">
            The Great Gatsby
          </p>
          <p className="text-left text-sm mb-2 text-[#4F6D7A]">
            F.Scott Fitzgerald
          </p>
          <p className="text-left text-xl font-semibold text-[#BF5A36] mb-4">
            Rs. <span>500</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
