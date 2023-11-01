import React, { useState } from "react";
import { Link } from "react-router-dom";
import author from "../assets/author.jpg";
import PostActions from "./PostAction";




function Post() {

    
    return (
        <div className="bg-[#f5f5f5] py-2 mt-8  shadow-md hover:shadow-lg transition mx-auto rounded-md">
            <div className="flex">
            <img className="author-pic w-10 h-10 rounded-full ml-5 mt-[9px] " src={author} alt="Author" /> 
            <div className="mt-2">
            <p className="topics text-[#4F6D7A] text-[16px] text-left font-semibold ml-8 ">Kavinda Medagoda</p>
            <p className="topics text-[#4F6D7A] text-[11px] text-left font-normal ml-8 ">12 mins ago</p>
            </div>
            </div>
            <div className="bg-[#F2CB9E] bg-opacity-60 py-10 mt-5 mb-5   mx-auto">
              <p className= "topics text-[#BF5A36] text-[40px] text-center font-semibold ml-8 ">I want a <br></br>A/L Physics<br></br>Past Paper Book</p>
            </div>
           <PostActions />
        </div>
    );
} 

export default Post;
