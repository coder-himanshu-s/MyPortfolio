import React, { useEffect, useRef } from 'react';

const SocialLinks = () => {
  const socialRef = useRef(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/coder-himanshu-s",
      color: "hover:text-gray-800 hover:bg-gray-100",
      description: "Check out my code"
    },
    {
      name: "LeetCode",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019a.996.996 0 0 0-.02-.019l-4.277-4.193c-.652-.64-.972-1.469-.948-2.263a2.725 2.725 0 0 1 .066-.546 2.818 2.818 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l1.483 1.482a1.374 1.374 0 0 0 1.943 0l1.483-1.482c1.226-.992 3.372-.856 4.43.278l3.854 4.126a2.818 2.818 0 0 1 .619 1.164c.05.18.08.37.066.546a2.725 2.725 0 0 1-.948 2.263l-4.277 4.193-.02.019a.996.996 0 0 0-.02.019 3.021 3.021 0 0 1-4.205-.038l-2.396-2.392a1.378 1.378 0 0 0-1.951-.003c-.537.541-.537 1.415.003 1.955l2.396 2.392c2.211 2.207 5.815 2.239 8.063.074l.039-.038 4.277-4.193a5.938 5.938 0 0 0 1.271-1.818 5.83 5.83 0 0 0 .349-1.017 5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L16.884 6.226 12.478.438A1.374 1.374 0 0 0 11.517 0h1.966z"/>
        </svg>
      ),
      url: "https://leetcode.com/u/himanshuindia2004/",
      color: "hover:text-yellow-600 hover:bg-yellow-50",
      description: "My DSA solutions"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://www.linkedin.com/in/himanshu-sharma-2134a919b/",
      color: "hover:text-blue-700 hover:bg-blue-50",
      description: "Professional profile"
    },
    {
      name: "Gmail",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.909h3.819c.904 0 1.636.732 1.636 1.636z"/>
        </svg>
      ),
      url: "mailto:hs01042004@gmail.com",
      color: "hover:text-red-500 hover:bg-red-50",
      description: "Send me an email"
    }
  ];

  const handleResumeDownload = (type = 'pdf') => {
    if (type === 'html') {
      // Open HTML resume in new tab
      window.open('/resume.html', '_blank');
    } else {
      // Try to download the PDF resume
      const link = document.createElement('a');
      link.href = '/Himanshu_Sharma_Resume.pdf';
      link.download = 'Himanshu_Sharma_Resume.pdf';
      link.target = '_blank';
      
      // Add click event to trigger download
      link.click();
      
      // Fallback: if download doesn't work, open in new tab
      setTimeout(() => {
        window.open('/Himanshu_Sharma_Resume.pdf', '_blank');
      }, 100);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (socialRef.current) {
      observer.observe(socialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={socialRef} className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${social.color}`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{social.name}</h3>
              <p className="text-sm text-gray-600">{social.description}</p>
            </a>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleResumeDownload('pdf')}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Resume
            </button>
            
            <button 
              onClick={() => handleResumeDownload('html')}
              className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View HTML Resume
            </button>
          </div>
          
          <p className="text-gray-600 max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello! 
            I'm always excited to connect with fellow developers and tech enthusiasts.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;