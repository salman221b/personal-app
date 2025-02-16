import React from "react";
import pic from "../assets/my_dp.png";
import Marquee from "./Marquee";
const About = () => {
  return (
    <div className="about" style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>About Me</h2>
      <div className="row w-100">
        <div className="col-12 col-md-6">
          <img
            src={pic}
            alt="My Pic"
            style={{
              borderRadius: "150px",
              width: "100%",
              maxWidth: "100%", // Ensures the image never exceeds its container width
              height: "auto", // Maintains aspect ratio
              display: "block", // Removes extra spacing below the image
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-12 col-md-6">
          <p
            style={{
              textAlign: "justify",
              padding: "20px",
              fontSize: "20px",
              lineHeight: "2",
            }}
          >
            👋 Hi, I'm <b>Salmanul Faris</b> <br />I am a MERN Stack Developer
            with 3 years of experience, currently working at{" "}
            <b>
              <i>
                <a
                  href="https://www.infosys.com/"
                  style={{ textDecoration: "none" }}
                >
                  Infosys Private Limited
                </a>{" "}
              </i>
            </b>
            since March 7, 2022. Throughout my journey, I have developed and
            optimized full-stack web applications, focusing on performance,
            scalability, and user experience.
            <br />
            My technical expertise includes HTML, CSS, JavaScript, React.js,
            Node.js, Express.js, and MongoDB, along with other modern web
            technologies. I am passionate about solving complex problems,
            writing clean and efficient code, and continuously learning to stay
            updated with the latest advancements in web development.
            <br />
            🚀 Let's connect and build something great together!
          </p>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default About;
