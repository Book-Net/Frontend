import React from "react";
import { books } from "../data";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

function BookList() {
  return (
    <section className="my-16 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {books.map((book, index) => (
            <Link to={`/edit/${book.id}`} key={index}>
              <BookCard book={book} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
