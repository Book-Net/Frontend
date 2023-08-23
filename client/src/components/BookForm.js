import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from 'sweetalert2'

function BookForm() {
  return (
    <div className="w-2/3 mx-auto shadow bg-[#FFFFFF] p-5 mb-5 rounded-md">

      <form action="http://localhost:9000/Book_add_author" method="post" encType="multipart/form-data">
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          ADD BOOK
        </p>
        <br />
        <input
          name="isbn"
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] text-[#BF5A36] w-3/5"
          placeholder="ISBN Number"
          required
        />
        <br />
      
        <input
          name='title'
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name of the Book"
          required
        />
        <br />
        <input
        name='author'
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Author"
          required
        />
        <br />
        <input
          name='quantity'
          type="number"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Quantity"
          required
        />
        <br />
        <input
          name='price'
          type="number"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Price"
          required
        />
        <br />
             
        <input
          type="file"
          name="file"
          accept="image/*"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Quantity"
          required
          multiple
        />
        <br />
        <textarea
          name="description"
          id=""
          rows="5"
          placeholder="Description"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          maxLength="600"
        ></textarea>

         
        
        <br />
        <br />

        <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
          type="submit"
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}

export default BookForm;
