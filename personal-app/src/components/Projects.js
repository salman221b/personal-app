import React from "react";

const projectsData = [
  {
    title: "Yogkalarisamriddhi",
    subtitle: "Wellness Portal",
    description: "Yogkalarisamriddhi is a wellness portal that channels the synergy of yoga therapy and traditional holistic practices. Built with MERN stack, it offers a seamless, responsive experience aligning with the brand’s ethos of balance and healing.",
    github: "https://github.com/salman221b/YogKalari",
    demo: "https://www.yogkalarisamriddhi.com/#/",
  },
  {
    title: "Doc Link",
    subtitle: "Telemedicine Platform",
    description: "Doc Link connects patients and doctors through secure, role-based online consultations. Features include appointment booking, video consultations, and medical record management, all protected by robust authentication.",
    github: "https://github.com/salman221b/doc-link",
    demo: "https://doc-link-hco2.onrender.com/",
  },
  {
    title: "Personal Portfolio",
    subtitle: "MERN Stack Developer Portfolio",
    description: "A modern platform showcasing skills and projects. Built with React and Node.js, it features a clean interface, dark/light mode, and smooth animations to represent my professional journey.",
    github: "https://github.com/salman221b/personal-app",
    demo: "https://salman-one.vercel.app/",
  },
];

const ProjectCard = ({ project }) => (
  <div className="col-12 col-lg-6 col-xl-4 d-flex">
    <div className="glass p-4 rounded-4 mb-4 d-flex flex-column w-100 position-relative project-card" style={{ transition: "transform 0.3s ease" }}>
      <h3 className="h4 font-weight-bold mb-1" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
      <h4 className="h6 mb-3" style={{ color: "var(--accent)" }}>{project.subtitle}</h4>
      <p className="flex-grow-1 mb-4" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
        {project.description}
      </p>
      <div className="d-flex gap-3 mt-auto">
        <button
          className="btn-primary"
          style={{ padding: "8px 16px", fontSize: "0.9rem" }}
          onClick={() => window.open(project.github)}
        >
          GitHub
        </button>
        <button
          className="btn-secondary"
          style={{
            padding: "8px 16px",
            fontSize: "0.9rem"
          }}
          onClick={() => window.open(project.demo)}
        >
          Live Demo
        </button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="container py-5" id="projects">
      <h2 className="title text-start mb-5">Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
