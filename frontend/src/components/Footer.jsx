import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sarvesh Ramani</h3>
            <p className="text-slate-300 dark:text-slate-400 mb-4">
              Backend Developer passionate about creating scalable microservices and exploring AI/ML applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors block">About</a>
              <a href="/skills" className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors block">Skills</a>
              <a href="/experience" className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors block">Experience</a>
              <a href="/projects" className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors block">Projects</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:sarveshramani1004@gmail.com" className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors">
                  sarveshramani1004@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-slate-300 dark:text-slate-400">+91 8939072479</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                <a 
                  href="https://www.linkedin.com/in/sarvesh-ramani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-300 dark:text-slate-400">
            © 2025 Sarvesh Ramani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;