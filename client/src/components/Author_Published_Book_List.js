import React from "react";
import { PublishedBooks } from "../data_2";
import { Link } from "react-router-dom";
import Book_cd_Author from "./Book_cd_Author";
import Author_Edit_Book_Card from "./Author_Edit_Book_Card";

function Author_Published_Book_List() {
  return (
    <section className="my-0 max-w-[1400px] mx-auto">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PublishedBooks.map((book, index) => (
            <Link to={`/author_edit_book/${book.id}`} key={index}>
              <Author_Edit_Book_Card book={book} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Author_Published_Book_List;
