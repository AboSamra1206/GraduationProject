"use client"

import AnimatedBackground from "@/components/animated-background"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import OverviewSection from "@/components/overview-section"
import DocumentationSection from "@/components/documentation-section"
import GallerySection from "@/components/gallery-section"
import DownloadsSection from "@/components/downloads-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <DocumentationSection />
      <GallerySection />
      <TeamSection />
      <DownloadsSection />
      <Footer />
    </div>
  )
}
