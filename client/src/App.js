import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Edit_profile from "./pages/Edit_profile";
// import Place_bid from "./pages/Place_bid";
import Sidebar_admin from "./pages/Sidebar_admin";
import Login from "./pages/Login";
import Sellbook from "./components/Add_book_for_sell";
import BidSell from "./components/Bid_Sell";
import BookForm from "./components/BookForm";
import Booklist from "./pages/BookList";
// import Book_sale_details from "./pages/Book_sale_details";
import { createContext, useState } from "react";
import Unreg_home from "./pages/Unreg_home";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import BookList from "./pages/BookList";
import AddBook_Main from "./pages/AddBook_Main";
import AddBook_Main_2 from "./pages/AddBook_Main_2";
import Logout from "./components/Logout";
import Have_ISBN from "./pages/Have_ISBN";
import Book_sale_details from "./pages/Book_sale_details";
import Bid_interface from "./pages/Bid_interface";
import EmailVerify from "./components/EmailVerify";
import BookSellDetails from "./pages/Book_sale_details";
import Add_book_for_bid from "./components/Add_book_for_bid";
import CreatePost from "./pages/CreatePost";
import PaymentSuccess from "./pages/checkout-success";
import Bid_Sell from "./components/Bid_Sell";
import Posts from "./components/Posts";
import Dashboard_Admin from "./components/Dashboard_admin";
import Don_interface from "./pages/donate_interface";
import Ex_interface from "./pages/Ex_interface";
import Contact from "./pages/Contact_us";
import About from "./pages/AboutUs";

// context api
import { useAuth } from "./context/AppContext";
import Become_author from "./pages/Become_author";
// import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

function App() {
  // const navigate = useNavigate();

  const { user } = useAuth();
  axios.defaults.headers.common["x-access-token"] = user;
  return (
    <div className="App bg-[#F5F5F5]">
      <div className="fixed top-0 w-full top"></div>
      <header className="header">
        <Navbar_1 />
      </header>
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <main className="mt-[120px]">
        <Routes>
          <Route path="*" element={<Login />} />
          {/* <Route path="/postView" element={<PostView />} /> */}
          {/* <Route path="/placeBid" element={<Place_bid />} /> */}
          <Route path="/sidebar_admin" element={<Sidebar_admin />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/aboutUs" element={<About />} />
          {/* <Route path="/editProfile" element={<Edit_profile />} /> */}
          {/* <Route path="/" element={<Add_book_for_bid />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Author_profile" element={<Author_profile />} />
          //
          {/* <Route path="/booksell_detail/:id" element={<Book_sale_details />} /> */}
          {/* <Route path="/bid_interface/:id" element={<Bid_interface />} /> */}
          {/* <Route path="/exchange_interface/:id" element={<Ex_interface />} /> */}
          {/* <Route path="/donate_interface/:id" element={<Don_interface />} /> */}
          //
          <Route
            path="/booksell_detail/:id"
            element={user ? <Book_sale_details /> : <Navigate to="/login" />}
          />
          <Route
            path="/bid_interface/:id"
            element={user ? <Bid_interface /> : <Navigate to="/login" />}
          />
          <Route
            path="/exchange_interface/:id"
            element={user ? <Ex_interface /> : <Navigate to="/login" />}
          />
          <Route
            path="/donate_interface/:id"
            element={user ? <Don_interface /> : <Navigate to="/login" />}
          />
          <Route
            path="/postView"
            element={user ? <PostView /> : <Navigate to="/login" />}
          />
          <Route
            path="/add_book"
            element={user ? <AddBook_Main /> : <Navigate to="/login" />}
          />
          <Route
            path="/editProfile"
            element={user ? <Edit_profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/becomeAuthor"
            element={user ? <Become_author /> : <Navigate to="/login" />}
          />
          <Route
            path="/add_book_2"
            element={user ? <AddBook_Main_2 /> : <Navigate to="/login" />}
          />
          <Route
            path="/have_isbn"
            element={user ? <Have_ISBN /> : <Navigate to="/login" />}
          />
          <Route
            path="/createPost"
            element={user ? <CreatePost /> : <Navigate to="/login" />}
          />
          <Route
            path="/Dashboard_admin"
            element={user ? <Dashboard_Admin /> : <Navigate to="/login" />}
          />
          <Route
            path="/checkout-success"
            element={user ? <PaymentSuccess /> : <Navigate to="/login" />}
          />
          <Route
            path="//booksell_detail/:id"
            element={user ? <BookSellDetails /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<BookList />} />
          {/* <Route path="/sell_book" element={<Sellbook />} /> */}
          <Route path="/bid_sell" element={<Bid_Sell />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/bookList" element={<Booklist />} />
          {/* <Route path="/createPost" element={<CreatePost />} /> */}
          <Route path="/Post" element={<Posts />} />
          {/* <Route path="/booksell_detail/:id" element={<BookSellDetails />} /> */}
          {/* <Route path="/add_book" element={<Logout />} /> */}
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
