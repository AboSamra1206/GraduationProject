import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Graduation Project - Vision and Audio-Based AI System",
  description:
    "Advanced Drones and UAVs detection and countermeasure technology",
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
