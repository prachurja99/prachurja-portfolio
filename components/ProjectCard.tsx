"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string[];
  tech: string;
  domain: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  domain,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur hover:border-blue-400/40 transition"
    >
      {/* Domain badge */}
      <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30">
        {domain}
      </span>

      <h3 className="text-lg font-semibold text-white mb-3">
        {title}
      </h3>

      <ul className="space-y-2 text-gray-300 leading-relaxed">
        {description.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-gray-400">
        <span className="text-gray-300 font-medium">Tech:</span> {tech}
      </p>
    </motion.div>
  );
}

