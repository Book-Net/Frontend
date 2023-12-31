import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/booknet_logo.png";
import image1 from "../assets/image1.png";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";
import { BsBellFill } from "react-icons/bs";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/booklist", text: "Market place" },
  { to: "/", text: "About Us" },
  { to: "/", text: "Options" },
  { to: "/", text: "Contact Us" },
];

function Navbar_2() {
  const [open, setOpen] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-[10px] left-[50%] translate-x-[-50%] right-0 max-w-[1400px] w-full z-[1000]`}
    >
      <div
        className={`md:flex md:justify-between items-center h-[70px] pt-2 ${
          scrolled ? "bg-[#F5F5F5] opacity-95" : "bg-[#F5F5F5]"
        }`}
      >
        <div className="md:h-[70px] min-w-280px md:ml-[30px] ">
          <div>
            <img
              className="h-[70px] px-5 mx-auto md:flex justify-center items-center"
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
          className={`transition ease-in-out duration-300  absolute text-start md:flex items-center md:justify-between bg-[#F5F5F5] opacity-95 md:bg-transparent md:relative ${
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
            <ul className="flex md:mr-[30px] justify-start items-center">
              <li className="my-2 md:my-0 md:mx-3">
                <Link
                  to="/"
                  className="font-roboto px-[15px] py-[8px] text-2xl block md:inline"
                >
                  <BsBellFill />
                </Link>
              </li>{" "}
              <li className="my-2 md:my-0 md:mx-3 ">
                <Link
                  to="/"
                  className="font-roboto px-[15px] py-[8px] text-2xl block md:inline"
                >
                  <GrLogout />
                </Link>
              </li>
              <li className="my-2 md:my-0">
                <Link to="/" className="px-[15px] py-[8px] block ">
                  <img
                    src={image1}
                    alt=""
                    className=" w-[60px] rounded-full border-4 shadow-lg border-[#bf5a36]"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar_2;
