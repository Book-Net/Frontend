import React from "react";
import image1 from "../assets/image1.png";
import Button from "../components/Button";

  const Edit_profile = () => {
    return (
      <>
        <div className="bg-gray-100 min-h-screen justify-center items-left ">


          <div
            className=" top-1/2 left-60 transform -translate-x-1/8 -translate-y-1/6"
            style={{ zIndex: 1 }}
          >
           <img
             src={image1}
             alt=""
             className="w-32 h-32 rounded-full max-w-full border border-gray-300"
            />
            <input type="file"/>
          </div>



       <form action="" text-align-left>
        
        Name
        <input
          type="text"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Priyasha Sathyangani"
          required
        />
        <br />
        Email
        <input
          type="email"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="priyashasathyangani6@gmail.com"
          required
        />
        <br />
        Telephone
        <input
          type="number"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="0712345678"
          required
        />
        <br />
        Address
        <input
          type="text"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="No 18, Ganemulla, Gampaha"
          required
        />
        <br />
        Country
        <input
          type="text"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Sri Lanka"
          required
        />
        <br />
        Password
        <input
          type="password"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Password"
          required
        />
        <br />
        Confirm Password
        <input
          type="password"
          className="pl-4 py-3 shadow-md my-3 mx-6 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Re-Enter Password"
          required
        />{" "}
        <br />
        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type="submit"
        >
          Save
        </Button>
      </form>

        </div>
      </>
    );
  };
  
  export default Edit_profile;