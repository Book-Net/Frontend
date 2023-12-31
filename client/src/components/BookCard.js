import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";


const BookCard = ({ book }) => {
  const { title, img, price, rating, number_of_ratings, authors, condition, option, minbid, needs} =
    book;

  const[clicked,setClicked]=useState("");
  let content;
  let amount;

  function MyComponent(contentKey) {
  
    switch (contentKey) {
      case "Sell":
        content = "Buy Now"
        amount = "Rs : "+price;
        break;
      case "Bid":
        content="Bid Now";
        amount = "Min Bid Rs : "+ minbid;
        break;
      case "Donate":
        content="For Donation";
        break;
      case "Exchange":
        content="For Exchange";
        amount = needs;
        break;
      default:
        content = null;
        amount = null;
        break;
    }
  }

    MyComponent(option)

  function BookRating({ rating, number_of_ratings }) {
    // const stars = [];
    
    // for (let i = 0; i < rating; i++) {
    //   stars.push(<AiFillStar key={i} className="text-yellow-500" />);
    // }

    // return (
    //   <div className="flex items-center mb-2 text-yellow-500 ratings">
    //     {stars}
    //     <p className="ml-1 text-sm text-gray-600 font-roboto">
    //       ({})
    //     </p>
    //   </div>
    // );
  }

  return (
    <div className="flex h-[350px] bg-[#F5F5F5] shadow-md hover:shadow-lg transition mx-auto rounded-md min-w-[350px] max-h-[230px]" onClick={() => setClicked(!clicked)}>
      <div className="p-3 w-full max-w-[150px]">
        <img
          src={`http://localhost:9000/give_file/${img}`}
          className="object-cover w-full h-full rounded-md"
          alt=""
          srcSet=""
        />
      </div>
      <div className="p-3 w-full max-w-[200px] relative">
        <div>
          {/* <BookRating rating={rating} number_of_ratings={number_of_ratings} /> */}
        </div>
        <div>
          <p className="font-bold mb-2 text-xl w-full overflow-hidden text-md text-left text-[#4F6D7A]" >
            {title}
          </p>
          <p className="text-left text-lg mb-2 text-[#4F6D7A]">{authors}</p>
        </div>
<<<<<<<<< Temporary merge branch 1
        <div className="absolute  bottom-2">
=========
        <div className="absolute bottom-2">
>>>>>>>>> Temporary merge branch 2
          <p className="text-left text-xl font-semibold text-[#BF5A36] mb-4">
            <p>{content}</p>
            <p>{amount}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard
