import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Vision and Audio-Based AI System for Drones and UAVs - Graduation Project",
  description: "Advanced AI-powered graduation project system for drone detection, tracking and blocking",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cairo.variable}>
      <body className="font-cairo antialiased">{children}</body>
    </html>
  )
}
