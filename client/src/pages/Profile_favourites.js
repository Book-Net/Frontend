import React from "react";
import BookCard from "../components/BookCard";

const Profile_favourists = () => {
    return ( 

          
            <div className="p-2 flex flex-row gap-4 m-2">
              <div className="flex flex-col justify-center">
                <BookCard />
              </div>
              <div className="flex flex-col justify-center">
                <BookCard />
              </div>
              
            </div>
          

     );
}
 
export default Profile_favourists;