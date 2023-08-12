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
          <Route path="/login" element={<Login />} />
          {/* If you meant /signUp instead of /signup, change the path accordingly */}
          <Route path="/signup" element={<Signup />} />
          {/* Redirect to home page if no matching route is found */}
          <Route path="*" element={<Reg_home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
