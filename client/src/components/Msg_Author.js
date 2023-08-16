import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


function Msg_Author () {
    return (
    <div className="bg-[#f5f5f5] py-11 mt-14 shadow-md hover:shadow-lg transition mx-auto rounded-md">
    <p className="topics text-[#4F6D7A] text-2xl text-center font-medium mb-6">Message Author</p>
    <input
          type="email"
          className="pl-2 py-3 shadow-xl my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Subject"
          required
           />
    <input
          type="email"
          className="pl-2 h-36 shadow-md mt-3 rounded-md placeholder-[#BF5A36] pla w-3/5"
          placeholder="Message"
          required
           />
           <br></br>
            <Button
            className="bg-[#BF5A36] text-white text-[14px] mt-[20px] font-medium px-16"
            type="submit"
            >
            Send
        </Button>
    </div>
    );
}

export default Msg_Author;
