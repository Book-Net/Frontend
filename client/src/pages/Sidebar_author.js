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
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      };


  return (

<div>
<div class="font-roboto text-xl text-[#000000] mx-auto font-semibold block md:w-[1400px] md:flex">
  <button onClick={(evt) => openCity(evt, 'authors')} id="defaultOpen"  className=" tablinks my-1 min-w-[300px] bg-[#D9D9D9] hover:bg-[#BF5A36] text-[#ffffff] hover:transition hover:duration-200 rounded-tr-lg px-4 py-2 border-b-2 border-[#BF5A36]">
     Authors
  </button>
  <button
    onClick={(evt) => openCity(evt, "transactions")}
    className="tablinks my-1 min-w-[300px] bg-[#D9D9D9] hover:bg-[#BF5A36] text-[#ffffff] hover:transition hover:duration-200 rounded-tr-lg rounded-tl-lg px-4 py-2 border-b-2 border-[#BF5A36]"
  >
    Transactions
  </button>
  <button
    onClick={(evt) => openCity(evt, "complaints")}
    className="tablinks my-1 min-w-[300px] bg-[#D9D9D9] hover:bg-[#BF5A36] text-[#ffffff] hover:transition hover:duration-200 rounded-t-lg px-4 py-2 border-b-2 border-[#BF5A36]"
  >
    Complaints
  </button>
  <button
    onClick={(evt) => openCity(evt, "logout")}
    className="tablinks my-1 min-w-[300px] bg-[#D9D9D9] hover:bg-[#BF5A36] text-[#ffffff] hover:transition hover:duration-200 rounded-t-lg px-4 py-2 border-b-2 border-[#BF5A36]"
  >
    Logout
  </button>

</div>
<div className="mt-12">

  <div id="authors" className="main flex justify-center">
    <div className="flex flex-row justify-center space-x-8">
      <Authors_author />
    </div>
  </div>

  <div id="transactions" className="main flex justify-center">
    <div className="flex flex-row justify-center space-x-8">
      <Transactions_author />
    </div>
  </div>

  <div id="complaints" className="main flex justify-center">
    <div className="flex flex-row justify-center space-x-8">
      <Complaints_author />
    </div>
  </div>

  <div id="logout" className="main flex justify-center">
    <div className="flex flex-row justify-center space-x-8">
      <Logout />
    </div>
  </div>

</div>
</div>
  );
}

export default Sidebar_author;
