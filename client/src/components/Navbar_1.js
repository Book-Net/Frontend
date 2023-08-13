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
    <div className="navbar fixed top-5 left-[50%] translate-x-[-50%] right-0 max-w-[1400px] w-full">
      <div className={`md:flex justify-between items-start bg-[#F5F5F5] py-4 `}>
        <div className="md:h-[80px] min-w-280px md:ml-[30px] ">
          <div>
            <img
              className="h-[90px] px-5 mx-auto md:flex justify-center items-center"
              src={logo}
              alt=""
            />
          </div>

          <div
            className={`md:hidden z-500 absolute right-5 top-[30px] text-[#885F53]`}
            onClick={handleToggle}
          >
            <h3 className="text-4xl">{open ? <RiCloseFill /> : <HiMenu />}</h3>
          </div>
        </div>

        <div
          className={`transition ease-in-out duration-300 absolute text-start bg-[#F5F5F5] md:flex items-center md:relative ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <ul className="md:flex">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="mx-[20px] my-3 min-w-[80px] hover:scale-110 transition-all duration-300"
                >
                  <Link
                    to={link.to}
                    className="font-roboto text-[#555555] font-semibold block md:inline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-[20px] my-3">
            <ul className="md:flex md:mr-[30px]">
              <li className="my-2 md:my-0 md:ml-4">
                <Link
                  to="/"
                  className="font-roboto shadow-md md:mx-[20px] px-[15px] py-[8px] font-semibold rounded-md bg-[#4F6D7A] text-[#FFFFFf] block md:inline"
                >
                  Login
                </Link>
              </li>
              <li className="my-2 md:my-0">
                <Link
                  to="/"
                  className="font-roboto shadow-md px-[15px] py-[8px] font-semibold rounded-md bg-[#F2CB9E] text-[#885F53] block md:inline"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_1;
