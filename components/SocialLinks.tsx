"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex items-center gap-6 mt-6"
    >
      {/* GitHub */}
      <a
        href="https://github.com/prachurja99"
        target="_blank"
        aria-label="GitHub"
        className="text-gray-300 hover:text-white transition"
      >
        <Github size={28} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/prachurja-bhattacharjee-94568b281"
        target="_blank"
        aria-label="LinkedIn"
        className="text-[#0A66C2] hover:brightness-125 transition"
      >
        <Linkedin size={28} />
      </a>

      {/* Email */}
      <a
        href="mailto:prachurjabhattacharjee99@gmail.com"
        aria-label="Email"
        className="text-red-400 hover:brightness-125 transition"
      >
        <Mail size={28} />
      </a>

      {/* Phone */}
      <a
        href="tel:+8801305980392"
        aria-label="Phone"
        className="text-green-400 hover:brightness-125 transition"
      >
        <Phone size={28} />
      </a>
    </motion.div>
  );
}

