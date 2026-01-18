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
    <div className="container py-5" id="contact">
      <h2 className="title text-start mb-5">Contact</h2>
      <div className="row align-items-center reverse-column-sm">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
          <div style={{ maxWidth: "500px", width: "100%" }}>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
          <button
            className="btn-primary mt-4"
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

        <div className="col-12 col-md-6">
          <div className="glass p-4 p-md-5 rounded-4 contact-form-container">
            <h3 className="h4 font-weight-bold mb-4" style={{ color: "var(--text-primary)" }}>Send a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 1,
                    "& .MuiInputBase-root": { backgroundColor: "transparent" }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 1
                  }}
                />
                <TextField
                  fullWidth
                  label="Query"
                  name="query"
                  multiline
                  rows={4}
                  variant="filled"
                  required
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 1
                  }}
                />
              </Box>

              <div className="d-flex justify-content-start">
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading}
                  style={{ minWidth: "150px" }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" theme="colored" />

      <div className="mt-5 pt-5 d-flex justify-content-center gap-5">
        <LinkedInIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "var(--text-secondary)", "&:hover": { color: "var(--accent)" }, transition: "color 0.3s" }}
          onClick={() => window.open("https://www.linkedin.com/in/salman221b")}
        />
        <EmailIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "var(--text-secondary)", "&:hover": { color: "var(--accent)" }, transition: "color 0.3s" }}
          onClick={() => window.open("mailto:epsalmaan@gmail.com")}
        />
        <GitHubIcon
          sx={{ fontSize: 40, cursor: "pointer", color: "var(--text-secondary)", "&:hover": { color: "var(--accent)" }, transition: "color 0.3s" }}
          onClick={() => window.open("https://github.com/salman221b")}
        />
      </div>

      <p className="text-center mt-4" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
        © 2025 Salmanul Faris - Crafting scalable web solutions.
      </p>
    </div>
  );
};

export default Contact;
