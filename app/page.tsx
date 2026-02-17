"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="relative">
          {/* subtle background glow */}
          <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Signature greeting */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              className="font-[var(--font-signature)] text-4xl md:text-5xl text-blue-400"
            >
              Hi, I’m Prachurja
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="mt-4 text-2xl md:text-3xl font-semibold text-white"
            >
              Computer Science and Engineering Student
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
              className="mt-6 text-gray-300 leading-relaxed max-w-xl"
            >
               Currently studying at BRAC University, with a strong interest in machine learning,
               image processing, and systems programming. I enjoy building reliable software by
               combining theoretical understanding with hands-on implementation.

            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-6"
            >
              <a
                href="/cv.pdf"
                download
                className="w-fit px-8 py-4 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
              >
                Download CV
              </a>

              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/profile.png"
            alt="Prachurja Bhattacharjee"
            width={380}
            height={380}
            className="rounded-xl border border-white/10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}



