import React from "react";
const Projects = () => {
  return (
    <div className="projects" style={{ padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>Projects</h2>
      <div className="row w-100" style={{ marginTop: "20px", padding: "20px" }}>
        <div className="col-12 col-md-6">
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
              &nbsp;&nbsp; The Telemedicine Platform is a MERN stack-based web
              application designed to connect patients and doctors seamlessly
              through digital consultations. The platform offers a user-friendly
              interface where patients can book appointments, consult doctors
              online, and access medical records, while doctors can manage
              appointments, view patient histories, and provide medical advice.
              For authentication, the system uses a middleware-based auth
              mechanism, ensuring secure access with role-based permissions for
              patients, doctors, and admins. The dashboard dynamically adapts,
              showing relevant features based on the user’s role. Protected
              routes ensure that only authorized users can access sensitive
              areas like medical records and consultations. The landing page
              welcomes first-time visitors and unregistered users, offering an
              engaging preview of the platform’s features. The appointment
              management system enables patients to schedule consultations as
              in-person, video, or tele-consultations, with doctors having the
              ability to approve, reschedule, or cancel them. A calendar
              integration provides an intuitive way to track appointments.
              Additional features include secure medical record storage,
              prescription generation, and real-time notifications. The system
              is optimized for performance, accessibility, and mobile
              responsiveness, ensuring smooth user experience across devices.
              This project aims to revolutionize remote healthcare services,
              enhancing accessibility and efficiency for both patients and
              doctors. 🚀
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
              >
                GitHub Repo
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",
                  borderRadius: "10px",
                }}
              >
                Live Demo{" "}
              </button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        <div className="col-12 col-md-6">
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
            <p style={{ textAlign: "justify", lineHeight: 1.5 }}>
              &nbsp;&nbsp; This MERN Stack Developer Portfolio is a personal
              website designed to showcase my skills, experience, and projects
              as a full-stack developer. Built using MongoDB, Express.js,
              React.js, and Node.js (MERN), this website serves as a
              professional platform for recruiters, developers, and co-workers
              to explore my technical expertise and past work. The website
              features a modern and responsive UI, ensuring seamless navigation
              across devices. The homepage introduces my professional
              background, skills, and achievements. The Projects section
              highlights real-world applications I have built, detailing their
              features, tech stacks, and GitHub links. The About Me section
              provides insights into my journey as a developer, including my
              experience at Infosys since March 7, 2022. To enhance user
              experience, I have integrated dark/light mode toggling,
              interactive animations using Lottie, and optimized images for
              faster load times. The site also includes a contact form for easy
              communication. Bootstrap is used for styling, ensuring a
              professional look across screen sizes. This portfolio is not just
              a resume but a living project, continuously updated with my latest
              work and skills, helping me connect with potential employers and
              fellow developers. 🚀
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
              >
                GitHub Repo
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: "#7c5ccb",
                  borderRadius: "10px",
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
