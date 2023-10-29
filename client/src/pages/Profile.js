import React from "react";
import Profile_details from "../components/Profile_details";
import book_bg_img from "../assets/book_bg_img.png";
import image1 from "../assets/image1.png";
import Profile_navbar from "../components/Profile_navbar";
import { Link } from 'react-router-dom';
import Profile_card from "../components/Profile_card";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-[#F3DEC9] shadow-lg shadow-[#F3DEC9] ">
        <img src={book_bg_img} alt="" />
      </div>
      <div className="p-5 w-full md:max-w-screen-lg">
        <div
          className="absolute top-1/2 left-25 transform -translate-x-1/8 -translate-y-1/6"
          style={{ zIndex: 1 }}
        >
          <img
            src={image1}
            alt=""
            className="w-32 h-32 rounded-full max-w-full border border-gray-300"
          />
          </div>

        <div className="mt-10 w-full md:max-w-screen-lg flex justify-star">
          <Profile_details />
        </div>

        <div className="mt-5 p-5 w-full md:max-w-screen-lg md:flex justify-center gap-6 mx-auto">
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
  );
};

export default Profile;
>>>>>>>>> Temporary merge branch 2
