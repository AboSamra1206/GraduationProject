"use client"

import { motion } from "framer-motion"
import { Download, FileText, Presentation } from "lucide-react"

export default function DownloadsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const downloads = [
    {
      title: "Project Documentation",
      description: "Complete technical documentation and research findings",
      icon: FileText,
      format: "PDF",
      size: "15.2 MB",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Project Presentation",
      description: "Comprehensive presentation slides and visual materials",
      icon: Presentation,
      format: "PPTX",
      size: "28.7 MB",
      color: "from-orange-500 to-yellow-500",
    },
  ]

  return (
    <section id="downloads" className="py-20 bg-slate-800/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            Downloads
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access all project materials and presentations
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {downloads.map((download, index) => (
            <motion.div key={download.title} variants={fadeInUp} className="group relative">
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-6 hover:border-blue-500/50 transition-all duration-300">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${download.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${download.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <download.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{download.format}</div>
                      <div className="text-sm text-blue-400 font-medium">{download.size}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {download.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {download.description}
                  </p>

                  <motion.button
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download {download.format}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
