import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Have_ISBN() {
  return (
    <div className="bg-[#ffffff] py-10 w-[850px] m-auto rounded-lg">
      <p className="topics text-[#BF5A36] text-3xl text-center font-bold ">
        Have an ISBN?
      </p>
      <div className="flex justify-center gap-8 mt-14">
        <Link to="/add_book">
          <Button className="bg-[#4F6D7A] text-[#f2cb9e] py-20 text-2xl font-semibold w-72 h-72">
            Yes. I have an ISBN
          </Button>
        </Link>
        <Link to="/add_book_2">
          <Button className="bg-[#F2CB9E] text-[#4F6D7A] py-20 text-2xl font-semibold w-72 h-72">
            No. I don't have an ISBN
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Have_ISBN;
