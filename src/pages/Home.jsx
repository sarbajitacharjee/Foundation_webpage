import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import ProgramsList from "../components/ProgramsList";
import { useNavigate } from "react-router-dom";
import Initiatives from "../components/Initiatives";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <MissionSection />
      <Initiatives />
      <ProgramsList
        onRegister={(p) => navigate("/contact", { state: { prefill: p } })}
      />
      <section className="container py-10">
        <div className="card text-center">
          <h3 className="text-xl dark:text-slate-100 font-semibold">
            Want to support our work?
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Partner with us — sponsor programs, volunteer as a mentor or refer
            candidates.
          </p>
          <div className="mt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-4 py-2 rounded-lg bg-primary text-white"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
