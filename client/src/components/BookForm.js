import React, { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function BookForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  const addBook = async (e) => {
    e.preventDefault();
    const { title, author, genre } = data;
    try {
      const response = await axios.post(
        "http://localhost:9000/add_book", // Update the URL as needed
        { title, author, genre }, 
        { withCredentials: false }
      );

      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({
          title: "",
          author: "",
          genre: "",
        });
        toast.success("Book added successfully!");
        // Redirect logic or handle success as needed
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={addBook}>
        <p className="font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          Add a New Book
        </p>
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Title"
          required
          value={data.title}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, title: e.target.value }))
          }
        />
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Author"
          required
          value={data.author}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, author: e.target.value }))
          }
        />
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Genre"
          required
          value={data.genre}
          onChange={(e) =>
            setData((prevData) => ({ ...prevData, genre: e.target.value }))
          }
        />
        <br />
        <Button
          className="bg-[#BF5A36] text-white mt-3 font-bold px-6"
          type="submit"
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}

export default BookForm;
