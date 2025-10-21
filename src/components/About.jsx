import React, { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white/80 backdrop-blur-sm opacity-0 transform translate-y-10 transition-all duration-1000 ease-out relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                MERN Stack Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                I'm a passionate developer focused on building clean, responsive, and performant web applications. 
                With expertise in the MERN stack, I love solving real-world problems using modern web technologies.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                When I'm not coding, you'll find me solving DSA problems on LeetCode, contributing to open-source projects, 
                or exploring new technologies to stay ahead of the curve.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border-2 border-blue-200 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-700 mb-2">1+</div>
                <div className="text-gray-800 font-semibold">Year in Development</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl border-2 border-purple-200 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-700 mb-2">5+</div>
                <div className="text-gray-800 font-semibold">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What I Do</h4>
                <div className="space-y-4">
                  {[
                    { icon: "💻", title: "Web Development", desc: "Full-stack web applications with modern frameworks" },
                    { icon: "📱", title: "Responsive Design", desc: "Mobile-first, accessible user interfaces" },
                    { icon: "🚀", title: "Performance", desc: "Optimized, scalable, and maintainable code" },
                    { icon: "🔧", title: "Problem Solving", desc: "Analytical thinking and efficient algorithms" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h5 className="font-bold text-gray-900">{item.title}</h5>
                        <p className="text-sm text-gray-700 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;