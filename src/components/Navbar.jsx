import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

export default function Navbar(){
  const { dark, setDark } = useContext(ThemeContext)

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-brand flex items-center justify-center text-white font-bold">A</div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">Anshumat Foundation</div>
              <div className="text-xs text-slate-500 dark:text-slate-300">Empowering through knowledge & mentorship</div>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-slate-600 dark:text-slate-300'}>Home</NavLink>
          <NavLink to="/mission" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-slate-600 dark:text-slate-300'}>Mission</NavLink>
          <NavLink to="/programs" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-slate-600 dark:text-slate-300'}>Programs</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-brand font-medium' : 'text-slate-600 dark:text-slate-300'}>Contact</NavLink>
          <button
            className="px-4 py-2 rounded-lg border dark:border-slate-700 text-sm"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>

        <div className="md:hidden">
          {/* Simple mobile menu shortcut */}
          <Link to="/contact" className="text-sm px-3 py-2 bg-brand text-white rounded-lg">Get Involved</Link>
        </div>
      </div>
    </nav>
  )
}
