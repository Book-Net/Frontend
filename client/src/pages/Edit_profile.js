import React from "react";
import image1 from "../assets/image1.png";
import book_bg_img from "../assets/book_bg_img.png";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

  const Edit_profile = () => {
    return (
      <>
        <div className="justify-center min-h-screen bg-gray-100 items-left ">

          
         <div className="relative w-full p-20 md:max-w-screen-lg">

          <Link to="/profile" className="absolute text-gray-600 top-4 left-4 ">
            &larr; Back to Profile
          </Link>
          <div
            className="absolute transform top-1/7 right-1/3 translate-x-1/8 -translate-y-1/6"
            style={{ zIndex: 1 }}
          >
          <img
           src={image1}
           alt=""
           className="w-40 h-40 max-w-full border border-gray-300 rounded-full"
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
  
  export default Edit_profimport React from "react";
// import image1 from "../assets/image1.png";
import book_bg_img from "../assets/book_bg_img.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { async } from "q";

const Edit_profile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const update_pic = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/update_pro_img", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      navigate("/profile");
    } catch (error) {}
  };

  const [data, setData] = useState({
    email: details.email,
    name: details.userName,
    phone: details.phone,
    address: details.address,
    country: details.country,
  });

  const handleEditData = async (e) => {
    e.preventDefault();
    console.log(data);
    const { name, phone, address, country } = data;
    try {
      const response = await axios.post(
        "/edit_details",
        {
          name,
          phone,
          address,
          country,
        },
        { withCredentials: true }
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        // setUser(response.data.token);
        // console.log(localStorage.getItem("user"));
        // setData({
        //   email: "",
        //   password: "",
        // });
        // Redirect or perform other actions based on login success
        navigate("/profile", { replace: true });
        toast.success(`User profile update successful!`);
      }
    } catch (error) {
      toast.error("Error occurred. Try again later");
    }
  };

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

  const [img, setImg] = useState("");

  useEffect(() => {
    const myImg = async () => {
      try {
        const response = await axios.get("/me");
        setImg(response.data.user.img);
        console.log(response.data.user.img);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    myImg();
  }, []);

  return (
    <>
      <div className="justify-center min-h-screen bg-gray-100 items-left ">
        <div className="relative w-full p-20 md:max-w-screen-lg">
          <Link to="/profile" className="absolute text-gray-600 top-4 left-4 ">
            &larr; Back to Profile
          </Link>
          <div className="flex flex-row items-center">
            <div
              className="absolute transform top-1/7 left-1/3 translate-x-1/8 -translate-y-1/6"
              style={{ zIndex: 1 }}
            >
              <img
                src={`http://localhost:9000/give_file/${img}`}
                alt=""
                className="object-cover w-40 h-40 max-w-full border border-gray-300 rounded-full"
              />
            </div>
            <div className="absolute right-0">
              <input
                type="file"
                name="file"
                accept="image/*"
                required
                multiple
                onChange={handleFileChange}
              />
              <Button
                className="bg-[#BF5A36] text-white mt-3 font-bold "
                type="submit"
                onClick={update_pic}
              >
                Update Image
              </Button>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center mt-10">
          <form
            action=""
            class="grid grid-cols-3 gap-4 w-3/5 p-20 bg-gray-50 rounded-md shadow-md"
          >
            <label class="col-span-1 text-left pr-4 self-center">Name</label>
            <input
              type="text"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder={details.userName}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />

            {/* <label class="col-span-1 text-left pr-4 self-center">Email</label>
            <input
              type="email"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder={details.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            /> */}

            <label class="col-span-1 text-left pr-4 self-center">
              Telephone
            </label>
            <input
              type="tel"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder={details.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              required
            />

            <label class="col-span-1 text-left pr-4 self-center">Address</label>
            <input
              type="text"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder={details.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              required
            />

            {/* <label class="col-span-1 text-left pr-4 self-center">Country</label>
            <input
              type="text"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder={details.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              required
            /> */}

            {/* <label class="col-span-1 text-left pr-4 self-center">
              Password
            </label>
            <input
              type="password"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder="Password"
              required
            />

            <label class="col-span-1 text-left pr-4 self-center">
              Confirm Password
            </label>
            <input
              type="password"
              class="col-span-2 pl-4 py-3 shadow-md my-1 rounded-md placeholder-[#BF5A36]"
              placeholder="Re-Enter Password"
              required
            /> */}

            <div class="col-span-3 flex justify-end">
              <button
                class="bg-[#BF5A36] text-white font-bold px-6 py-2 rounded"
                type="submit"
                onClick={handleEditData}
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
