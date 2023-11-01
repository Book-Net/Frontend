import React from "react";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import Searchbar from "../components/Searchbar";


function PostView() { 
  return (
    <div className="">
      <div className="flex">
     
     <SideBar />
     
     
     </div>
    <div className="post-container max-w-3xl mx-auto p-8 bg-[#ffffff] relative overflow-hidden rounded-lg shadow-md">
      <Posts />
      <Posts />
    </div>
   
    </div> 
  );
}

export default PostView;
