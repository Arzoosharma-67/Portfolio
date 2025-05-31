import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Certificate from "./Certificate";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`, "transition-theme");
  }, [theme]);

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </>
  );
}

export default App;
