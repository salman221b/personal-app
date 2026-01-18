import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/Dev.json";

const Main = () => {
  const handleScroll = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="row w-100 align-items-center reverse-column-sm">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="title text-start mb-4" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
            Building scalable web applications with <span style={{ color: "var(--accent)" }}>MERN Stack</span>.
          </h1>
          <p className="mb-4" style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
            Passionate about clean code and seamless user experiences.
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start">
            <button
              className="btn-primary"
              onClick={handleScroll}
            >
              Explore My Projects
            </button>
            <button
              className="btn-secondary"
              onClick={() => window.open("/Salmanul_Faris.pdf", "_blank")}
            >
              View My Resume
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div style={{ maxWidth: "500px", width: "100%" }}>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
