import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/Dev.json";

const Main = () => {
  const handleScroll = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="body" style={{ padding: "20px" }}>
      <div className="row w-100">
        <div className="col-12 col-md-6 ">
          <h1 className=" title">
            "Building scalable web applications with MERN Stack. Passionate
            about clean code and seamless user experiences." 🚀
          </h1>
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
              onClick={() => window.open("/Salmanul_Faris.pdf", "_blank")}
            >
              View My Resume
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "#7c5ccb",
                borderRadius: "10px",
              }}
              onClick={handleScroll}
            >
              Explore My Projects
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <Lottie
            className="lottie"
            animationData={animationData}
            style={{ width: 500, height: 400 }}
            loop={true} // Ensures infinite looping
            autoplay={true} // Automatically starts animation
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
