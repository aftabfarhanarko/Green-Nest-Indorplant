import React from "react";
import facbook from "../assets/facbook.png";
import linkdin from "../assets/linkdin.png";
import twiter from "../assets/twiter.png";
import github from "../assets/email.png";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <footer className=" flex-col-1 justify-between md:flex-row container mx-auto footer sm:footer-horizontal  p-10 text-white">
          <nav>
            <h6 className="footer-title">
              GreenNest Indoor Plant Care & Store
            </h6>
            <p className="max-w-[200px]">
              We offer a variety of plants that purify your air and beautify
              your space. 🌱 From plant care essentials to expert tips, we help
              your greens thrive effortlessly. 🌼 Transform your home into a
              peaceful, green haven with GreenNest! 🍃
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Conteact</h6>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/profile">My Profile</Link>
          </nav>

          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href="/" className="link link-hover">
              About
            </a>
            <a href="/auth/login" className="link link-hover">
              Contact
            </a>
            <a href="/profile" className="link link-hover">
              Profile
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Media Conteact</h6>

            <div className="flex gap-5 items-center">
              <div className="flex gap-2">
                <a
                  href="https://github.com/aftabfarhanarko"
                  className="link link-hover"
                >
                  <img src={github}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/aftabfarhan/"
                  className="link link-hover"
                >
                  <img src={linkdin}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a
                  href=" https://www.facebook.com/profile"
                  className="link link-hover"
                >
                  <img src={facbook}></img>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="https://x.com/home" className="link link-hover"></a>
                <img src={twiter}></img>
              </div>
            </div>
          </nav>
        </footer>
        <p className="text-white text-center py-6 border-t border-gray-400">
          © 2025 GreenNest. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
// healthy indoor plants tree
