import React from "react";
import Button from "./Button";
import "./component.css";

function PlaceBidCard() {
  return (
    <>
    <div className="bidCardContainer">
        <p className="topic">Current Bid</p>
        <p className="price">Rs. 500.00</p>
        <Button
          className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
          type="submit"
        >
          Place Bid
        </Button>
        <a className="historyLink" href="#">View history</a>
    </div>
    </>
  );
}

export default PlaceBidCard;