import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { userName, email, password, rePassword } = data;
    try {
      const response = await axios.post(
        "/signup",
        {
          userName,
          email,
          password,
          rePassword,
        },
        { withCredentials: true }
      );

      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          name: "",
          email: "",
          password: "",
          rePassword: "",
        });
        toast.success("Registration successful. Welcome!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={registerUser}>
        <p className="font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          SIGN UP
        </p>

        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name"
          onChange={(x) => setName(x.target.value)}
          required
          value={data.userName}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, userName: e.target.value }))
          }
        />
        <br />

        <input
          type="email"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="E-mail"
          onChange={(x) => setEmail(x.target.value)}
          required
          value={data.email}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, email: e.target.value }))
          }
        />
        <br />

        <input
          type="password"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Password"
          onChange={(x) => setPword(x.target.value)}
          required
          value={data.password}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, password: e.target.value }))
          }
        />
        <br />

        <input
          type="password"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Re-Enter Password"
          onChange={(x) => setPword(x.target.value)}
          required
          value={data.rePassword}
          onChange={(e) =>
            setData((prevData) => ({
              ...prevData,
              rePassword: e.target.value,
            }))
          }
        />
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
