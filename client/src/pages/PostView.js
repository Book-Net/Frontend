import React from "react";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import { useAuth } from "../context/AppContext";

function PostView() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="">
      <SideBar />
      <div className="post-container max-w-3xl mx-auto p-8 bg-[#ffffff] relative overflow-hidden rounded-lg shadow-md">
        <Posts />
        <Posts />
      </div>
    </div>
  );
}

export default PostView;
