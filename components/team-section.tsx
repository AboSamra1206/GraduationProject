"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import type { TeamMember } from "@/types/team";

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you might fetch this from an API
    import("@/data/team-members.json")
      .then((data) => {
        setTeamMembers(data.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load team members:", error);
        setIsLoading(false);
      });
  }, []);

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

  return (
    <section id="team" className="py-20 bg-slate-800/30 relative z-10">
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
            Our Team
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Meet the brilliant minds behind our innovative drone detection
            system
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-blue-400 border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/70 flex flex-col items-center">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -60],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 1 + Math.random() * 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Image with animated border */}
                    <div className="relative mb-4 group-hover:scale-105 transition-transform duration-500">
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDuration: "8s" }}
                      ></div>
                      <div className="absolute inset-0.5 rounded-full bg-slate-800"></div>
                      <div className="relative rounded-full overflow-hidden w-32 h-32 border-2 border-blue-500/30">
                        <Image
                          src={member.image || "/placeholder-user.jpg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Name with gradient text effect */}
                    <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-gray-400 mb-4 text-sm text-center">
                      {member.role}
                    </p>
                    {/* Bio */}
                    <p className="text-gray-300 text-sm text-center mb-4">
                      {member.description}
                    </p>

                    {/* LinkedIn button with hover effect */}
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
