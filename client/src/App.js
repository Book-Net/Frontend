import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Sellbook from "./components/Add_book_for_sell";
import BidSell from "./components/Bid_Sell";
import Add_book_for_bid from "./components/Add_book_for_bid";
import BookForm from "./components/BookForm";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import BookList from "./pages/BookList";
import Logout from "./components/Logout";

// context api
import { AuthProvider } from "./context/AppContext";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <div className="App bg-[#F5F5F5]">
        <div className="fixed top-0 w-full top"></div>
        <header className="header">
          <Navbar_1 />
        </header>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <main className="mt-[120px]">
          <Routes>
            <Route path="*" element={<Signup />} />
            <Route path="/" element={<PostView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Author_profile" element={<Author_profile />} />
            <Route path="/add-book" element={<BookForm />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/sell_book" element={<Sellbook />} />
            <Route path="/bid_sell" element={<BidSell />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
