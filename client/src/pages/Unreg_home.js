import React from "react";
import Main_image from "../components/Main_image"
import Searchbar from "../components/Searchbar";
import BookList from "./BookList";

function Unreg_home() {
  return (
    <div>
      <Main_image />
      <Searchbar />
      <BookList />

    </div>
  );
}

export default Unreg_home;
