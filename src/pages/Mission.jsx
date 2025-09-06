import React from 'react'
import MissionSection from '../components/MissionSection'
import Initiatives from '../components/Initiatives'

export default function Mission(){
  return (
    <div>
      <section className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
        <p className="text-slate-600 dark:text-slate-300">Anshumat Foundation is a Section 8 nonprofit... (expand with your narrative)</p>
      </section>
      <MissionSection />
      <Initiatives />
    </div>
  )
}
