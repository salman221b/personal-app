import React, { useState } from "react";
import "./App.css";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="container-fluid ">
      <header className="App-header">
        <Navbar />
      </header>
      <Main />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
