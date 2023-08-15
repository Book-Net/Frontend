import React from "react";
import Book_categories from "../components/Book_categories";
import Searchbar from "../components/Searchbar";
import book from "../assets/book1.png";
import Book_sale_description from "../components/Book_sale_description";
import Seller_description from "../components/Seller_description";
import Book_name_author from "../components/Book_name_author";
import Bid_closing_description from "../components/Bid_closing_description";
import PlaceBidCard from "../components/PlaceBidCard";

import Button from "../components/Button";

const Book_bid_details = () => {
    return ( 
        <>

      <div class="main-container">
        <div>
            <Book_categories/>
        </div>
        <div>
            <Searchbar/>
        </div>
        <div className="md:flex h-[350px] bg-[#F5F5F5] padding-40px margin-5% shadow-md hover:shadow-lg transition rounded-md max-w-[300px] max-h-[230px]">
          <div className="flex flex-col p-3 w-full min-w-[140px]">
           <img
             src={book}
             className="h-full object-cover w-full rounded-md"
             alt=""
             srcset=""
           />
          </div>
          <div className="flex flex-col" >
            <div>
              <Book_name_author/>
            </div>
            <div>
              <Bid_closing_description/>
            </div>
            <div className="p-3 w-full max-w-[160px]">
              <PlaceBidCard/>
            </div>
          </div>
          
        </div>
    
        <div>
          <Book_sale_description/>
        </div>

        <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
          type="submit"
        >
          Ask a question 
        </Button>

        <div>
          <Seller_description/>
        </div> 

      </div> 
        </>
     );
}
 
export default Book_bid_details;