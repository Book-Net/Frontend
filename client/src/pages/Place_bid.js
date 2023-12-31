import React, { useState } from "react";
import book from "../assets/book1.png";
import Book_name_author from "../components/Book_name_author";
import Bid_closing_description from "../components/Bid_closing_description";
import Button from "../components/Button";
import { Link } from 'react-router-dom';
import ViewHistory from "../components/ViewHistory";

const Place_bid = () => {

  const [showHistory, setShowHistory] = React.useState(false);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">

      <div className="bg-white p-10 rounded-lg shadow-md w-full md:max-w-screen-lg">

        <Link to="/bookBidDetails" className="text-gray-600 absolute top-20 left-4 ">
            &larr; Back to Bid details
        </Link>

        <div className="relative flex m-3">
          <div className="w-1/2  shadow-2xl shadow-gray-470 ">
            <img src={book} className="rounded-md " alt="" />
          </div>
          <div className="w-1/2 ml-[70px]">
            <div className="pb-2">
              <Book_name_author />
            </div>
            
            <div className=" pt-4">
              <Bid_closing_description/>
            </div>
            
            <div className=" pt-5 text-[#4F6D7A] font-bold text-l text-left">
              Not reserved yet
            </div>

            <div className="mt-2 bg-gray-100 p-4 rounded-md border-[#bf5a36] ml-0">
             
                <p className="topic">Current Bid</p>
                <p className="py-4 text-[#F61D0F] text-[27px]">Rs. 500.00</p>

                <input className="mt-2 py-[4px] bg-white border-gray-400 border-[1px] rounded-md" type="number" />
                <br></br>

                <Link to="/bookBidDetails">
                <Button
                  className="bg-[#BF5A36] text-white my-4 mt-5 font-bold px-[53px] shadow-lg"
                  type="submit"
                >
                  Place Bid
                </Button>
                </Link>
             <br></br>
             <Button
               className="text-gray-600"
               onClick={() => setShowHistory(true)}
             >
             View History
             </Button>

            </div>

          </div>
          
        </div>
        {showHistory && (
        <div className="bg-black bg-opacity-50 flex inset-0 z-50 absolute justify-center items-center">
          
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <button className="relative text-gray-600 hover:text-gray-800" onClick={() => setShowHistory(false)}>Close</button>
            <ViewHistory />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Place_bid;