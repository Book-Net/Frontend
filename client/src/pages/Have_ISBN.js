import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";


function Have_ISBN() {
  return (
    <div className="bg-[#ffffff] py-10 w-[850px] m-auto rounded-lg">
          <p className="topics text-[#BF5A36] text-3xl text-center font-bold ">Have an ISBN?</p>
      <div className="flex justify-center gap-8 mt-14">
        <Button className="bg-[#4F6D7A] text-[#f2cb9e] py-20 text-2xl font-semibold w-72"><Link
                  to="/AddBook_Main">Yes. I have an ISBN</Link></Button>
        <Button className="bg-[#F2CB9E] text-[#4F6D7A] py-20 text-2xl font-semibold w-72"><Link
                  to="/AddBook_Main_2">No. I don't have an ISBN</Link></Button>
      </div>

    </div>
  );
}

export default Have_ISBN;
