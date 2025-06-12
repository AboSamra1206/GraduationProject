"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-blue-500/20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            AI-Based Vision and Audio System for Drone and UAV Detection,
            Tracking and Blocking{" "}
          </h3>
          <p className="text-gray-400 mb-6">
            Advanced Drones and UAVs detection and countermeasure technology
          </p>
          <div className="text-sm text-gray-500">
            © 2025 Graduation Project. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
