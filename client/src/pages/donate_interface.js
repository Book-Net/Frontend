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
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import Swal from "sweetalert2";
import Book_owner from "../components/Book_owner";
import Book_suj from "../components/Book_suj";

const Donate_interface = () => {
  const [book, setBook] = useState("");
  const bookId = useParams();
  const [book_id, setbook_id] = useState("");

  useEffect(() => {
    setbook_id(bookId.id)
    }, [bookId.id]);
  
  const [book_dtl, setbook_dtl] = useState("");
  const [Request, setRequest] = useState('');

  async function handleBidSubmit(e) {
    e.preventDefault();
    console.log(e)
    try {
        // Replace the following with your actual API endpoint and payload

        const response = await axios.post(
            "/donate",
            {
                book_id,
                Request,
            },
            { withCredentials: true }
          );

        if (response.status === 200) {
            // Handle a successful bid submission, e.g., show a success message.
            Swal.fire("Request submitted successfully");
        } else {
            // Handle errors, e.g., display an error message.
            Swal.fire("Error submitting request");
        }
    } catch (error) {
        Swal.fire("Error submitting request" + error);
    }
};

  // console.log( bookId);
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

  useEffect(() => {
    const bookends = async () => {
        setbook_dtl(book)
    };
    bookends();
  }, [book.needs]);



  const des = book.description;
  
  const getme = async () => {
    const r = book.price
    // console.log(r)
    // const response = await axios.get(`http://localhost:9000/getme/${bookId.u_id}`);
  }
  getme();

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
            <img
              src={`http://localhost:9000/give_file/${book.img}`}
              className="w-4/5 rounded-md" alt=""
              srcSet=""
            />
          </div>
          <div className="mt-2 ml-0 mr-4">
            <AiOutlineHeart className="text-red-400 w-7 h-7" />
          </div>
          <div className="w-2/3 px-4">
            <div className="pb-2">
              <Book_name_author title={book.title} author={book.authors}/>
            </div>
            <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md shadow-#9B9B9B w-full ml-0">
            <div className="flex flex-row">
              <div className="flex flex-col justify-start space-x-8 ">
                <div className="flex flex-col items-start  text-red-700 font-bold">
                    <h3>Request this book -</h3>
                </div>
                </div>
                <div className="flex flex-col justify-start space-x-8 text-left ml-10">
                <div className="flex flex-col text-left">
                <p className="font-bold text-[#c90404]">
                  <p>
                    {book_dtl.needs}
                  </p>
                </p>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleBidSubmit(e)} encType="multipart/form-data">
                <div className="flex lex flex-row items-end  space-x-5 ">
                    <div className="w-full">
                        <input
                        className="bg-gray-50 border border-[#BF5A36] border-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                        type="text"
                        onChange={(e) => setRequest(e.target.value)}
                        />
                    </div>
                    <div>
                    <button
                        className="items-center px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#BF5A36] disabled:bg-gray-500 disabled:opacity-50"
                        type="submit"
                    >
                        Request
                    </button>
                    </div>
                </div>
            </form>
            </div> 
          </div>
        </div>
        <div className="flex justify-center w-full p-20 mt-10 bg-gray-100 rounded-lg shadow-md md:max-w-screen-lg">
        <div className="flex flex-row">
              <div className="flex flex-col justify-start space-x-8 ">
                <div className="text-red-700 font-bold">
                  <h3>Condition</h3>
                  <h3>Author</h3>
                  <h3>Category</h3>
                  <h3>Description</h3>
                </div>
                </div>
                <div className="flex flex-col justify-start space-x-8 text-left ml-10">
                <div className="flex flex-col text-left">
                <p className="text-[#4F6D7A] font-bold">
                  <p>
                    {book.condition}
                  </p>
                  <p>
                    {book.authors}
                  </p>
                  <p>
                    {book.category}
                  </p>
                  <p className="text-[#4F6D7A] font-bold">
                  {/* {des.map((item, index) => (
                      <div key={index} className="row">
                        {item}
                      </div>
                    ))} */
                    des}
                  </p>
                </p>
                </div>
              </div>
            </div>
        </div>

        {/* <Button
          className="px-4 py-2 mt-4 text-red-700 bg-gray-100 border border-red-500 rounded shadow-md hover:bg-gray-300"
          type="submit"
        >
          Ask a question
        </Button> */}

        <div className="w-full p-5 mt-8 bg-gray-100 rounded-lg shadow-md md:max-w-screen-lg">
          <div>
            <Book_owner bookId={book_id}/>
          </div>
        </div>
      <Book_suj bookcat={book.category}/>
      </div>
    </div>
  );
};

export default Donate_interface;;