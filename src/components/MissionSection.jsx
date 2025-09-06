/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

export default function MissionSection(){
  return (
    <section className="container py-12">
      <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h4 className="font-semibold text-lg">Our Mission</h4>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">To empower individuals with practical knowledge, mentorship, and career pathways — creating sustainable impact and meaningful opportunities.</p>
        </div>

        <div className="card">
          <h4 className="font-semibold text-lg">Our Approach</h4>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Structured programs, mentor-matching, hands-on projects, and partnerships with industry to bridge learning to livelihoods.</p>
        </div>

        <div className="card">
          <h4 className="font-semibold text-lg">Values</h4>
          <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2 list-disc list-inside">
            <li>Integrity & Transparency</li>
            <li>Inclusivity</li>
            <li>Impact-driven outcomes</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
