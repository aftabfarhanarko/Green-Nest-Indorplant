import React from "react";
import facbook from "../assets/facbook.png";
import linkdin from "../assets/linkdin.png";
import twiter from "../assets/twiter.png";
import github from "../assets/email.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="w-11/12 max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-primary">Green</span>Nest
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We offer a variety of plants that purify your air and beautify
            your space. 🌱 From plant care essentials to expert tips, we help
            your greens thrive effortlessly.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/aftabfarhanarko" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
              <img src={github} alt="GitHub" className="w-5 h-5 filter invert opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/aftabfarhan/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
              <img src={linkdin} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
              <img src={facbook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all">
              <img src={twiter} alt="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h6>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/plants" className="hover:text-primary transition-colors">All Plants</Link></li>
            <li><Link to="/profile" className="hover:text-primary transition-colors">My Profile</Link></li>
            <li><Link to="/auth/login" className="hover:text-primary transition-colors">Login / Register</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Support</h6>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Stay Updated</h6>
          <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest plant tips and exclusive offers.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="w-11/12 max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 GreenNest. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Designed with 💚 for Plant Lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// healthy indoor plants tree
