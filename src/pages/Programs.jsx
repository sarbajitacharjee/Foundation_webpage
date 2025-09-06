import React from 'react'
import ProgramsList from '../components/ProgramsList'

export default function Programs(){
  return (
    <div>
      <section className="container py-12">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Programs</h1>
        <p className="text-slate-600 dark:text-slate-300">Explore our programs designed to build skills and connect to opportunities.</p>
      </section>
      <ProgramsList />
    </div>
  )
}
