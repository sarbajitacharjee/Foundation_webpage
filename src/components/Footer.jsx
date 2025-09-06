import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t dark:border-slate-700">
      <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col gap-2">
          <div className="flex  items-center">
            <img src={logo} alt="company logo" width={60} />
            <div className="font-bold text-xl text-slate-900 dark:text-white">
              Anshumat Foundation
            </div>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-300">
            Section 8 nonprofit — empowering individuals through knowledge,
            mentorship, and career development.
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" /> Agartala, Tripura, India
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-primary" /> contact@anshumat.org
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" /> +91 12345 67890
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500 dark:text-slate-300 mt-4 md:mt-0">
          © {new Date().getFullYear()} Anshumat Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
