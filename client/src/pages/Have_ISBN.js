import React from "react";
import Button from "../components/Button";


function Have_ISBN() {
  return (
    <div className="bg-[#ffffff] py-10 w-[850px] m-auto rounded-lg">
          <p className="topics text-[#4F6D7A] text-3xl text-center font-bold ">Have an ISBN?</p>
      <div className="flex justify-center gap-8 mt-14">
        <Button className="bg-[#4F6D7A] text-[#f2cb9e] py-20 text-2xl font-semibold w-72">Yes. I have an ISBN</Button>
        <Button className="bg-[#F2CB9E] text-[#4F6D7A] py-20 text-2xl font-semibold w-72">No. I don't have an ISBN</Button>
      </div>

    </div>
  );
}

export default Have_ISBN;
