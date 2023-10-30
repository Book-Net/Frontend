import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Profile_dashboard from "../pages/Profile_dashboard";
import Profile_purchase_history from "../pages/Profile_purchase_history";
import Profile_favourites from "../pages/Profile_favourites";

function Profile_navbar() {
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
      tablinks[i].className = tablinks[i].className.replace(
        "border-[#BF5A36] rounded-tr-lg rounded-tl-lg border-r-2 border-b-0 border-l-2 border-t-2",
        ""
      );
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className +=
      " border-[#BF5A36] rounded-tr-lg rounded-tl-lg border-r-2 border-b-0 border-l-2 border-t-2";
  };

  return (
    <div>
      <div class="font-roboto text-xl text-[#BF5A36] mx-auto font-semibold block md:w-[1400px] md:flex">
        <button
          onClick={(evt) => openCity(evt, "dashboard")}
          id="defaultOpen"
          className="tablinks my-1 min-w-[300px] hover:border-r-2 hover:border-b-0 hover:border-l-2 hover:border-t-2 hover:transition hover:duration-200 rounded-tr-lg rounded-tl-lg px-4 py-2 border-b-2 border-[#BF5A36] ${isActive('dashboard') ? 'border-[#BF5A36] rounded-tr-lg rounded-tl-lg border-r-2 border-b-0 border-l-2 border-t-2' : ''}"
        >
          Dashboard
        </button>
        <button
          onClick={(evt) => openCity(evt, "purchaseHistory")}
          className="tablinks my-1 min-w-[300px] hover:border-r-2 hover:border-b-0 hover:border-l-2 hover:border-t-2 hover:transition hover:duration-200 rounded-tr-lg rounded-tl-lg px-4 py-2 border-b-2 border-[#BF5A36]"
        >
          Purchase History
        </button>
        <button
          onClick={(evt) => openCity(evt, "favourites")}
          className="tablinks my-1 min-w-[300px] hover:border-r-2 hover:border-b-0 hover:border-l-2 hover:border-t-2 hover:transition hover:duration-200 rounded-tr-lg rounded-tl-lg px-4 py-2 border-b-2 border-[#BF5A36]"
        >
          Favorites
        </button>
      </div>
      {/* <div className="mt-12">
        <div id="dashboard" className="main flex justify-center">
          <div className="flex flex-row justify-center space-x-8">
            <Profile_dashboard />
          </div>
        </div>

        <div id="purchaseHistory" className="main flex justify-center">
          <div className="flex flex-row justify-center space-x-8">
            <Profile_purchase_history />
          </div>
        </div>

        <div id="favourites" className="main flex justify-center">
          <div className="flex flex-row justify-center space-x-8">
            <Profile_favourites />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Profile_navbar;
