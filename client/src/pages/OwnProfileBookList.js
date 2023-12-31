import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Main_image from "../components/Main_image";
import Searchbar from "../components/Searchbar";
import { useAuth } from "../context/AppContext";

const MyBookList = () => {
  // const [books, setBooks] = useState([]);
  const { books, setBooks } = useAuth();
  console.log(books);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:9000/MyBookList");
      setBooks(response.data.books);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      // console.error();
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className="my-16 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl text-[#bf5a36]">My Book List</h1>
        </div>
        <div className="mb-8">
          <Searchbar />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {books.map((book, index) => (
            <BookCard book={book} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyBookList;
