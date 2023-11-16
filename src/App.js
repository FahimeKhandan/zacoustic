import { useState } from "react";
import "./App.css";
import TeamInfo from "./components/TeamInfo";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const side =
    "w-[390px] bg-white h-screen  transform transition-all fixed duration-700 flex justify-center left-full";
  const activeSide = " -translate-x-[390px]";

  return (
    <div className="flex w-full h-screen">
      <div className="bg-gray-700 grow p-10">
        <button
          className="bg-gray-200 p-4 text-primary-text"
          onClick={() => setIsMenuOpen(true)}
        >
          Open The Menu
        </button>
      </div>

      <div className={`${side} ${isMenuOpen ? activeSide : ""}`}>
        <TeamInfo/>
      </div>
    </div>
  );
}

export default App;
