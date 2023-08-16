import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from 'sweetalert2'

function Add_book_for_sell() {
  const [ISBN,setISBN]=useState('');

  
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    condition: '',
    price: '',
    quantity: '',
    // image: '',
    description: '',
    
  });

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const bookInfo = data.items[0].volumeInfo;
        setBookDetails({
          title: bookInfo.title || 'NO INFO',
          author: bookInfo.authors ? bookInfo.authors.join(', ') : 'NO INFO',
          // You can update other fields here based on the API response
          // Extract and update additional book details
          language: bookInfo.language || 'NO INFO',
          publisher: bookInfo.publisher || 'NO INFO',
          publishedDate: bookInfo.publishedDate || 'NO INFO',
          pageCount: bookInfo.pageCount || 'NO INFO',
          previewLink: bookInfo.previewLink || 'NO INFO',
          averageRating: bookInfo.averageRating || 'NO INFO',
          
          
        });
      } else {
        Swal.fire('No book found for the given ISBN.');
      }
    } catch (error) {
      console.error('Error fetching book details:', error);
      Swal.fire('An error occurred while fetching book details.');
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
      <form >
        <p className=" font-roboto text-4xl text-[#4F6D7A] my-6 font-bold">
          ADD BOOK FOR SALE
        </p>
        <br />
        <input
          type="text"
          className="pl-2 py-3 shadow-md my-3 rounded-md placeholder-[#BF5A36] text-[#BF5A36] w-3/5"
          placeholder="ISBN Number"
          required
          onChange={(e) => setISBN(e.target.value)}
        />
        <button className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg w-3/5"
        onClick={(e) => {
          e.preventDefault(); // Prevent form submission and page reload
          // Get the value of the ISBN input field
          
          
          const isbnInput = document.getElementById('isbn');
          // const isbnValue = isbnInput.value;

          if (ISBN == '') {
            Swal.fire('Enter ISBN to continue');
            // console.log('gI');
          } else {
            fetchBookDetails();
          }
              
        }}>
            Check!
        </button>
        <br />
      </form>

      <form>
        <input
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Name of the Book"
          required
          value={bookDetails.title}
        />
        <br />
        <input
          type="text"
          className="pl-2 py-3 text-[#BF5A36] shadow-md my-3 rounded-md placeholder-[#BF5A36] w-3/5"
          placeholder="Author"
          required
          value={bookDetails.author}
        />
        <br />
        <select
          className="pl-2 py-3 shadow-md my-3 rounded-md text-[#BF5A36] w-3/5"
          required
        >
          <option value="" disabled selected>
            Condition
          </option>
          <option value="New">Used like New</option>
          <option value="Used">Used</option>
          <option value="Used">Damaged</option>
        </select>
        <br />
        <input
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
          name="image"
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
          minLength="600"
          value={
            `1.Language: ${bookDetails.language}\n` +
            `2.Publisher: ${bookDetails.publisher}\n` +
            `3.Published Date: ${bookDetails.publishedDate}\n` +
            `4.Author: ${bookDetails.author}\n` +
            `5.Page Count: ${bookDetails.pageCount}\n` +
            `6.Average Rating: ${bookDetails.averageRating}\n\n`
          }
          readOnly={true}
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
