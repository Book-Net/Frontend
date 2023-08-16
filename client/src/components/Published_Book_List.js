import React from "react";
import { PublishedBooks } from "../data_2";
import { Link } from "react-router-dom";
import Book_cd_Author from "./Book_cd_Author";

function Published_Book_List() {
  return (
    <section className="my-0 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {PublishedBooks.map((book, index) => (
            <Link to={`/edit/${book.id}`} key={index}>
              <Book_cd_Author book={book} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Published_Book_List;
