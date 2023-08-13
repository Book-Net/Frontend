import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Main_image from "./components/Main_image";
import Navbar_1 from "./components/Navbar_1";
import Navbar_2 from "./components/Navbar_2";
import Signup from "./pages/Signup";

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
        {/* <Main_image /> */}
        <Signup />
      </main>
    </div>
  );
}

export default App;
