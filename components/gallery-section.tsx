"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
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

  const galleryItems = [
    {
      title: "Sound detection",
      description:
        "The sound detection works from 7 PM to 7 AM, with the camera activated for tracking.",
      img: "/mic.jpg",
    },
    {
      title: "Vision detection",
      description:
        "The vision detection works from 7 AM to 7 PM, and it's also used for tracking.",
      img: "/camera.jpg",
    },
    {
      title: "Solar Panel",
      description:
        "The solar panel system serves as an alternative power source in case of damage or when operating in areas without electricity, and it also helps reduce power consumption.",
      img: "/panel.jpg",
    },
    {
      title: "AI Model",
      description:
        "Our AI model detects and classifies Drones and UAVs in real time using visual and audio data, ensuring reliable day and night operation. It autonomously sends commands to tracking and jamming systems for rapid response.",
      img: "/AI.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 relative z-10">
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
            Project Gallery
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Visual documentation of our system architecture and testing results
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <div className=" relative">
                  <Image
                    src={`${item.img}`}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover  transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
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
