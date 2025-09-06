/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUserPlus,
  FaCheckCircle,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 dark:from-slate-900 dark:to-slate-900">
      <div className="container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight"
          >
            Empowering futures through knowledge, mentorship & career
            development
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-slate-600 dark:text-slate-300"
          >
            We connect learners and mentors, build skills, and open pathways to
            meaningful careers. Join our programs to learn, grow and give back.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-6 flex gap-4 flex-wrap"
          >
            <Link
              to="/programs"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md hover:scale-105 transition"
            >
              <FaUserPlus className="mr-2" /> Join Our Programs
            </Link>
            <Link
              to="/contact"
              className="
    relative inline-flex items-center px-6 py-3 rounded-lg text-sm overflow-hidden
    border border-slate-200 dark:border-slate-700
    transition-transform dark:text-white duration-300 ease-in-out hover:scale-105
  "
            >
              Contact Us <FaArrowRight className="ml-2" />
              <span
                className="absolute inset-0 border border-blue-400 rounded-lg opacity-0 hover:opacity-100 
                   animate-borderGlow pointer-events-none"
              ></span>
            </Link>
          </motion.div>

          {/* Features with Icons */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="mt-6 flex gap-4 flex-wrap text-sm text-slate-500 dark:text-slate-300"
          >
            <div className="flex items-center gap-1">
              <FaCheckCircle className="text-green-500" /> Nonprofit (Section 8)
            </div>
            <div className="flex items-center gap-1">
              <FaChartLine className="text-blue-500" /> Impact-driven
            </div>
            <div className="flex items-center gap-1">
              <FaHandsHelping className="text-purple-500" /> Volunteer & Mentor
            </div>
          </motion.div>
        </div>

        {/* Newsletter / Right Section */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md card p-6 rounded-xl shadow-lg bg-white dark:bg-slate-800">
            <h3 className="text-lg font-semibold mb-4">
              Get updates — join our newsletter
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              className="flex gap-2 flex-wrap"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 rounded-lg p-3 border dark:border-slate-700 input-focus"
              />
              <button className="px-4 py-3 bg-primary text-white rounded-lg hover:scale-105 transition flex items-center gap-1">
                Subscribe <FaArrowRight />
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              We send occasional updates about programs, mentorship calls and
              opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
