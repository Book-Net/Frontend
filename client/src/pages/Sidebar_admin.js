import React, { useEffect } from "react";
import Dashboard_admin from "../components/Dashboard_admin";
import Authors_admin from "../components/Authors_admin";
import Transactions_admin from "../components/Transactions_admin";
import Complaints_admin from "../components/Complaints_admin";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiBallPenLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { PiWarningBold } from "react-icons/pi";

function Sidebar_admin() {

    useEffect(() => {
        document.getElementById("defaultOpen").click();
      }, []);
    
      const openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("main");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" bg-[#BF5A36] text-[#ffffff]", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " bg-[#BF5A36] text-[#ffffff]";
      };


  return (

    <div className="flex">
      <div className="w-1/5 mt-10 m-7">
        <ul class="font-roboto text-xl text-[#000000] mx-auto font-semibold block bg-gray-200 h-auto;">
          
          <li>
           <button onClick={(evt) => openCity(evt, 'dashboard')} id="defaultOpen"  className=" tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 flex border-2 border-[#ffffff] ${isActive('dashboard') ? 'bg-[#BF5A36] text-[#ffffff]' : ''}">
             <span className="ml-6 mt-1"><LuLayoutDashboard /></span> <p className="ml-6">Dashboard</p>
           </button>
          </li>
          <li>
           <button
             onClick={(evt) => openCity(evt, "authors")}
             className="tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 flex border-2 border-[#ffffff]"
           >
             <span className="ml-6 mt-1"><RiBallPenLine /></span> <p className="ml-6">Authors</p>
           </button>
          </li>
          <li>
           <button
             onClick={(evt) => openCity(evt, "transactions")}
             className="tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 flex border-2 border-[#ffffff]"
           >
             <span className="ml-6 mt-1"><GrTransaction /></span> <p className="ml-6">Transactions</p>
           </button>
          </li>
          <li>
           <button
             onClick={(evt) => openCity(evt, "complaints")}
             className="tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 flex border-2 border-[#ffffff]"
           >
             <span className="ml-6 mt-1"><PiWarningBold /></span> <p className="ml-6">Complaints</p>
           </button>
          </li>
        </ul>
      </div>
      

      <div className="w-screen p-10 h-auto bg-white">
        <div className="mt-12">

          <div id="dashboard" className="main flex flex-row justify-center px-15">
              <Dashboard_admin />
          </div>

          <div id="authors" className="main flex justify-center ">
              <Authors_admin />
          </div>

          <div id="transactions" className="main flex flex-row space-x-10 justify-left px-15">
              <Transactions_admin />
          </div>

          <div id="complaints" className="main flex flex-row justify-left space-x-10 px-15">
              <Complaints_admin />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar_admin;
