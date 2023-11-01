import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import author from "../assets/author.jpg";
import PostActions from "./PostAction";
import axios from "axios";

function Post({ title, desc }) {
  const currentTime = new Date(); // Create a Date object representing the current date and time

  const [details, setDetails] = useState("");

  useEffect(() => {
    const myDetails = async () => {
      try {
        const response = await axios.get("/me");
        setDetails(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    myDetails();
  }, []);

  // Format the date and time as a string (you can customize the format)
  const formattedDateTime = currentTime.toLocaleString();

  return (
    <div className="bg-[#f5f5f5] py-2 mt-8  shadow-md hover:shadow-lg transition mx-auto rounded-md">
      <div className="flex">
        <img
          className="author-pic w-10 h-10 rounded-full ml-5 mt-[9px] "
          src={author}
          alt="Author"
        />
        <div className="mt-2">
          <p className="topics text-2xl text-[#BF5A36] text-left font-semibold ml-8 ">
            {details.userName}
          </p>
          <p className="topics text-[#4F6D7A] text-[16px] text-left font-semibold ml-8 ">
            {title}
          </p>
          <p className="topics text-[#4F6D7A] text-[11px] text-left font-normal ml-8 ">
            {formattedDateTime}
          </p>
        </div>
      </div>
      <div className="bg-[#F2CB9E] bg-opacity-60 py-10 mt-5 mb-5   mx-auto">
        <p className="topics text-[#BF5A36] text-[40px] text-center font-semibold ml-8 ">
          {desc}
        </p>
      </div>
      <PostActions />
    </div>
  );
}

export default Post;
