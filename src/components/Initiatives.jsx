/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import initiativesData from "../data/initiatives.json";

export default function Initiatives() {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    // Load data from JSON file
    setInitiatives(initiativesData);
  }, []);

  return (
    <section className="container py-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl font-semibold mb-6"
      >
        Initiatives
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {initiatives.map((it) => (
          <motion.div
            key={it.id}
            whileHover={{ y: -6 }}
            className="card p-4 shadow-md rounded-xl"
          >
            <h5 className="font-semibold">{it.title}</h5>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {it.desc}
            </p>
            <div className="mt-4">
              <button className="px-3 py-2 rounded-md border dark:border-slate-700 text-sm font-medium shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50">
                Learn more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
