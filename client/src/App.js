import "./App.css";
// import Main_image from "./components/Main_image";
// import Navbar_2 from "./components/Navbar_2";
import Navbar_1 from "./components/Navbar_1";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App bg-[#F5F5F5]">
      <div className="top w-full fixed top-0"></div>
      <header className="header">
        <Navbar_1 />
        {/* <Navbar_2 /> */}
      </header>
      <main className="mt-[120px]">
        {/* <Main_image /> */}
        <Signup />
      </main>
    </div>
  );
}

export default App;
