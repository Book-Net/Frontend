import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from 'axios';


function SignupForm() {

  const [name, setName] = useState();
  const [pword, setPword] = useState();
  const [email, setEmail] = useState();
  
  const submit_signup = (y) => {
    y.preventDefault();
    axios.post('http://127.0.0.1:3002/db_add',{name, email, pword})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="w-full">
      <form onSubmit={submit_signup}>
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          SIGN UP
        </p>

        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name"
          onChange={(x) => setName(x.target.value)}
          required
        />
        <br />

        <input
          type="email"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="E-mail"
          onChange={(x) => setEmail(x.target.value)}
          required
        />
        <br />

        <input
          type="password"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Password"
          onChange={(x) => setPword(x.target.value)}
          required
        />
        <br />

        <input
          type="password"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Re-Enter Password"
          onChange={(x) => setPword(x.target.value)}
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
