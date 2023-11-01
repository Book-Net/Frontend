import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import BookCard from "../components/BookCard";
import Main_image from "../components/Main_image";
import Searchbar from "../components/Searchbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AppContext";

const BookList = () => {
  // const handleBookCardClick = async (bookId) => {
  //   // Send a request to the backend using the bookId
  //   await axios.get(`http://localhost:9000/BookList/:${bookId}`)
  //     .then(response => {
  //       // Handle the response, e.g., display book details
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching book details:', error);
  //     });
  // };

  // const [books, setBooks] = useState([]);

  const { books, setBooks } = useAuth();

  console.log(books);
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:9000/BookList");
      setBooks(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      // console.error();
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const generateBookLink = (book) => {
    switch (book.option) {
      case "Sell":
        return `/booksell_detail/${book._id}`;
        break;
      case "Bid":
        return `/bid_interface/${book._id}`;
        break;
      case "Donate":
        return `/login`;
        break;
      case "Exchange":
        return `/`;
        break;
      default:
        return `/login`;
        break;
    }
  };

  return (
    <section className="my-16 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div className="mb-8">
          <Main_image />
          <Searchbar />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {books.map((book, index) => (
            <Link to={generateBookLink(book)} key={index}>
              {" "}
              <BookCard book={book} />
            </Link>
          ))}
          {/* {console.log(books[0]._id)} */}
        </div>
      </div>
    </section>
  );
};

export default BookList;
