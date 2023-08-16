import React from "react";
import BookCard from "../components/BookCard";

const Profile_purchase_history = () => {
    return (           
        <>
            <div className="flex flex-col justify-center">
              <BookCard />
            </div>
            <div className="flex flex-col justify-center">
              <BookCard />
            </div>
            <div className="flex flex-col justify-center">
              <BookCard />
            </div>
            <div className="flex flex-col justify-center">
              <BookCard />
            </div>
        </>
     );
}
 
export default Profile_purchase_history;