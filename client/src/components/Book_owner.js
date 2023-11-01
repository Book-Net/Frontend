import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import Swal from "sweetalert2";

const Book_owner = () => {
  const [book, setBook] = useState("");
  const bookId = useParams();
  const [owner, setOwner] = useState("");
  const [u_id, setUid] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/book_details/${bookId.id}`
        );
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

  useEffect(() => {
    const Books = async () => {
      try {
        setUid(book.user_id);
        // console.log("mmmmmmmmmmmmmmmmmm  "+ book.user_id)
        console.log(u_id);
        const response = await axios.get(`/give_user/${u_id}`);
        // console.log(response)
        setOwner(response.data.user);
        // setBooks(response.data);
        // console.log("response Data" );
      } catch (error) {
        console.error("Error fetching books:", error);
        console.error();
      }
    };
    Books();
  }, [book]);

  return (
    <div>
      <div className="flex items-left space-x-10">
        {/* Left side (picture) */}
        <div>
          <img
            src={`http://localhost:9000/give_file/${book.img}`}
            className="w-28 h-28 rounded-full"
            alt=""
            srcSet=""
          />
        </div>

        {/* Right side (name and age) */}
        <div className="flex flex-col justify-start space-x-8 ">
          <div className="flex flex-col items-start text-2xl  text-[#4F6D7A] font-bold">
            <h2>Published By</h2>
            <h2>{owner.userName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book_owner;
