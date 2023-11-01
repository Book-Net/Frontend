import React from "react";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile_details = () => {
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

  return (
    <>
      <div className="flex flex-col gap-4 m-2 text-left">
        <h2 className="text-[#576467] text-xl font-bold mb-10">
          {details.userName}
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
              <p className="mb-1">{details.email}</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <span className="text-gray-500">
                <BsFillTelephoneFill />
              </span>
              <p className="mb-1">{details.phone}</p>
            </div>
          </div>
          <div className="ml-50">
            <p className="mb-1">{details.address}</p>
            <p>{details.country}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_details;
