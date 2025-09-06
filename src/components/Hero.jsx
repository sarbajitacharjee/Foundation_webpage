/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 dark:from-slate-900 dark:to-slate-900">
      <div className="container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Empowering futures through knowledge, mentorship & career development
          </motion.h1>
          <motion.p initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.7}} className="mt-4 text-slate-600 dark:text-slate-300">
            We connect learners and mentors, build skills, and open pathways to meaningful careers. Join our programs to learn, grow and give back.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <Link to="/programs" className="inline-block px-6 py-3 rounded-lg bg-brand text-white font-semibold shadow-md">Join Our Programs</Link>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-sm">Contact Us</Link>
          </div>

          <div className="mt-6 flex gap-4 text-sm text-slate-500 dark:text-slate-300">
            <div>✅ Nonprofit (Section 8)</div>
            <div>📈 Impact-driven</div>
            <div>🤝 Volunteer & Mentor</div>
          </div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="flex justify-center md:justify-end">
          <div className="w-full max-w-md card">
            <h3 className="text-lg font-semibold mb-2">Get updates — join our newsletter</h3>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}} className="flex gap-2">
              <input type="email" required placeholder="Your email" className="flex-1 rounded-lg p-3 border dark:border-slate-700 input-focus" />
              <button className="px-4 py-2 bg-primary text-white rounded-lg">Subscribe</button>
            </form>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">We send occasional updates about programs, mentorship calls and opportunities.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
