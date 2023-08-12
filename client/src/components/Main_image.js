import React from "react";
import main_image from "../assets/main_image.png";

function Main_image() {
  return (
    <div className="max-w-[1200px] hidden md:flex w-full relative md:justify-between items-center mx-auto max-h-[50%] bg-[#F2CB9E] rounded-md">
      <div className="flex-1 py-8 px-10">
        {" "}
        {/* Updated */}
        <p className="text-4xl lg:text-6xl font-mansalva">
          Connect, Share, and Trade Your Favourite Reads.....
        </p>
      </div>
      <div className="flex-1">
        {" "}
        {/* Updated */}
        <img src={main_image} alt="" className="w-3/4 m-auto" />
      </div>
    </div>
  );
}

export default Main_image;
