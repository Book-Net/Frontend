import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
// import {url} from "../slices/api"


import axios from 'axios'
import CheckoutBtn from "../components/CheckoutBtn";


function BuyNowCard({price}) {

// const user = useSelector((state) => state.auth)

//   const handleCheckout = ({cartItems}) => {
//     console.log("cart items");
//     axios.post('http://localhost:9000/stripe/create-checkout-session')
//     .then((res) => {
//       console.log("hey" + res)
//       window.location.href= res.data.url;
//     }).catch((error) => {console.log("Error in checkout", error)})
// }

  return (
    <>
    <div className="bidCardContainer">
        <p className="price">{price}</p>
        {/* <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
          type="submit"
          onClick={handleCheckout}
        >
          Buy Now
        </Button> */}
        <CheckoutBtn cartItems="Book1"
        >Checkout</CheckoutBtn>
        {/* <checkoutBtn/> */}
    </div>
    </>
  );
}

export default BuyNowCard;