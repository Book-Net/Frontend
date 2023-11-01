import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import BookCard from "./BookCard";
import Main_image from "./Main_image";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Book_suj = ({ bookcat }) => {
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
  console.log(bookcat);
  const [books, setBooks] = useState([]);
  //   setBooks(books.filter(book => book.category === bookcat));
  // console.log(books)
  const bkarr = books.filter((book) => book.category === bookcat);
  const shuffledBooks = shuffleArray(bkarr);
  const randomBooks = shuffledBooks.slice(0, 4);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:9000/BookList");
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        console.error();
      }
    };
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
        return `/donate_interface/${book._id}`;
        break;
      case "Exchange":
        return `/exchange_interface/${book._id}`;
        break;
      default:
        return `/login`;
        break;
    }
  };

  return (
    <div>
      <section className="my-16 max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-red-700">Books for you</h2>
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {randomBooks.map((book, index) => (
              <Link to={generateBookLink(book)} key={index}>
                <BookCard book={book} />
              </Link>
            ))}
            {/* {console.log(books[0]._id)} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book_suj;
