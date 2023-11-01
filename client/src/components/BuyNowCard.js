import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
// import {url} from "../slices/api"

import axios from "axios";
import CheckoutBtn from "../components/CheckoutBtn";

function BuyNowCard({ book }) {
  return (
    <>
      <div className="">
        <p className="price text-2xl text-[#BF5A36] font-bold text-center">
          RS : {book.price}
        </p>
        <CheckoutBtn cartItems={book.title} price={book.price}></CheckoutBtn>
      </div>
    </>
  );
}

export default BuyNowCard;
