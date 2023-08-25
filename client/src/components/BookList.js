import React from "react";
import { books } from "../data";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function BookList() {
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
}

export default BookList;
