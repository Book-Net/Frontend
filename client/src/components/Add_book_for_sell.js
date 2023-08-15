import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from 'sweetalert2'

function Add_book_for_sell() {
  const [formdata,setISBN]=useState('');

  const handleIsbnChange = (e) => {
    const updatedFormdata = { ...formdata, isbn: e.target.value };
    setISBN(updatedFormdata);
  };

  return (
    <div className="w-2/3 mx-auto shadow bg-[#FFFFFF] p-5 mb-5 rounded-md">
      <form >
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          ADD BOOK FOR SALE
        </p>
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="ISBN Number"
          required

        />
        <button className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg w-3/5"
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission and page reload
          // Get the value of the ISBN input field
          
          
          const isbnInput = document.getElementById('isbn');
          // const isbnValue = isbnInput.value;

          if (isbnInput.value == null) {
            console.log("HI");
          } else {
            // Swal.fire('Any fool can use a computer');
          }
              
        }}>
            Check!
        </button>
        <br />
      </form>
      <form>
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name of the Book"
          required
        />
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Author"
          required
        />
        <br />
        <select
          className="pl-2 py-3 shadow-md my-3 rounded-md text-[#BF5A36] w-3/5"
          required
        >
          <option value="" disabled selected>
            Condition
          </option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <br />
        <input
          type="number"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Price"
          required
        />
        <br />
        <input
          type="number"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Quantity"
          required
        />
        <br />
        <input
          type="file"
          name="image"
          accept="image/*"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Quantity"
          required
        />
        <br />
        <textarea
          name="description"
          id=""
          rows="5"
          placeholder="Description"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          minLength="600"
        ></textarea>
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

export default Add_book_for_sell;
