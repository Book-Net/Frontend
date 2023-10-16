import React, { useEffect } from "react";
import Authors_author from "../components/Authors_author";
import Transactions_author from "../components/Transactions_author";
import Complaints_author from "../components/Complaints_author";

function Sidebar_author() {

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
           <button onClick={(evt) => openCity(evt, 'authors')} id="defaultOpen"  className=" tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 border-2 border-[#ffffff] ${isActive('authors') ? 'bg-[#BF5A36] text-[#ffffff]' : ''}">
              Authors
           </button>
          </li>
          <li>
           <button
             onClick={(evt) => openCity(evt, "transactions")}
             className="tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 border-2 border-[#ffffff]"
           >
             Transactions
           </button>
          </li>
          <li>
           <button
             onClick={(evt) => openCity(evt, "complaints")}
             className="tablinks min-w-[300px] hover:bg-[#BF5A36] hover:text-[#ffffff] hover:transition hover:duration-200 px-4 py-2 border-2 border-[#ffffff]"
           >
             Complaints
           </button>
          </li>
        </ul>
      </div>
      

      <div className="w-4/5 p-10 h-auto bg-white">
        <div className="mt-12">

          <div id="authors" className="main flex justify-center ">
              <Authors_author />
          </div>

          <div id="transactions" className="main flex justify-center px-15">
            <div className="flex flex-row justify-left space-x-10">
              <Transactions_author />
            </div>
          </div>

          <div id="complaints" className="main flex justify-center px-15">
            <div className="flex flex-row justify-left space-x-10">
              <Complaints_author />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Sidebar_author;
