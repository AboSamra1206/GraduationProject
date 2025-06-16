"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Shield, Eye, Volume2 } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Team Image Placeholder */}
          <div className="w-full max-w-4xl mx-auto mb-12 relative group">
            <motion.div
              className="relative overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-slate-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/project.jpg"
                alt="Project Photo"
                width={800}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4"></div>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent leading-tight"
          {...fadeInUp}
        >
          AI-Based Vision and Audio System
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-300"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          for Drone and UAV Detection and Tracking.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Advanced AI-powered system combining computer vision and audio
          processing to detect and track unauthorized Drones and
          UAVs activities with precision and efficiency.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: Eye, label: "Computer Vision" },
            { icon: Volume2, label: "Audio Processing" },
            { icon: Zap, label: "Real-time Detection" },
            { icon: Shield, label: "Anti Drones And UAVs System" },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(83,135,207,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <feature.icon className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
}
