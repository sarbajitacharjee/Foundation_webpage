/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaHandsHelping, FaStar } from "react-icons/fa";

export default function MissionSection() {
  const missionData = [
    {
      title: "Our Mission",
      desc: "To empower individuals with practical knowledge, mentorship, and career pathways — creating sustainable impact and meaningful opportunities.",
      icon: <FaBullseye className="text-primary text-3xl mb-2" />,
    },
    {
      title: "Our Approach",
      desc: "Structured programs, mentor-matching, hands-on projects, and partnerships with industry to bridge learning to livelihoods.",
      icon: <FaHandsHelping className="text-primary text-3xl mb-2" />,
    },
    {
      title: "Values",
      desc: (
        <ul className="space-y-2 list-disc list-inside">
          <li>Integrity & Transparency</li>
          <li>Inclusivity</li>
          <li>Impact-driven outcomes</li>
        </ul>
      ),
      icon: <FaStar className="text-primary text-3xl mb-2" />,
    },
  ];

  return (
    <section className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {missionData.map((item, idx) => (
          <div key={idx} className="card text-center p-6 shadow-md rounded-xl">
            <div className="icons flex items-center justify-center">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg dark:text-sky-500">
              {item.title}
            </h4>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
