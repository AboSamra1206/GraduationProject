import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "AI-Based Vision and Audio System for Drone and UAV Detection and Tracking.",
  description: "Advanced Drones and UAVs detection and tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
