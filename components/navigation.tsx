"use client"

import { motion } from "framer-motion"

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="text-xl font-bold text-blue-400" whileHover={{ scale: 1.05 }}>
            DRONE DETECTION AI
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Overview", "Documentation", "Gallery", "Downloads"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
