import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    axios.get("/");
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={loginUser}>
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          LOG IN
        </p>
        <br />
        <input
          type="email"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="E-mail"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br />
        <p className="my-2">
          Don’t have an account?
          <span>
            <Link to="/signup" className=" underline text-[#BF5A36] font-bold">
              {" "}
              Register{" "}
            </Link>
          </span>
          here
        </p>
        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type="submit"
        >
          LOG IN
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
