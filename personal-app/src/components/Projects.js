import React from "react";
const Projects = () => {
  return (
    <div className="projects" style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>Projects</h2>
      <div className="row w-100" style={{ marginTop: "20px", padding: "20px" }}>
        <div className="col-12 col-lg-6 col-xl-4">
          <div
            style={{
              padding: "20px",
              //   backgroundColor: "#7c5ccb",
              border: "1px solid #7c5ccb",
              borderRadius: "10px",
              //   height: "400px",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>Yogkalarisamriddhi</h2>
            <h3>Project Description: Wellness Portal</h3>
            <p style={{ textAlign: "justify", lineHeight: 1.5 }}>
              &nbsp;&nbsp; Yogkalarisamriddhi is a wellness portal that channels
              the synergy of yoga therapy and traditional holistic practices to
              help users reconnect with their bodies, relieve stress, and
              nurture overall well-being. Through a clean, intuitive interface
              powered by React and supported by MERN-stack components, the site
              offers visitors a seamless, responsive experience that aligns with
              the brand’s ethos of balance, healing, and growth. The platform’s
              design reflects calm and clarity, aiming to create a digital space
              as restful and grounding as the wellness practices it promotes.
              Yogkalarisamriddhi stands as an example of how modern web
              technologies can be leveraged to deliver timeless philosophical
              and healing concepts in a user-friendly, accessible format. 🚀
            </p>
            <div
              className="buttons"
              style={{
                marginTop: "20px",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",

                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://github.com/salman221b/YogKalari");
                }}
              >
                GitHub Repo
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://www.yogkalarisamriddhi.com/#/");
                }}
              >
                Live Demo{" "}
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        <div className="col-12 col-lg-6 col-xl-4">
          <div
            style={{
              padding: "20px",
              //   backgroundColor: "#7c5ccb",
              border: "1px solid #7c5ccb",
              borderRadius: "10px",
              //   height: "400px",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>Doc Link</h2>
            <h3>Project Description: Telemedicine Platform</h3>
            <p style={{ textAlign: "justify", lineHeight: 1.5 }}>
              &nbsp;&nbsp; The Telemedicine Platform is a MERN-stack web
              application built to streamline digital healthcare by connecting
              patients and doctors through secure, role-based online
              consultations. With a clean, intuitive interface, users can book
              appointments, consult doctors via video or in-person options,
              access medical records, and receive real-time updates, while
              doctors can manage schedules, review patient histories, and share
              prescriptions. Protected routes and middleware-based
              authentication ensure data privacy, and a dynamic dashboard adapts
              features based on each user’s role. Designed for performance and
              accessibility across devices, the platform delivers a seamless
              experience that modernizes remote healthcare and enhances
              efficiency for both patients and medical professionals. 🚀
            </p>
            <div
              className="buttons"
              style={{
                marginTop: "20px",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",

                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://github.com/salman221b/doc-link");
                }}
              >
                GitHub Repo
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://doc-link-hco2.onrender.com/");
                }}
              >
                Live Demo{" "}
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        <div className="col-12 col-lg-6 col-xl-4">
          <div
            style={{
              padding: "20px",
              //   backgroundColor: "#7c5ccb",
              border: "1px solid #7c5ccb",
              borderRadius: "10px",
              //   height: "400px",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>Personal Portfolio</h2>
            <h3>Project Description: MERN Stack Developer Portfolio</h3>
            <p
              style={{
                textAlign: "justify",
                lineHeight: 1.5,
              }}
            >
              &nbsp;&nbsp; This MERN Stack Developer Portfolio is a modern
              platform crafted to showcase my skills, experience, and full-stack
              projects through a clean, responsive interface built with MongoDB,
              Express.js, React, and Node.js. Designed for recruiters and
              developers, it offers a seamless way to explore my technical
              expertise, real-world applications, and professional journey,
              including my ongoing experience at Infosys. The site reflects
              clarity and professionalism, featuring project highlights with
              tech stacks and GitHub links, an About Me section that shares my
              growth as a developer, and a contact form for effortless
              communication. Enhanced with dark/light mode, Lottie animations,
              and optimized performance, the portfolio represents a living,
              evolving space—continually updated to mirror my progress and
              connect me with opportunities across the developer community. 🚀
            </p>
            <div
              className="buttons"
              style={{
                marginTop: "20px",
                gap: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",

                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://github.com/salman221b/personal-app");
                }}
              >
                GitHub Repo
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  window.open("https://salman-one.vercel.app/");
                }}
              >
                Live Demo{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
