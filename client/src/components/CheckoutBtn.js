import React from "react";
import axios from "axios";
// import { useSelector } from 'react-redux'
import Button from "./Button";

const CheckoutBtn = ({ cartItems, price }) => {
  const handleCheckout = async () => {
    console.log("cart items");
    try {
      await axios
        .post("http://localhost:9000/stripe/create-checkout-session", {
          cartItems,
          price,
          userId: 1,
        })
        .then((res) => {
          console.log("hey" + res);
          window.location.href = res.data.url;
        })
        .catch((error) => {
          console.log("Error in checkout", error);
        });
    } catch (error) {
      console.log("Error in catch in try catch" + error);
    }
  };

  return (
    <div>
      <button
        className="bg-[#BF5A36] text-white text-center mt-3 font-bold px-6 py-2 rounded-lg shadow-lg"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
