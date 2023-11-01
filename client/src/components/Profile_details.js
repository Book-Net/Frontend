import React from "react";
import {
  HiMail,
  HiLocationMarker,
  HiUserCircle,
  HiPhone,
} from "react-icons/hi";
// import { BsFillTelephoneFill } from "react-icons/bs";
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
        <h2 className="text-[#576467] text-xl font-bold mb-4">
          {details.userName}
        </h2>
        <div className="text-[#BF5A36]">
          <Link to="../editProfile" className="font-bold">
            <i class="bx bxs-edit-alt"></i>➡ Customize profile 🎨
          </Link>
        </div>
        <div className="text-[#BF5A36]">
          <Link to="../becomeAuthor" className="font-bold">
            <i class="bx bxs-edit-alt "></i>➡ Become Author 🧞‍♂️
          </Link>
        </div>

        <div className="flex flex-row ">
          <div className="mr-12">
            <div className="flex flex-row items-center">
              <span className="text-gray-500">
                <HiMail />
              </span>
              <p className="mb-1 ml-1">{"User Email: " + details.email}</p>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-gray-500">
                <HiUserCircle />
              </span>
              <p className="mb-1 ml-1">{"User Type: " + details.userType}</p>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-gray-500">
                <HiPhone />
              </span>
              <p className="mb-1 ml-1">{"Phone Number: " + details.phone}</p>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-gray-500">
                <HiLocationMarker />
              </span>
              <p className="mb-1 ml-1">{"User Address: " + details.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_details;
