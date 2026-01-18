import React from "react";
import pic from "../assets/my_dp.png";
import Marquee from "./Marquee";
import "./About.css";

const About = () => {
  return (
    <div className="container about-section">
      <h2 className="title text-start mb-5">About Me</h2>
      <div className="row align-items-center">
        <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "10px",
              bottom: "10px",
              borderRadius: "50%",
              background: "var(--accent-gradient)",
              zIndex: 0,
              filter: "blur(10px)",
              opacity: 0.7
            }}></div>
            <img
              src={pic}
              alt="Salmanul Faris"
              className="img-fluid rounded-circle position-relative"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                border: "4px solid var(--bg-secondary)",
                zIndex: 1
              }}
            />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="glass p-4 rounded-4">
            <p className="about-text mb-0" style={{ fontSize: "1.1rem", color: "var(--text-primary)" }}>
              👋 Hi, I'm <strong style={{ color: "var(--accent)" }}>Salmanul Faris</strong>. <br /><br />
              I am a MERN Stack Developer with 3 years of experience, currently working at{" "}
              <strong>
                <a
                  href="https://www.infosys.com/"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  Infosys Private Limited
                </a>
              </strong>{" "}
              since March 7, 2022. throughout my journey, I have developed and
              optimized full-stack web applications, focusing on performance,
              scalability, and seamless user experiences.
              <br /><br />
              My technical expertise includes HTML, CSS, JavaScript, React.js,
              Node.js, Express.js, and MongoDB, along with other modern web
              technologies. I am passionate about solving complex problems,
              writing clean code, and continuously learning.
              <br /><br />
              🚀 Let's connect and build something great together!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Marquee />
      </div>
    </div>
  );
};

export default About;
