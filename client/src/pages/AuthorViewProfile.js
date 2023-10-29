import React from "react";
import Author_description from "../components/Author_description";
import Published_Book_List from "../components/Published_Book_List";
import StarRating from "../components/StarRating";
import Msg_Author from "../components/Msg_Author";
import EditPopup from "../components/EditPopup";
import AuthorView_description from "../components/AuthorView_description";
import EditAboutAuthorPopup from "../components/EditAboutAuthorPopup";

function AuthorViewProfile() {
  return (
    <div className="font-sans">
      <div className="author-profile-container max-w-5xl mx-auto p-8 bg-[#ffffff] relative overflow-hidden rounded-lg shadow-md">

      {/* <Author_description /> */}
      <AuthorView_description/>
      <div className="flex items-center mt-8 ml-8 text-2xl font-medium text-left topics">
        <p className="text-[#4F6D7A] mt-4 mr-4">About Author</p>
        <EditAboutAuthorPopup/>
      </div>
       <p className="topics text-[#BF5A36] text-[18px] text-left font-normal ml-8 mt-8">Step into the captivating world of celebrated author Samuel Hartman, a luminary in the realm of fiction. Samuel Hartman's literary journey is adorned with an array of prestigious awards and accolades, testaments to his exceptional storytelling prowess and profound impact on the literary landscape. </p>
       <p className="topics text-[#BF5A36] text-[18px] font-normal text-left  ml-8 mt-8">Qualifications and Awards <p> Master of Fine Arts in Creative Writing: University of Literature<br></br>Fictional Excellence Award</p></p>
      <p className="topics text-[#4F6D7A] text-2xl text-left font-medium ml-8 mt-8">Published Books</p>
       <Published_Book_List />
       {/* <StarRating />
       <Msg_Author /> */}
       
      </div>
    </div>
  );
}

export default AuthorViewProfile;
