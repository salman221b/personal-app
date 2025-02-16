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
      <section id="home">
        <Main />
      </section>

      <section id="about"></section>
      <About />
      <section id="projects">
        {" "}
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <ScrollToTop />
    </div>
  );
}

export default App;
