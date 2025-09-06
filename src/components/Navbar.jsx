import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-800 shadow-sm md:sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo + Branding */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">
                Anshumat Foundation
              </div>
              <div className="text-xs text-slate-500 hidden md:block dark:text-slate-300">
                Empowering through knowledge & mentorship
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-brand font-medium"
                : "text-slate-600 dark:text-slate-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/mission"
            className={({ isActive }) =>
              isActive
                ? "text-brand font-medium"
                : "text-slate-600 dark:text-slate-300"
            }
          >
            Mission
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive
                ? "text-brand font-medium"
                : "text-slate-600 dark:text-slate-300"
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-brand font-medium"
                : "text-slate-600 dark:text-slate-300"
            }
          >
            Contact
          </NavLink>

          {/* Theme Switcher */}
          <button
            className="px-3 py-2 rounded-lg dark:text-white border dark:border-slate-700 text-sm flex items-center gap-2"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-600" />
            )}
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-600" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700"
          >
            {isOpen ? (
              <FaTimes className="text-xl text-slate-700 dark:text-slate-200" />
            ) : (
              <FaBars className="text-xl text-slate-700 dark:text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-800 shadow-lg z-50">
          <div className="flex flex-col p-4 gap-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-medium"
                  : "text-slate-600 dark:text-slate-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/mission"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-medium"
                  : "text-slate-600 dark:text-slate-300"
              }
            >
              Mission
            </NavLink>
            <NavLink
              to="/programs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-medium"
                  : "text-slate-600 dark:text-slate-300"
              }
            >
              Programs
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-medium"
                  : "text-slate-600 dark:text-slate-300"
              }
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-sm px-3 py-2 bg-brand text-white rounded-lg text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
