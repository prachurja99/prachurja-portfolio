"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function ExperiencePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-semibold">Experience & Honors</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Teaching, leadership, and academic recognitions that reflect my
          professional and academic journey.
        </p>
      </motion.div>

{/* EXPERIENCE TIMELINE */}
<div>
  <h2 className="text-2xl font-semibold mb-10">Experience</h2>

  <div className="relative space-y-12">
    {/* Vertical line */}
    <div className="absolute left-4 top-0 h-full w-px bg-white/10"></div>

    {/* Item 1 */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative pl-12"
    >
      {/* Dot */}
      <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-blue-500"></span>

      <h3 className="text-lg font-semibold text-white">
        Student Tutor — Object-Oriented Programming
      </h3>
      <p className="text-gray-400">
        BRAC University · Nov 2024 – May 2025
      </p>

      <ul className="mt-3 space-y-1 text-gray-300">
        <li>• Assisted undergraduate students with OOP concepts</li>
        <li>• Supported lab sessions and debugging activities</li>
        <li>• Helped improve code structure and problem-solving skills</li>
      </ul>
    </motion.div>

    {/* Item 2 */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative pl-12"
    >
      {/* Dot */}
      <span className="absolute left-3 top-2 h-3 w-3 rounded-full bg-blue-500"></span>

      <h3 className="text-lg font-semibold text-white">
        Instructor & Volunteer
      </h3>
      <p className="text-gray-400">
        BRAC “Srijon” Student Outreach Program
      </p>

      <ul className="mt-3 space-y-1 text-gray-300">
        <li>• Taught ICT and Social Science to school-level students</li>
        <li>• Delivered structured lessons and learning activities</li>
        <li>• Contributed to community education initiatives</li>
      </ul>
    </motion.div>
  </div>
</div>


      {/* AWARDS & HONORS */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Awards & Honors</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur flex items-start gap-4"
        >
          <div className="text-blue-400">
            <Award size={28} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Merit-Based Scholarship
            </h3>
            <p className="text-gray-400">
              BRAC University
            </p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Awarded a merit-based scholarship in recognition of strong
              academic performance and consistent results throughout my
              undergraduate studies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

