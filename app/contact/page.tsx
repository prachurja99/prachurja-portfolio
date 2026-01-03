"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irjadj5",
        "template_lk9eg7i",
        e.currentTarget,
        "u2Y7DkIih7_u3Ju3U"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16"
      >
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Feel free to reach out for collaboration, opportunities, or any
          questions. I am always open to meaningful conversations.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Card */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:prachurjabhattacharjee99@gmail.com"
                  className="text-gray-200 hover:text-blue-400 transition"
                >
                  prachurjabhattacharjee99@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <div className="flex items-center gap-4">
              <Phone className="text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:+8801305980392"
                  className="text-gray-200 hover:text-green-400 transition"
                >
                  +880 1305 980392
                </a>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <div className="flex items-center gap-4">
              <Github className="text-gray-300" />
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/prachurja99"
                  target="_blank"
                  className="text-gray-200 hover:text-white transition"
                >
                  github.com/prachurja99
                </a>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur">
            <div className="flex items-center gap-4">
              <Linkedin className="text-[#0A66C2]" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/prachurja-bhattacharjee-94568b281"
                  target="_blank"
                  className="text-gray-200 hover:text-[#0A66C2] transition"
                >
                  linkedin.com/in/prachurja-bhattacharjee
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur"
        >
          <h2 className="text-xl font-semibold mb-6">
            Send Me a Message
          </h2>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 bg-transparent border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />

            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 rounded bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}



