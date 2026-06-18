import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import CursorEffect from "@/components/layout/cursor-effect";
import TopNavbar from "@/components/layout/top-navbar";

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
          overflow-hidden
          bg-black
          text-white
          antialiased
        `}
      >
        <main
          className="
            relative
            flex
            h-screen
            flex-col
            overflow-hidden
            bg-black/30
          "
        >
          

          <TopNavbar />

          <section
            className="
              relative
              flex-1
              overflow-y-auto
              overflow-x-hidden
            "
          >
              <CursorEffect />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
