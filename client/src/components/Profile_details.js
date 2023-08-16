import React from "react";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

  const Profile_details = () => {
    return (
      <>
        <div className="flex flex-col gap-4 m-2 text-left">
          <h2 className="text-[#576467] text-xl font-bold mb-10">
            Priyasha Sathyangani
          </h2>
          <div className="text-[#65BCB5]">
            <a href="#">
              <i class="bx bxs-edit-alt"></i>Edit profile{" "}
            </a>
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