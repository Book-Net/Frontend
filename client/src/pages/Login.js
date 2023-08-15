import React, { useState } from "react";
import login from "../assets/login.png";
import LoginForm from "../components/LoginForm";

function Login() {
  const [signInOrReg, setSignOrReg] = useState(true); //change this after authentication done

  return (
    <div className="flex rounded-2xl relative justify-between items-center md:bg-[#F2CB9E] md:shadow-[#c76f4f] md:shadow-md max-w-[1400px] min-h-[70vh]  max-h-[100%] w-3/5 m-auto md:p-5">
      <div className="bg-[#F2CB9E] rounded-2xl w-2/5 md:block hidden ">
        <div className="relative">
          <p className=" font-mansalva md:text-4xl text-[#4F6D7A] p-5 fnb">
            Connect, Share and Trade Your Favourite Reads.....
          </p>
        </div>
        <div className="">
          <img src={login} alt="" className=" w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#F5F5F5] shadow-[#c76f4f] md:absolute md:right-0 md:top-0 md:bottom-0 shadow-md rounded-2xl md:w-3/5 w-full p-3">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
