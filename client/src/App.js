import "./App.css";
import Navbar_2 from "./components/Navbar_2";
// import Navbar_1 from "./components/Navbar_1";

function App() {
  return (
    <div className="App bg-[#F5F5F5]">
      <div className="top w-full"></div>
      <header className="header">
        {/* <Navbar_1 /> */}
        <Navbar_2 />
      </header>
    </div>
  );
}

export default App;
