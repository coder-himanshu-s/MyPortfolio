import React, { useEffect, useRef } from "react";

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    { 
      title: "Chat Application", 
      description: "A real-time chat app with messaging, file sharing, and user authentication built with React, Node.js, and Socket.io.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB","Express.js"],
      image: "💬",
      link: "https://github.com/coder-himanshu-s/Chat-App",
      liveLink: "https://chat-app-2-l366.onrender.com/"
    },
    { 
      title: "LMS Platform", 
      description: "A comprehensive learning management system with course management, payment integration, and student progress tracking.",
      technologies: ["React", "Express.js", "MongoDB", "Razorpay","Javascript","NodeJs"],
      image: "📚",
      link: "https://github.com/coder-himanshu-s/Learning-Platform",
      liveLink: "https://learning-platform-2.onrender.com/"
    },
    { 
      title: "Trading UI Clone", 
      description: "A modern trading platform UI clone with real-time charts, portfolio management, and responsive design.",
      technologies: ["React","Chart.js", "Tailwind CSS","Javascript","NodeJs"],
      image: "📈",
      link: "https://github.com/coder-himanshu-s/ZERODHA",
      liveLink: "https://trading-ui-demo.com"
    },
    { 
      title: "Portfolio Website", 
      description: "Personal portfolio website with modern design, animations, and responsive layout.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "🎨",
      link: "https://github.com/coder-himanshu-s/MyPortfolio",
      liveLink: "https://myportfolio-m6pa.onrender.com/"
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-800 mt-6 max-w-2xl mx-auto font-medium">
            Here are some of the projects I've built. Each one represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-200 hover:border-blue-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-800 mb-4 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-semibold border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105"
                  >
                    Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-blue-600 text-blue-700 text-center py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/coder-himanshu-s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;