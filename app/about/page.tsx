"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";


export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
        <PageHeader title="About Me" />

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* LEFT — STORY CARDS */}
        <div className="space-y-8">
          {[
            {
              title: "Who I Am",
              text: `I am a Computer Science and Engineering undergraduate at BRAC University with a strong academic background and a deep interest in building practical, real-world systems.`,
            },
            {
              title: "How I Work",
              text: `I enjoy breaking down complex problems into manageable components and approaching them with a balance of theory and hands-on implementation.`,
            },
            {
              title: "What I Enjoy",
              text: `I am particularly drawn to projects that sit at the intersection of machine learning, image processing, and low-level system understanding.`,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT — FOCUS AREAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Focus Areas & Interests
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Image Processing",
              "Medical Imaging",
              "Natural Language Processing",
              "Software Engineering",
              "Systems Programming",
              "Computer Graphics (OpenGL)",
              "Assembly Language",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm rounded-full border border-blue-400/30 text-blue-300 bg-blue-500/10"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-400 leading-relaxed">
            I aim to continue developing depth in both high-level intelligent
            systems and low-level computing fundamentals, allowing me to build
            efficient, reliable, and impactful software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

