import React from "react";
import Profile_details from "../components/Profile_details";
import book_bg_img from "../assets/book_bg_img.png";
import image1 from "../assets/image1.png";
import Button from "../components/Button";
import Profile_navbar from "../components/Profile_navbar";
import Profile_card from "../components/Profile_card";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#F3DEC9] shadow-lg shadow-[#F3DEC9] ">
        <img src={book_bg_img} alt="" />
      </div>
      <div className="w-full p-5 md:max-w-screen-lg">
        <div
          className="absolute transform top-1/2 left-25 -translate-x-1/8 -translate-y-1/6"
          style={{ zIndex: 1 }}
        >
          <img
            src={image1}
            alt=""
            className="w-32 h-32 max-w-full border border-gray-300 rounded-full"
          />
<<<<<<<<< Temporary merge branch 1
        </div>
=========
      </div>
>>>>>>>>> Temporary merge branch 2

        <div className="flex w-full mt-10 md:max-w-screen-lg justify-star">
          <Profile_details />
        </div>

        <div className="justify-center w-full gap-6 p-5 mx-auto mt-5 md:max-w-screen-lg md:flex">
          {<Profile_card title="Sales" desc="Add book for sell" btn="Add" />}
          {<Profile_card title="Bids" desc="Add book for bid" btn="Add" />}
          {<Profile_card title="Swaps" desc="Add book for swap" btn="Add" />}
          {
            <Profile_card
              title="Donates"
              desc="Add book for donate"
              btn="Add"
            />
          }
        </div>
      </div>
    </div>
  )
}

export default Profile