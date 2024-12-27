import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Toggler = () => {
  const { isToggler, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`rounded-full  px-5 py-2 cursor-pointer absolute top-10 right-10 ${
          isToggler ? "bg-white text-gray-500" : " bg-red-500 text-white"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Toggler;
