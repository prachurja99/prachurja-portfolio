"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Machine Learning & AI",
    skills: [
      "PyTorch (U-Net, Attention U-Net, custom training loops)",
      "TensorFlow / Keras (model prototyping)",
      "Natural Language Processing (ALBERT, Transformers)",
      "Speech Processing (Whisper, Wav2Vec 2.0)",
      "Model evaluation (WER, CER, Dice, IoU)",
    ],
  },
  {
    title: "Image Processing / Medical Imaging",
    skills: [
      "MRI image segmentation & classification",
      "Pixel-level prediction & evaluation",
      "Biomedical dataset handling",
      "CUDA-accelerated model training",
    ],
  },
  {
    title: "Systems & Low-Level Programming",
    skills: [
      "C programming & memory-level reasoning",
      "Assembly language (encryption/decryption systems)",
      "Understanding of low-level execution & performance",
    ],
  },
  {
    title: "Web & Software Engineering",
    skills: [
      "MERN stack (MongoDB, Express, React, Node.js)",
      "Django backend development",
      "RESTful API design & authentication",
      "Database integration",
    ],
  },
  {
    title: "Computer Graphics",
    skills: [
      "OpenGL-based 2D rendering",
      "Event-driven input handling",
      "Collision detection & game logic",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub (version control, collaboration)",
      "CUDA, NumPy, Pandas, Matplotlib",
      "Linux-based development workflows",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16"
      >
        <h1 className="text-3xl font-semibold">Technical Skills</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          A structured overview of my technical strengths across machine
          learning, systems, and software development.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: idx * 0.05,
            }}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur hover:border-white/20 transition"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {group.title}
            </h3>

            <ul className="space-y-2 text-gray-300 leading-relaxed">
              {group.skills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

