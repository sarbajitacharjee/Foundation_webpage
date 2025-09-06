import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white dark:bg-slate-800 border-t dark:border-slate-700">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-lg text-slate-900 dark:text-white">Anshumat Foundation</div>
          <div className="text-sm text-slate-500 dark:text-slate-300">Section 8 nonprofit — empowering through knowledge & mentorship</div>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-300">© {new Date().getFullYear()} Anshumat Foundation. All rights reserved.</div>
      </div>
    </footer>
  )
}
