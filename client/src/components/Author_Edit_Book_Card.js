import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

const Author_Edit_Book_Card = ({ book }) => {
  const { title, image, rating, availability, number_of_ratings } = book;

  function BookRating({ rating, number_of_ratings }) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} className="text-yellow-500" />);
    }

    return (
      <div className="flex items-center mb-2 text-yellow-500 ratings">
        {stars}
        <p className="ml-1 text-sm text-gray-600 font-roboto">({number_of_ratings})</p>
      </div>
    );
  }

  // Define the maximum title length
  const maxTitleLength = 20; // You can change this to your desired limit

  // Use a conditional expression to limit the title length
  const limitedTitle = title.length > maxTitleLength ? `${title.slice(0, maxTitleLength)}...` : title;

  return (
    <div className="flex h-[350px]  bg-[#F5F5F5] shadow-md hover:shadow-lg transition mx-auto rounded-md max-w-[350px] max-h-[230px]">
      <div className="p-3 w-full min-w-[150px]">
        <img
          src={image}
          className="object-cover w-full h-full rounded-md"
          alt=""
          srcSet=""
        />
      </div>
      <div className="p-3 w-full max-w-[200px] relative">
        <div>
          <BookRating rating={rating} number_of_ratings={number_of_ratings} />
        </div>
        <div>
          <p className="font-bold mb-2 w-full overflow-hidden text-md text-left text-[#4F6D7A]">
          {limitedTitle}
          </p>
          <p className="text-left text-sm mb-2 text-[#4F6D7A]">{availability}</p>
        </div>
        <div className=" absolute bottom-[40px]">
        <Button
            className="bg-[#BF5A36] text-white text-[11px] mt-[6px] font-medium px-4"
            type="submit"
            >
            Edit Book
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Author_Edit_Book_Card;
