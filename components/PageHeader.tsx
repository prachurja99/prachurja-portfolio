"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="font-[var(--font-signature)] text-4xl md:text-5xl text-blue-400 mb-12"
    >
      {title}
    </motion.h1>
  );
}
