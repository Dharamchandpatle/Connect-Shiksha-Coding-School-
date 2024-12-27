import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextFile = (props) => {
  const [isToggler, setIsToggler] = useState(false);

  const toggleTheme = () => {
    setIsToggler(!isToggler);
  };

  const value = {
    isToggler,
    toggleTheme,
    setIsToggler,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextFile;
