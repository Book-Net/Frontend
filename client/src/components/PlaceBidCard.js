import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

function PlaceBidCard() {
  return (
    <>
    <div className="bidCardContainer">
        <p className="topic">Current Bid</p>
        <p className="price">Rs. 500.00</p>

        <Link to="../placeBid">
          <Button
            className="bg-[#BF5A36] text-white my-6 font-bold px-6 shadow-lg"
            type="submit"
          >
            Place Bid
          </Button>
        </Link>
        
    </div>
    </>
  );
}

export default PlaceBidCard;