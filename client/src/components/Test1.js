import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Bid_book from "../components/Bid_book";
import Exchange_book from "../components/Exchange_book";
import ReusableInputField from "../components/ReusableInputField";

const Test1 = () => {
  async function handle(e) {
    try {
      // Send the form data to your server using Axios
      const response = await axios.post(
        "/test",
        // { headers: { "x-access-token": user } },

        { withCredentials: true }
      );

      // Handle the response here (e.g., show success message)
      console.log("Form submitted successfully:", response.data);
      if (response.status === 200) {
        Swal.fire("The Book Added Successfully").then((result) => {
          if (result.isConfirmed) {
            // Navigate to the home page
            window.location.href = "http://localhost:3000/";
          }
        });
      }

      // Redirect to the next page or perform any other necessary actions
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error fetching book details:", error);
      Swal.fire("An error occurred while saving file to database");
    }
  }

  return (
    <div>
      <form action="submit">
        <input type="text" />{" "}
        <button type="submit" onClick={handle}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Test1;
