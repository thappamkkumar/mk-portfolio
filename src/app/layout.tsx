// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import CursorEffect from "@/components/layout/cursor-effect";
import SiteBackground from "@/components/layout/site-background";
import TopNavbar from "@/components/layout/top-navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukesh Kumar",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-black
          text-white
          antialiased
          overflow-auto
        `}
      >
          {/* Navigation */}
          <TopNavbar />
        <main
          className="
            relative 
            bg-black
          "
        >
          {/* Global Background */}
          <SiteBackground />

          {/* Cursor Effect */}
          <CursorEffect />

        

          {/* Page Content */}
          <section className="relative z-10 mx-auto max-w-7xl  px-4 pt-10 pb-30 md:px-6" >
            {children}
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}