import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:9000/BookList");
        setBooks(response.data);
        console.log("1")
      } catch (error) {
        console.error('Error fetching books:', error);
        console.error();
      }
    };
    fetchBooks();
  }, []);

  return (
    <section className="my-16 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {books.map((book, index) => (
           
              <BookCard book={book} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
