import React from "react";
import Button from "../components/Button";

function OtpEnter() {
  return (
    <div className="w-full">
      <form action="">
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          OTP Confirmation
        </p>
        <p className=" font-roboto text-md text-[#4F6D7A] my-6 font-bold">
          Enter the OTP that has sent to <br /> your Mobile Number
        </p>
        <input
          type="number"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="OTP"
          required
        />
        <br />
        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type="submit"
        >
          VERIFY
        </Button>
      </form>
    </div>
  );
}

export default OtpEnter;
