import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST API", level: 88 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 80 },
        { name: "DSA", level: 75 },
        { name: "Problem Solving", level: 82 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-white/80 backdrop-blur-sm opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-800 mt-6 max-w-2xl mx-auto font-medium">
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-100 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-blue-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                      <span className="text-sm font-bold text-blue-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills showcase */}
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "TypeScript", "Redux",  "Javascript","NodeJs",
              "Socket.io", "Razorpay", "JWT", "Express.js","MongoDB","ReactJs",
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-200 hover:border-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;