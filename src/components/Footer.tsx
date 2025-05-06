
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Gaurav Godambe</h3>
            <p className="text-navy-300 mb-4">
              Finance transformation leader and program manager with expertise in FP&A, 
              performance reporting, and technology-led change.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-light transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:Gaurav.g83@gmail.com" 
                className="text-white hover:text-accent-light transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="/Gaurav Godambe Resume.pdf" 
                download
                className="text-white hover:text-accent-light transition-colors"
                aria-label="Download Resume"
              >
                <Download size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-navy-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-navy-300 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-navy-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-navy-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-navy-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-navy-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Gaurav.g83@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Linkedin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <p className="text-navy-300 mt-4">
                  📍 Mumbai, India
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-12 pt-6 text-center text-navy-400">
          <p>© {currentYear} Gaurav Godambe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
