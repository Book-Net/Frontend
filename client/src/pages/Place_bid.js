import React from "react";
import book from "../assets/book1.png";
import Book_name_author from "../components/Book_name_author";
import Bid_closing_description from "../components/Bid_closing_description";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const Place_bid = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center p-5">

      <div className="bg-white p-20 rounded-lg shadow-md w-full md:max-w-screen-lg">

        <Link to="/bookBidDetails" className="text-gray-600 absolute top-20 left-4 ">
            &larr; Back to Bid details
        </Link>

        <div className="flex">
          <div className="w-1/3">
            <img src={book} className="w-4/5 rounded-md" alt="" />
          </div>
          <div className="w-2/3 px-4">
            <div className="pb-2">
              <Book_name_author />
            </div>
            
            
            <div className="mt-3 bg-gray-300 p-4 rounded-md shadow-md shadow-#9B9B9B w-3/4 ml-0">
             
                <p className="topic">Current Bid</p>
                <p className="py-5 text-[#F61D0F]">Rs. 500.00</p>

                <input type="number" />
                <Button
                  className="bg-[#BF5A36] text-white my-4 mt-5 font-bold px-20 shadow-lg"
                  type="submit"
                >
                  Place Bid
                </Button>
               
            </div>
          </div>
          <div>
              <Bid_closing_description/>
          </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Place_bid;