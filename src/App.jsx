import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
    </div>
  );
};

export default App;
