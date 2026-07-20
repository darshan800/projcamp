import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className=" text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-10 lg:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            Project<span className="text-violet-500">Camp</span>
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <a href="#" className="text-black">
            About
          </a>

          <span className="text-slate-600">|</span>

          <a href="#" className="text-black">
            Features
          </a>

          <span className="text-slate-600">|</span>

          <a href="#" className="text-black">
            FAQ
          </a>

          <span className="text-slate-600">|</span>

          <a href="#" className="text-black">
            Contact
          </a>

          <span className="text-slate-600">|</span>

          <a href="#" className="text-black">
            Privacy Policy
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5 text-2xl">
          <a href="#" className="text-black">
            <FaGithub />
          </a>

          <a href="#" className="text-black">
            <FaLinkedin />
          </a>

          <a href="#" className="text-black">
            <HiOutlineMail />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 ProjectCamp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;