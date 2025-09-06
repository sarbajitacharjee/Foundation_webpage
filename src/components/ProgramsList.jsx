/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import programsData from '../data/programs.json'

export default function ProgramsList({ onRegister = () => {} }) {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    // Load data from JSON file
    setPrograms(programsData)
  }, [])

  return (
    <section className="container py-10">
      <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} className="text-2xl font-semibold mb-6">Programs</motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map(p => (
          <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="card p-4 shadow-md rounded-xl">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{p.dur}</p>
              </div>
              <div className="text-sm text-slate-400">● cohort</div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => onRegister(p)} className="px-4 py-2 rounded-lg bg-brand text-white text-sm">Register</button>
              <button className="px-3 py-2 rounded-lg border dark:border-slate-700 text-sm">Details</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
