"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"

export default function DocumentationSection() {
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

  return (
    <section id="documentation" className="py-20 bg-slate-800/30 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            Documentation
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technical documentation and research findings
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-blue-500/30 p-8 hover:border-blue-500/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Project Documentation</h3>
                      <p className="text-gray-400">Complete technical specifications and research methodology</p>
                    </div>
                  </div>
                  <motion.button
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </motion.button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold mb-1">Pages</div>
                    <div className="text-2xl font-bold text-white">120+</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold mb-1">Chapters</div>
                    <div className="text-2xl font-bold text-white">8</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold mb-1">File Size</div>
                    <div className="text-2xl font-bold text-white">15.2 MB</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
