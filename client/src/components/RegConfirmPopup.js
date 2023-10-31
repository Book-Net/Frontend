import React from "react";
import checked from "../assets/checked.svg";

function RegConfirmPopup() {
  return (
    <div className="flex flex-col items-center w-full max-w-md p-4 mx-auto rounded-lg shadow-md bg-white-500">
      <h1 className="text-[#353E53] text-center mb-4 font-semibold">Registration Completed Successfully</h1>
      
      <img className="w-10 h-10 mb-4" src={checked} alt="Checkmark"></img>
      
      <button className="bg-[#bf5a36] text-white font-bold py-2 px-4 rounded-md">
        DONE
      </button>
    </div>
  );
}

export default RegConfirmPopup;
