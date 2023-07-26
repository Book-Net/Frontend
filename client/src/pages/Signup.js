import React from "react";
import login from "../assets/login.png";

function Signup() {
  return (
    // <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
    <div className="flex rounded-2xl relative justify-between items-center bg-[#F2CB9E] shadow-[#c76f4f] shadow-md max-w-[1400px] min-h-[70vh]  max-h-[100%] w-3/5 m-auto md:p-5">
      <div className="bg-[#F2CB9E] rounded-2xl w-2/5 md:block hidden">
        <div className="relative">
          <p className=" font-mansalva md:text-4xl sm:text-3xl text-[#4F6D7A] p-5">
            Connect, Share and Trade Your Favourite Reads.....
          </p>
        </div>
        <div className="">
          <img src={login} alt="" className=" w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F5F5F5] md:absolute md:right-0 md:top-0 md:bottom-0 shadow-md rounded-2xl md:w-3/5 w-full p-3">
        <form action="" className="w-full">
          <p className=" font-roboto md:text-4xl sm:text-2xl text-[#4F6D7A] my-6">
            Sign up
          </p>
          <input
            type="text"
            className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
            placeholder="Name"
            required
          />
          <br />
          <input
            type="email"
            className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
            placeholder="E-mail"
            required
          />
          <br />
          <input
            type="password"
            className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
            placeholder="Password"
            required
          />
          <br />
          <input
            type="password"
            className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
            placeholder="Re-Enter Password"
            required
          />{" "}
          <br />
          <button type="submit" className=" pb-5 my-5">
            Signup{" "}
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Signup;
