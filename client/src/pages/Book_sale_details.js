import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import axios from "axios";
import Book_categories from "../components/Book_categories";
import book from "../assets/book1.png";
import Searchbar from "../components/Searchbar";
import Book_sale_description from "../components/Book_sale_description";
import Seller_description from "../components/Seller_description";
import BuyNowCard from "../components/BuyNowCard";
import Book_name_author from "../components/Book_name_author";
import Button from "../components/Button";
import { AiOutlineHeart } from "react-icons/ai";
import checkoutBtn from "../components/CheckoutBtn";


const Book_sale_details = () => {
  const [book, setBook] = useState("");
  const bookId = useParams();
  console.log( bookId);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        
        const response = await axios.get(`http://localhost:9000/book_details/${bookId.id}`);
        // console.log(response)
        setBook(response.data);
        // setBooks(response.data);
        // console.log("response Data" );
        
      } catch (error) {
        console.error("Error fetching books:", error);
        console.error();
      }
    };
    fetchBooks();
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* <div className="w-3/4 mx-auto">
        <Searchbar />
      </div>
      <div className="w-3/4 mx-auto">
        <Book_categories />
      </div> */}
      <div className="w-full p-20 bg-white rounded-lg shadow-md md:max-w-screen-lg">
        <div className="flex">
          <div className="w-1/3">
            <img src={book} className="w-3/5 rounded-md" alt="" />
          </div>
          <div className="mt-2 ml-0 mr-4">
            <AiOutlineHeart className="text-red-400 w-7 h-7" />
          </div>
          <div className="w-2/3 px-4">
            <div className="pb-2">
              <Book_name_author title={book.title} author={book.authors}/>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md shadow-#9B9B9B w-1/2 ml-0">
              <BuyNowCard price={book.price} cartItems={['book1']}/>
              {/* <checkoutBtn/> */}
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full p-20 mt-10 bg-gray-100 rounded-lg shadow-md md:max-w-screen-lg">
          <Book_sale_description />
        </div>

        {/* <Button
          className="px-4 py-2 mt-4 text-red-700 bg-gray-100 border border-red-500 rounded shadow-md hover:bg-gray-300"
          type="submit"
        >
          Ask a question
        </Button> */}

        <div className="w-full p-5 mt-8 bg-gray-100 rounded-lg shadow-md md:max-w-screen-lg">
          <Seller_description />
        </div>
      </div>
    </div>
  );
};

export default Book_sale_details;