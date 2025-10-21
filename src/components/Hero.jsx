import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-4">
        <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight drop-shadow-sm">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">Himanshu</span>
              </h1>
              <p className="text-2xl text-gray-800 font-semibold drop-shadow-sm">
                MERN Stack Developer & DSA Enthusiast
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Passionate about creating innovative web solutions and solving complex problems through code.
              </p>
            </div>
            
            {/* Additional personal information */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-200 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 What Drives Me</h3>
              <div className="space-y-3 text-gray-800">
                <p className="flex items-center gap-3 font-medium">
                  <span className="text-blue-600 text-xl">💻</span>
                  <span>Building scalable web applications that solve real-world problems</span>
                </p>
                <p className="flex items-center gap-3 font-medium">
                  <span className="text-purple-600 text-xl">🧠</span>
                  <span>Solving complex DSA problems and optimizing algorithms</span>
                </p>
                <p className="flex items-center gap-3 font-medium">
                  <span className="text-green-600 text-xl">🌱</span>
                  <span>Continuously learning and staying updated with latest technologies</span>
                </p>
                <p className="flex items-center gap-3 font-medium">
                  <span className="text-orange-600 text-xl">🤝</span>
                  <span>Collaborating with teams to create amazing user experiences</span>
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-700">1+</div>
                <div className="text-sm text-gray-700 font-medium">Year in Development</div>
              </div>
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-purple-200 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-700">5+</div>
                <div className="text-sm text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-green-200 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-sm text-gray-700 font-medium">DSA Problems Solved</div>
              </div>
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-orange-200 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-orange-700">1200+</div>
                <div className="text-sm text-gray-700 font-medium">Rating @Codeforces</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl bg-white/80 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Current status */}
            <div className="flex items-center gap-3 text-sm text-gray-800 font-medium bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities and collaborations.</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            {/* Animated background elements */}
            <div className="absolute -top-4 -right-4 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-8 -left-4 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-30 animate-blob animation-delay-4000"></div>
            
            {/* Profile image placeholder with better styling */}
            <div className="relative z-20">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl rounded-full">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-600 font-bold">
                  HS
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border-2 border-blue-200 animate-float hover:scale-110 transition-transform duration-300">
              <div className="text-2xl">⚛️</div>
            </div>
            <div className="absolute top-20 -right-12 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border-2 border-purple-200 animate-float animation-delay-2000 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl">🚀</div>
            </div>
            <div className="absolute -bottom-12 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl border-2 border-green-200 animate-float animation-delay-4000 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl">💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
