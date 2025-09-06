import React from "react";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const prefill = location.state?.prefill;

  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold dark:text-white">Contact Us</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Questions about programs, partnerships, or volunteering? Reach out.
          </p>

          <div className="mt-6">
            <p className="text-sm dark:text-white">Office</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              City, State — Registered as Section 8 nonprofit
            </p>

            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div>Email: hello@anshumat.org</div>
              <div>Phone: +91 98765 43210</div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm defaultValues={prefill} />
        </div>
      </div>
    </section>
  );
}
