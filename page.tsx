"use client"; // needed for Framer Motion animations

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      {/* Hero */}
      <section id="home" className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">Hi, I’m Ridge 👋</h1>
          <p className="mt-4 text-xl text-gray-300">
            AI Automation & Workflow Designer
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-10 bg-gray-800">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-gray-300 max-w-2xl">
          I specialize in building workflow automations with n8n and AI guidance.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-10">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Workflow Automation</h3>
            <p className="text-gray-400 mt-2">Automated tasks using n8n and API integrations.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">Built with Next.js, deployed on Vercel.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-10 bg-gray-800">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6"
        >
          Contact
        </motion.h2>
        <p className="text-gray-300">Email: ridge@example.com</p>
      </section>

      <Footer />
    </div>
  );
}
