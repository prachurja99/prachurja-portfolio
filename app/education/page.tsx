"use client";

import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-semibold">Education</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          My academic background and achievements throughout my educational
          journey.
        </p>
      </motion.div>

      {/* UNIVERSITY CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-white">
          BRAC University
        </h2>
        <p className="mt-1 text-gray-400">
          Bachelor of Science in Computer Science & Engineering
        </p>

        <div className="mt-6 flex flex-wrap gap-6 items-center">
          <div>
            <p className="text-sm text-gray-400">Duration</p>
            <p className="text-gray-200">
              January 2022 – Present
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">CGPA</p>
            <p className="text-xl font-semibold text-blue-400">
              3.87 / 4.00
            </p>
          </div>
        </div>
      </motion.div>

      {/* SCHOOL EDUCATION */}
      <div>
        <h2 className="text-2xl font-semibold mb-10">
          School & College Education
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* HSC */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="mt-1 text-gray-400">
              Govt. Hazi Muhammad Mohsin College, Chattogram
            </p>
            <p className="mt-4 text-gray-300">
              <span className="text-gray-400">Year:</span> 2019 – 2020
            </p>
            <p className="text-blue-400 font-semibold">
              GPA: 5.00
            </p>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">
              Secondary School Certificate (SSC)
            </h3>
            <p className="mt-1 text-gray-400">
              Chattogram Collegiate School
            </p>
            <p className="mt-4 text-gray-300">
              <span className="text-gray-400">Year:</span> 2018
            </p>
            <p className="text-blue-400 font-semibold">
              GPA: 5.00
            </p>
          </motion.div>

          {/* JSC */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">
              Junior School Certificate (JSC)
            </h3>
            <p className="mt-1 text-gray-400">
              St. Placid High School and College
            </p>
            <p className="mt-4 text-gray-300">
              <span className="text-gray-400">Year:</span> 2015
            </p>
            <p className="text-blue-400 font-semibold">
              GPA: 5.00
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

