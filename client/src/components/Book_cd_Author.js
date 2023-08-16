import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

const Book_cd_Author = ({ book }) => {
  const { title, image, rating, availability, number_of_ratings } = book;

  function BookRating({ rating, number_of_ratings }) {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar key={i} className="text-yellow-500" />);
    }

    return (
      <div className="ratings items-center flex text-yellow-500 mb-2">
        {stars}
        <p className="ml-1 text-sm text-gray-600 font-roboto">({number_of_ratings})</p>
      </div>
    );
  }

  return (
    <div className="flex h-[350px]  bg-[#F5F5F5] shadow-md hover:shadow-lg transition mx-auto rounded-md max-w-[350px] max-h-[230px]">
      <div className="p-3 w-full min-w-[150px]">
        <img
          src={image}
          className="h-full object-cover w-full rounded-md"
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
            {title}
          </p>
          <p className="text-left text-sm mb-2 text-[#4F6D7A]">{availability}</p>
        </div>
        <div className=" absolute bottom-[40px]">
        <Button
            className="bg-[#BF5A36] text-white text-[11px] mt-[6px] font-medium px-4"
            type="submit"
            >
            About Book
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Book_cd_Author;
