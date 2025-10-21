import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
      link.click();
      
      // Fallback: if download doesn't work, open in new tab
      setTimeout(() => {
        window.open('/Himanshu_Sharma_Resume.pdf', '_blank');
      }, 100);
    }
  };
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Himanshu Sharma
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Passionate MERN Stack Developer creating innovative web solutions and solving complex problems through code.
            </p>
            <div className="space-y-2">
              <button 
                onClick={() => handleResumeDownload('pdf')}
                className="block w-full text-blue-400 hover:text-blue-300 transition-colors duration-300 underline text-sm"
              >
                📄 Download PDF Resume
              </button>
              <button 
                onClick={() => handleResumeDownload('html')}
                className="block w-full text-blue-400 hover:text-blue-300 transition-colors duration-300 underline text-sm"
              >
                🌐 View HTML Resume
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 hs01042004@gmail.com</p>
              <p>📱 +91 8755439947</p>
              <p>📍 Ghaziabad, India</p>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            {[
              { 
                name: "GitHub", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ), 
                href: "https://github.com/coder-himanshu-s" 
              },
              { 
                name: "LinkedIn", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ), 
                href: "https://www.linkedin.com/in/himanshu-sharma-2134a919b/" 
              },
              { 
                name: "Gmail", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.909h3.819c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                ), 
                href: "mailto:hs01042004@gmail.com" 
              },
              { 
                name: "LeetCode", 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019a.996.996 0 0 0-.02-.019l-4.277-4.193c-.652-.64-.972-1.469-.948-2.263a2.725 2.725 0 0 1 .066-.546 2.818 2.818 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l1.483 1.482a1.374 1.374 0 0 0 1.943 0l1.483-1.482c1.226-.992 3.372-.856 4.43.278l3.854 4.126a2.818 2.818 0 0 1 .619 1.164c.05.18.08.37.066.546a2.725 2.725 0 0 1-.948 2.263l-4.277 4.193-.02.019a.996.996 0 0 0-.02.019 3.021 3.021 0 0 1-4.205-.038l-2.396-2.392a1.378 1.378 0 0 0-1.951-.003c-.537.541-.537 1.415.003 1.955l2.396 2.392c2.211 2.207 5.815 2.239 8.063.074l.039-.038 4.277-4.193a5.938 5.938 0 0 0 1.271-1.818 5.83 5.83 0 0 0 .349-1.017 5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L16.884 6.226 12.478.438A1.374 1.374 0 0 0 11.517 0h1.966z"/>
                  </svg>
                ), 
                href: "https://leetcode.com/u/himanshuindia2004/" 
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-400"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {currentYear} Himanshu Sharma. All rights reserved. 
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Made with passion for creating amazing web experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
