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

        <div className="mt-10 w-full md:max-w-screen-lg flex justify-star">
          <Profile_navbar />
        </div>

        <div className="mt-5 p-5 w-full md:max-w-screen-lg md:flex justify-center gap-6 mx-auto">
          {<Profile_card title="Sales" />}
          {<Profile_card title="Bids" />}
          {<Profile_card title="Swaps" />}
          {<Profile_card title="Donates" />}
        </div>

        <div className="mt-10 w-full md:max-w-screen-lg flex justify-star">
          <Link to={"/have_isbn"}>
            <Button
              className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
              type=""
            >
              Add Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
