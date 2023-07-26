import React from "react";
import Button from "../components/Button";

function SignupForm() {
  return (
    <div className="w-full">
      <form action="">
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          SIGN UP
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
        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type="submit"
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
