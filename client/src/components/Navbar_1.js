import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/booknet_logo.png";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/", text: "About Us" },
  { to: "/", text: "Options" },
  { to: "/", text: "Contact Us" },
];

function Navbar_1() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="navbar fixed top-5 left-0 right-0 w-full">
      <div
        className={`md:flex justify-between items-center bg-[#F5F5F5] py-4 transition-all duration-300`}
      >
        <div className="md:h-[80px] min-w-280px md:ml-[30px] ">
          <div>
            <img
              className="h-[80px] px-5 mx-auto md:flex justify-center items-center"
              src={logo}
              alt=""
            />
          </div>

          <div
            className={`md:hidden z-500 absolute right-5 top-[30px] text-[#885F53] transition-all duration-300`}
            onClick={handleToggle}
          >
            <h3 className="text-4xl">{open ? <HiMenu /> : <RiCloseFill />}</h3>
          </div>
        </div>

        <div
          className={`duration-300 transition-all absolute text-start md:flex items-center md:relative ease-in-out ${
            open ? "left-[-100%]" : ""
          }`}
        >
          <div>
            <ul className="md:flex">
              {navLinks.map((link, index) => (
                <li key={index} className="mx-[50px] my-3 min-w-[80px]">
                  <Link
                    to={link.to}
                    className="font-roboto text-[#555555] font-semibold"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-[50px]">
            <ul className="md:flex  md:mr-[30px]">
              <li className="my-7">
                <Link
                  to="/"
                  className="font-roboto shadow-md md:mx-[20px] px-[15px] py-[8px] font-semibold rounded-md bg-[#4F6D7A] text-[#FFFFFf]"
                >
                  Login
                </Link>
              </li>
              <li className="my-7 ">
                <Link
                  to="/"
                  className="font-roboto shadow-md px-[15px] py-[8px] font-semibold rounded-md bg-[#F2CB9E] text-[#885F53]"
                >
                  Signup
                </Link>
              </li>
            </ul>
            {/* comment 1234 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_1;
