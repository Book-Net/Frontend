import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from "sweetalert2";

function Add_book_for_sell() {
  // {console.log("yes")}
  const [ISBN,setISBN]=useState('');
  const [des,setdes] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  




  const generateBookDetailsString = (bookDetails) => {
    if (bookDetails && bookDetails.author) {
      return (
        `1. Language: ${bookDetails.language}\n` +
        `2. Publisher: ${bookDetails.publisher}\n` +
        `3. Published Date: ${bookDetails.publishedDate}\n` +
        `4. Author: ${bookDetails.author}\n` +
        `5. Page Count: ${bookDetails.pageCount}\n` +
        `6. Average Rating: ${bookDetails.averageRating}\n\n`
      );
    } else {
      return '';
    }
  };

  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    setdes(newValue); // Update the state with the new value from the textarea
  };

  

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    condition: "",
    price: "",
    quantity: "",
    // image: '',
    description: "",
  });

  

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`
      );
      const data = await response.json();

      if (response.status === 200) {
        setBookDetails({
          title: bookInfo.title || "NO INFO",
          author: bookInfo.authors ? bookInfo.authors.join(", ") : "NO INFO",
          // You can update other fields here based on the API response
          // Extract and update additional book details
          language: bookInfo.language || "NO INFO",
          publisher: bookInfo.publisher || "NO INFO",
          publishedDate: bookInfo.publishedDate || "NO INFO",
          pageCount: bookInfo.pageCount || "NO INFO",
          previewLink: bookInfo.previewLink || "NO INFO",
          averageRating: bookInfo.averageRating || "NO INFO",
        });
      } else {
        Swal.fire("No book found for the given ISBN.");
      }
      
    } catch (error) {
      console.error("Error fetching book details:", error);
      Swal.fire("An error occurred while fetching book details.");
    }
  };

  const handleImageChange = (e) => {
    // Update the images array with the selected files
    setBookDetails({
      ...bookDetails,
      images: Array.from(e.target.files),
    });
  };



  
  return (
    <div className="w-2/3 mx-auto shadow bg-[#FFFFFF] p-5 mb-5 rounded-md">
      <form
        action="http://localhost:9000/add_book_detail_sell"
        method="post"
        encType="multipart/form-data"
      >
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          ADD BOOK FOR SALE
        </p>
        <br />
        <input
          name="isbn"
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] text-[#BF5A36] w-3/5"
          placeholder="ISBN Number"
          required
          onChange={(e) => setISBN(e.target.value)}
        />{" "}
        <br />
        <button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 py-2 shadow-lg w-3/12 rounded-md"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission and page reload
            // Get the value of the ISBN input field

            const isbnInput = document.getElementById("isbn");
            // const isbnValue = isbnInput.value;

            if (ISBN == "") {
              Swal.fire("Enter ISBN to continue");
              // console.log('gI');
            } else {
              fetchBookDetails();
            }
          }}
        >
          Check
        </button>
        <br />
      {/* </form> */}

    
      
        <input
          name="title"
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name of the Book"
          required
          onChange={(e) => setBookDetails({
            ...bookDetails,
            title:e.target.value
          })}
          value={bookDetails.title}
        />
        <br />
        <input
          name="author"
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Author"
          required
          onChange={(e) => setBookDetails({
            ...bookDetails,
            author:e.target.value
          })}
          value={bookDetails.author}
        />
        <br />
        <select
          className="pl-2 py-3 shadow-md my-3 rounded-md text-[#BF5A36] w-3/5"
          required
          name="condition"
          value={selectedOption}
          onChange={(e) => {setSelectedOption(e.target.value)}}
        >
          <option value="" disabled>Condition</option>
          <option value="Used like Used Like New">Used like New</option>
          <option value="Used">Used</option>
          <option value="Damaged">Damaged</option>
        </select>
        <br />
        <input
          name="price"
          type="number"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Price"
          required
        />
        <br />
              {/* <input
                type="number"
                className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
                placeholder="Quantity"
                required
              />
              <br /> */}
        <input
          type="file"
          name="file"
          accept="image/*"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          required
          multiple
        />
        <br />
        <textarea
          name="description"
          id=""
          rows="6"
          placeholder="Description"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          minLength="200"
          value={
            des
          }
          onChange={handleDescriptionChange}
        ></textarea>

            {/* <textarea
              name="user_description"
              id=""
              rows="5"
              placeholder="Say Something..."
              className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
              minLength="600"
              readOnly={false}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, description: e.target.value })
              }
            ></textarea> */}

        {/* Display additional book details in the description field */}
        
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

export default Add_book_for_sell;
