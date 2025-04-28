import Lottie from "lottie-react";
import React, { useRef, useState } from "react";
import animationData from "../assets/Resume.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xq04glg",
        "template_hubwkun",
        form.current,
        "XgiLvulQ_qgPGI3Pt"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully! 🚀");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again! ❌");
          setLoading(false);
        }
      );

    e.target.reset(); // To clear the form after submit
  };
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
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Salmanul_Faris.pdf";
              link.download = "Salmanul_Faris_CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </button>
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <form ref={form} onSubmit={sendEmail}>
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
                  name="name"
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
                  name="email"
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
                  name="query"
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
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#7c5ccb",
                    borderRadius: "10px",
                  }}
                >
                  {loading ? "Sending..." : "Send Your Query"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Container to show toasts */}
      <ToastContainer position="top-center" />

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
        <LinkedInIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://www.linkedin.com/in/salmanep/")}
        />
        <EmailIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open("mailto:epsalmaan@gmail.com")}
        />
        <GitHubIcon
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/salman221b")}
        />{" "}
      </div>
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        © 2025 Salmanul Faris - Crafting scalable web solutions with passion and
        precision.
      </p>
    </div>
  );
};

export default Contact;
