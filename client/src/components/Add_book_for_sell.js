import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Add_book_for_sell() {
  return (
    <div className="w-2/3 mx-auto">
      <form action="">
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          Add book for sale
        </p>
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="ISBN Number"
          required
        />
        <br />
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
        ></textarea>
        <br />

        <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6"
          type="submit"
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}

export default Add_book_for_sell;
