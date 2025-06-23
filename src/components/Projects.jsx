import React from "react";

const projects = [
  { title: "Project One", description: "A chat app with real-time messaging and file sharing.", link: "#" },
  { title: "LMS Platform", description: "A learning system with course management and payment features.", link: "#" },
  { title: "Trading UI Clone", description: "A modern UI clone of a trading platform with real-time charts.", link: "#" }
];

const Projects = () => (
  <section className="py-16 px-8 bg-gray-100">
    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;