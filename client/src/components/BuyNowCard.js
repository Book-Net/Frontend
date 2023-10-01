import React from "react";
import Button from "./Button";

function BuyNowCard() {
  return (
    <>
    <div className="bidCardContainer">
        <p className="price">Rs. 500.00</p>
        <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
          type="submit"
        >
          Buy Now
        </Button>
        
    </div>
    </>
  );
}

export default BuyNowCard;