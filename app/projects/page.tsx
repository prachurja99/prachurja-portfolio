"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Selected projects showcasing my work across machine learning,
          image processing, systems programming, and software development.
        </p>
      </motion.div>

      {/* ML & NLP */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">
          Machine Learning & NLP
        </h2>

        <div className="grid gap-8">
          <ProjectCard
            domain="Speech & NLP"
            title="Real-Time Closed Captioning for Bengali Multimedia"
            description={[
              "Built a low-latency Bengali speech-to-text system using fine-tuned Whisper and Wav2Vec 2.0 (XLS-R)",
              "Implemented VAD-based audio chunking, noise suppression, and overlapping-text removal",
              "Evaluated transcription quality using WER and CER metrics",
            ]}
            tech="PyTorch, Whisper, Wav2Vec 2.0, NLP"
          />

          <ProjectCard
            domain="NLP Classification"
            title="Disaster Tweet Classification"
            description={[
              "Developed multiple deep learning pipelines using RNN, Bi-LSTM, Bi-GRU, and ALBERT",
              "Classified disaster-related tweets for real-time crisis response",
              "Performed comparative analysis across architectures",
            ]}
            tech="Python, NLP, ALBERT, RNN"
          />
        </div>
      </div>

      {/* Image Processing */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">
          Image Processing / Medical Imaging
        </h2>

        <div className="grid gap-8">
          <ProjectCard
            domain="Medical Imaging"
            title="Brain Tumor MRI Segmentation & Classification"
            description={[
              "Implemented U-Net and Attention U-Net models for tumor segmentation",
              "Achieved high accuracy using Dice coefficient and IoU metrics",
              "Optimized training with CUDA acceleration and joint learning strategies",
            ]}
            tech="PyTorch, U-Net, Medical Imaging, CUDA"
          />
        </div>
      </div>

      {/* Web */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">
          Web Development
        </h2>

        <div className="grid gap-8">
          <ProjectCard
            domain="Full-Stack"
            title="JOBlent — Web-Based Job Portal"
            description={[
              "Contributed to a full-stack job portal for job posting and applications",
              "Developed frontend components and backend REST APIs",
              "Integrated MongoDB and followed version control best practices",
            ]}
            tech="MongoDB, Express, React, Node.js"
          />
        </div>
      </div>

      {/* Systems & Graphics */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">
          Systems & Computer Graphics
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            domain="Computer Graphics"
            title="Treasure Hunt — 2D Maze Game"
            description={[
              "Developed a 2D maze-based game using OpenGL",
              "Implemented real-time rendering, collision detection, and input handling",
            ]}
            tech="OpenGL, C++, Computer Graphics"
          />

          <ProjectCard
            domain="Systems Programming"
            title="Encryption–Decryption System"
            description={[
              "Built a secure text encryption-decryption system using Assembly language",
              "Implemented password protection and reversible encryption logic",
            ]}
            tech="Assembly Language, Low-Level Systems"
          />
        </div>
      </div>
    </section>
  );
}

