import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

const Skills = () => (
  <section className="py-16 px-8 bg-white text-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-200 px-4 py-2 rounded text-sm font-medium">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;