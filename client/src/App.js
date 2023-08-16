import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";
import Reg_home from "./pages/Reg_home";
import Login from "./pages/Login";
import { createContext, useState } from "react";
import Unreg_home from "./pages/Unreg_home";
import Book_sale_details from "./pages/Book_sale_details";
import Book_bid_details from "./pages/Book_bid_details";
import Profile from "./pages/Profile";

function App() {
  const isLoggedIn = false; //change this after authentication done

  const LoginContextProvider = ({ children }) => {
    const [logOrSignUp, setLogOrSignUp] = useState(true);
  };

  return (
    <div className="App bg-[#F5F5F5]">
      <div className="top w-full fixed top-0"></div>
      <header className="header">
        {isLoggedIn ? <Navbar_2 /> : <Navbar_1 />}
      </header>
      <main className="mt-[120px]">
        <Routes>
          <Route path="/" element={<Unreg_home />} />
          <Route path="/bookSaleDetails" element={<Book_sale_details/>}/>
          <Route path="/bookBidDetails" element={<Book_bid_details/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
