import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";
import Reg_home from "./pages/Reg_home";
import Login from "./pages/Login";
import { createContext, useState } from "react";
import Add_book_for_sell from "./components/Add_book_for_sell";
import Add_book_for_bid from "./components/Add_book_for_bid";
import Unreg_home from "./pages/Unreg_home";
import Author_profile from "./pages/Author_profile";
import PostView from "./pages/PostView";
import Have_ISBN from "./pages/Have_ISBN";
import AddBook_Main from "./pages/AddBook_Main";
import AddBook_Main_2 from "./pages/AddBook_Main_2";

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
        <Routes>
          {/* <Route path="/" element={<Add_book_for_bid />} /> */}
          <Route path="/login" element={<Login />} />
          {/* If you meant /signUp instead of /signup, change the path accordingly */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Unreg_home" element={<Unreg_home/>}/>
          <Route path="/Author_profile" element={<Author_profile/>}/>
          <Route path="/PostView" element={<PostView/>}/>
          <Route path="/have_ISBN" element={<Have_ISBN/>}/>
          <Route path="/AddBook_Main" element={<AddBook_Main/>}/>
          <Route path="/" element={<AddBook_Main_2/>}/>

          {/* Redirect to home page if no matching route is found */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
