import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        console.error("2");
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} (Genre: {book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
