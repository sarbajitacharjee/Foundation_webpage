/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const initiatives = [
  { id: 1, title: 'Mentorship Circles', desc: 'Peer & industry mentor matching for career growth.' },
  { id: 2, title: 'Skill Bootcamps', desc: 'Short, project-driven bootcamps to build work-ready skills.' },
  { id: 3, title: 'Placement Support', desc: 'Resume workshops, interview prep & employer connects.' }
];

export default function Initiatives(){
  return (
    <section className="container py-10">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl font-semibold mb-6">Initiatives</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {initiatives.map(it => (
          <motion.div key={it.id} whileHover={{ y: -6 }} className="card">
            <h5 className="font-semibold">{it.title}</h5>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
            <div className="mt-4">
              <button className="px-3 py-2 rounded-md border dark:border-slate-700 text-sm">Learn more</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
