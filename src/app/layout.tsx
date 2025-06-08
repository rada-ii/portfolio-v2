import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Rada Ivanković - Software Developer",
  description:
    "Portfolio of Rada Ivanković - Full-Stack Developer specialized in React, Next.js, Node.js, TypeScript",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Floating shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
