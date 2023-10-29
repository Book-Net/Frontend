import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";
import Profile_card from "./components/Profile_card";
import Profile from "./pages/Profile";
import Profile_navbar from "./components/Profile_navbar";
import Reg_home from "./pages/Reg_home";
import Login from "./pages/Login";
import { createContext, useState } from "react";
import Add_book_for_sell from "./components/Add_book_for_sell";
import Add_book_for_bid from "./components/Add_book_for_bid";
import Unreg_home from "./pages/Unreg_home";
import Book_sale_details from "./pages/Book_sale_details";
import Book_bid_details from "./pages/Book_bid_details";
// import Profile from "./pages/Profile";
import Edit_profile from "./pages/Edit_profile";
import Place_bid from "./pages/Place_bid";
import Sidebar_admin from "./pages/Sidebar_admin";
import BookList from "./pages/BookList";
import AddFor_Bid from "./pages/AddFor_Bid";


function App() {
  const isLoggedIn = false; //change this after authentication done

  const LoginContextProvider = ({ children }) => {
    const [logOrSignUp, setLogOrSignUp] = useState(true);
  };

  return (
    <div className="App bg-[#F5F5F5]">
       <div className="fixed top-0 w-full top"></div> 
       <header className="header">
        {isLoggedIn ? <Navbar_2 /> : <Navbar_1 />}
      </header> */
      <main className="mt-[120px]">
        {/* <Main_image /> */}
        {/* <Signup /> */}
        {/* <Profile_card/> */}
        {/* <Profile/> */}
        {/* <Profile_navbar/> */}
        {/* <Add_book_for_sell/> */}
        {/* <Appk/> */}
        {/* <BookForm/> */}
        <Routes>
          <Route path="/" element={<Unreg_home />} />
          <Route path="/bookSaleDetails" element={<Book_sale_details/>}/>
          <Route path="/bookBidDetails" element={<Book_bid_details/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/editProfile" element={<Edit_profile/>}/>
          <Route path="/placeBid" element={<Place_bid/>}/>
          <Route path="/sidebar_admin" element={<Sidebar_admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/AddFor_Bid" element={<AddFor_Bid />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
