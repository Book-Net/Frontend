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
import Sellbook from "./components/Add_book_for_sell";
import BidSell from "./components/Bid_Sell";
import Add_book_for_bid from "./components/Add_book_for_bid";
import Unreg_home from "./pages/Unreg_home";
import BookForm from "./components/BookForm";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Appk from "./components/test/imgt";
import BookList from "./pages/BookList";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

function App() {
  const isLoggedIn = true; //change this after authentication done

  const LoginContextProvider = ({ children }) => {
    const [logOrSignUp, setLogOrSignUp] = useState(true);
  };

  return (
    <div className="App bg-[#F5F5F5]">
      <div className="fixed top-0 w-full top"></div>
      <header className="header">
        {isLoggedIn ? <Navbar_2 /> : <Navbar_1 />}
      </header>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <main className="mt-[120px]">
        <Routes>
          <Route path="*" element={<Add_book_for_bid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Unreg_home" element={<Unreg_home />} />
          <Route path="/Author_profile" element={<Author_profile />} />
          <Route path="/" element={<PostView />} />
          {/* Redirect to home page if no matching route is found */}
          <Route path="/" element={<Unreg_home />} />
          <Route path="/add-book" element={<BookForm />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/sell_book" element={<Sellbook />} />
          <Route path="/bid_sell" element={<BidSell />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
