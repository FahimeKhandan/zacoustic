import { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const side =
    "w-96 bg-white h-screen  transform transition-all fixed duration-7000 text-white flex justify-center p-2 left-full";
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

      <div className={`${side} ${isMenuOpen ? activeSide : ""}`}></div>
    </div>
  );
}

export default App;
