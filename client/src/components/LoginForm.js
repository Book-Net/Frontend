import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AppContext";

function LoginForm() {
  const { setUser, user } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setUser(response.data.token);
        console.log(localStorage.getItem("user"));
        setData({
          email: "",
          password: "",
        });
        // Redirect or perform other actions based on login success
        navigate("/", { replace: true });
        toast.success(`Welcome! Login successful.`);
      }
    } catch (error) {
      toast.error("Error occurred. Try again later");
    }
  };

  const Test = async (e) => {
    e.preventDefault();
    // console.log(user);
    const token = localStorage.getItem("user");
    const config = {
      headers: { "x-access-token": token, withCredentials: true },
    };

    try {
      const response = await axios.post("/test", null, config);
      // Handle the response here
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      toast.error("Error occurred while testing.");
    }
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={loginUser}>
        <p className="font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
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
            <Link to="/signup" className="underline text-[#BF5A36] font-bold">
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

        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type=""
          onClick={Test}
        >
          hi
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
