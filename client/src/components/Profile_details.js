import React from "react";
import {
  HiMail,
  HiLocationMarker,
  HiUserCircle,
  HiPhone,
} from "react-icons/hi";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profile_details = () => {
  return (
    <>
      <div className="flex flex-col gap-4 m-2 text-left">
        <h2 className="text-[#576467] text-xl font-bold mb-10">
          Priyasha Sathyangani
        </h2>
        <div className="text-[#65BCB5]">
          <Link to="">
            <i class="bx bxs-edit-alt"></i>Edit profile{" "}
          </Link>
===========
import { Link } from 'react-router-dom';

  const Profile_details = () => {
    return (
      <>
        <div className="flex flex-col gap-4 m-2 text-left">
          <h2 className="text-[#576467] text-xl font-bold mb-10">
            Priyasha Sathyangani
          </h2>
          <div className="text-[#65BCB5]">
            <Link to="../editProfile">
              <i class="bx bxs-edit-alt"></i>Edit profile
            </Link>
          </div>
  
          <div className="flex flex-row ">
            <div className="mr-12">
              <div className="flex flex-row items-center">
                <span className="text-gray-500">
                  <HiMail />
                </span>
                <p className="mb-1">priyashasathyangani6@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <span className="text-gray-500">
                  <BsFillTelephoneFill />
                </span>
                <p className="mb-1">0712345678</p>
              </div>
            </div>
            <div className="ml-50">
              <p className="mb-1">No 18, Ganemulla, Gampaha</p>
              <p>Sri Lanka</p>
            </div>
          </div>

>>>>>>>>>>> Temporary merge branch 2
        </div>

        <div className="flex flex-row ">
          <div className="mr-12">
            <div className="flex flex-row items-center">
              <span className="text-gray-500">
                <HiMail />
              </span>
              <p className="mb-1">priyashasathyangani6@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <span className="text-gray-500">
                <BsFillTelephoneFill />
              </span>
              <p className="mb-1">0712345678</p>
            </div>
          </div>
          <div className="ml-50">
            <p className="mb-1">No 18, Ganemulla, Gampaha</p>
            <p>City</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_details;
