import React from "react";
import image1 from "../assets/image1.png";
import book_bg_img from "../assets/book_bg_img.png";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

  const Edit_profile = () => {
    return (
      <>
        <div className="bg-gray-100 min-h-screen justify-center items-left ">

          
         <div className="p-20 w-full md:max-w-screen-lg relative">

          <Link to="/profile" className="text-gray-600 absolute top-4 left-4 ">
            &larr; Back to Profile
          </Link>
          <div
            className="absolute top-1/7 right-1/3 transform translate-x-1/8 -translate-y-1/6"
            style={{ zIndex: 1 }}
          >
          <img
           src={image1}
           alt=""
           className="w-40 h-40 rounded-full max-w-full border border-gray-300"
          />
          </div>
          <input type="file" className="absolute top-3/4 left-3/4" />
         </div>

          <div class="flex justify-center items-center h-screen">
            <form action="" class="grid grid-cols-3 gap-4 w-3/5 p-20 bg-gray-50 rounded-md shadow-md">
              <label class="col-span-1 text-left pr-4 self-center">Name</label>
              <input
                type="text"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="Priyasha Sathyangani"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Email</label>
              <input
                type="email"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="priyashasathyangani6@gmail.com"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Telephone</label>
              <input
                type="text"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="0712345678"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Address</label>
              <input
                type="text"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="No 18, Ganemulla, Gampaha"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Country</label>
              <input
                type="text"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="Sri Lanka"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Password</label>
              <input
                type="password"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="Password"
                required
              />
          
              <label class="col-span-1 text-left pr-4 self-center">Confirm Password</label>
              <input
                type="password"
                class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
                placeholder="Re-Enter Password"
                required
              />
          
              <div class="col-span-3 flex justify-end">
                <button
                  class="bg-[#BF5A36] text-white font-bold px-6 py-2 rounded"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
        </div>

        </div>
      </>
    );
  };
  
  export default Edit_profile;