import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/Resume.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  return (
    <div className="contact" style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>Contact</h2>
      <div className="row w-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Lottie
            className="lottie"
            animationData={animationData}
            style={{ width: 500, height: 400 }}
            loop={true}
            autoplay={true}
          />
          <button
            className="btn mt-3"
            style={{
              backgroundColor: "#7c5ccb",
              borderRadius: "10px",
              padding: "10px 20px",
              border: "none",
            }}
          >
            Download Resume
          </button>
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div
            style={{
              padding: "20px",
              //   backgroundColor: "#7c5ccb",
              border: "1px solid #7c5ccb",
              borderRadius: "10px",
              //   height: "400px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <h2 style={{ fontWeight: "bold" }}>Contact Form</h2>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "white",

                  borderRadius: "10px",
                }}
              />
              <TextField
                fullWidth
                label="Email"
                id="fullWidth"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "white",

                  borderRadius: "10px",
                }}
              />
              <TextField
                fullWidth
                label="Query"
                id="fullWidth"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "white",

                  borderRadius: "10px",
                }}
              />
            </Box>

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
              >
                Sent Your Query
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------------------
      ----------------------------------------------- */}
      <div
        style={{
          padding: "20px",
          marginTop: "50px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25%",
        }}
      >
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />{" "}
      </div>
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        © 2025 Salmanul Faris - Crafting scalable web solutions with passion and
        precision.
      </p>
    </div>
  );
};

export default Contact;
