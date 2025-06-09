"use client";

import { motion } from "framer-motion";
import { Eye, Volume2, Zap, Shield, ImageIcon, FileText } from "lucide-react";

export default function OverviewSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      title: "AI-Powered Detection",
      description:
        "Advanced YOLO Models for accurate Drones and UAVs Detection and Tracking.",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Audio Analysis",
      description: "Sophisticated CNN Model for sound pattern recognition",
      icon: Volume2,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Real-time Tracking",
      description: "Continuous monitoring and trajectory prediction",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Automated Response",
      description: "Intelligent countermeasure deployment system",
      icon: Shield,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Multi-sensor Fusion",
      description: "Integration of visual and auditory data streams",
      icon: ImageIcon,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Scalable Architecture",
      description: "Modular design for various deployment scenarios",
      icon: FileText,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="overview" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-400"
          >
            Project Overview
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            This project develops an integrated system for detecting, tracking,
            and blocking unauthorized Drones and UAVs in real time. It uses a
            camera-based AI vision module and microphone for visual and acoustic
            detection, followed by vision-based tracking. A custom-designed
            wideband helical antenna with a signal synthesizer transmits jamming
            signals to disrupt drone and UAV communications, ensuring accurate
            detection, continuous tracking, and effective neutralization.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/70">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
